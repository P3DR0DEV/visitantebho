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
      await register.execute({ name: "Renan", lastname: "Oliveira", username: "rotrenantarifa", department: "ti" });
    } catch (error) {
      expect(error).toEqual(new Error("User already exist"));
    }
  });

  it("Should throw a error if username is undefined", async () => {
    const { register } = sut();

    try {
      await register.execute({});
    } catch (error) {
      expect(error).toEqual(new Error("User username param is undefined"));;
    }
  });

  it("Should throw a error if user name is undefined", async () => {
    const { register } = sut();

    try {
      await register.execute({ username: "renan" });
    } catch (error) {
      expect(error).toEqual(new Error("User name param is undefined"));;
    }
  });

  it("Should throw a error if user lastname is undefined", async () => {
    const { register } = sut();

    try {
      await register.execute({ name: "Renan", username: "renan" });
    } catch (error) {
      expect(error).toEqual(new Error("User lastname param is undefined"));;
    }
  });

  it("Should throw a error if department is undefined", async () => {
    const { register } = sut();

    try {
      await register.execute({ name: "Renan", lastname: "Oliveira", username: "username" });
    } catch (error) {
      expect(error).toEqual(new Error("User department param is undefined"));;
    }
  });

  it("Should throw a error if department is not valid", async () => {
    const { register } = sut();

    try {
      await register.execute({ name: "Renan", lastname: "Oliveira", username: "username", department: "portaria" });
    } catch (error) {
      expect(error).toEqual(new Error('Department is not valid. Deparment received: portaria, expected: "almoxarifado", "custos", "pcp", "qualidade" ou "ti"'));
    }
  });

  it("Should register new user", async () => {
    const { register } = sut();

    try {
      const user = await register.execute({ name: "Renan", lastname: "Oliveira", username: 'renanoliveira', department: "ti" });
      expect(user.username).toBe("renanoliveira@pme.local");
    } catch (error) {
      console.log(error);
    }
  });
});
