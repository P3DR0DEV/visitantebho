import { jwtAdapter } from "@/infra/adapters/jwtAdapter";
import { Login } from "@/application/usecases/login/Login.usecase";
import { ActiveDirectoryAdapter } from "@/infra/adapters/ActiveDirectoryAdapter";
import { UserRepoInMemory } from "@/infra/repositories/repositoryInMemory/user.repository"

const sut = () => {
  const userRepo = new UserRepoInMemory();
  const activeDirectory = new ActiveDirectoryAdapter();
  const jwtGenTokens = new jwtAdapter();

  // init use cases
  const login = new Login(userRepo, activeDirectory);

  return { login };
}

describe("Login", () => {

  it("Should return error if username is undefined", async () => {
    const { login } = sut();

    try {
      await login.execute({ password: "" });
    } catch (error) {
      // console.log(error);
      expect(error).toEqual(new Error("Login username is undefined"));
    }
  });

  it("Should return error if password is undefined", async () => {
    const { login } = sut();

    try {
      await login.execute({ username: "username" });
    } catch (error) {
      // console.log(error);
      expect(error).toEqual(new Error("Login password is undefined"));
    }
  });

  it("Should return error if user not found", async () => {
    const { login } = sut();

    try {
      await login.execute({ username: "username", password: "123" });
    } catch (error) {
      // console.log(error);
      expect(error).toEqual(new Error("User not found"));
    }
  });

  it("Should return error if password not valid", async () => {
    const { login } = sut();

    try {
      await login.execute({ username: "renantarifa@pme.local", password: "PassWord1234" });
    } catch (error) {
      // console.log(error);
      expect(error).toBeInstanceOf(Error);
    }
  });

  it("Should return user data if user is valid and allowed", async () => {
    const { login } = sut();

    try {
      const user = await login.execute({ username: "renantarifa@pme.local", password: "" });
      // console.log(user);
      expect(user.department).toBe("ti");
    } catch (error) {
      console.log(error);
    };
  });
});
