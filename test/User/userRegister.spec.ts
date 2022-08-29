import { UserRegister } from "@/application/usecases/user/Register.usecase";
import { UserRepoInMemory } from "@/infra/repositories/repositoryInMemory/user.repository"

// SUT  => System Under Test
const sut = () => {
  const userRepo = new UserRepoInMemory();
  const register = new UserRegister(userRepo);

  return {
    register
  };
};

describe("user register", () => {
  it("Should return error if user already exist", async () => {
    const { register } = sut();

    try {
      await register.execute({ username: "rotrenanoliveira" });
    } catch (error) {
      expect(error).toEqual(new Error("User already exist"));
    }
  });

  it("Should register new user", async () => {
    const { register } = sut();

    try {
      const user = await register.execute({ username: 'renanoliveira' });
      expect(user.username).toBe('renanoliveira');
    } catch (error) {
      console.log(error);
    }
  });
});
