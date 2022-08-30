import { jwtAdapter } from "@/infra/adapters/jwtAdapter";
import { Login } from "@/application/usecases/login/Login.usecase";
import { ActiveDirectoryAdapter } from "@/infra/adapters/ActiveDirectoryAdapter";
import { UserRepoInMemory } from "@/infra/repositories/repositoryInMemory/user.repository"

const sut = () => {
  const userRepo = new UserRepoInMemory();
  const activeDirectory = new ActiveDirectoryAdapter();
  const jwtGenTokens = new jwtAdapter();
  const login = new Login(userRepo, activeDirectory, jwtGenTokens);

  return { login };
}

describe("Login", () => {
  it("test", async () => {
    const { login } = sut();

    try {
      const sigup = await login.execute({ username: "", password: "" })
      console.log(sigup);
    } catch (error) {
      console.log(error);
    }
  })
})