import { UserRepoInMemory } from "@/infra/repositories/repositoryInMemory/user.repository";
import { UpdateUserDepartment } from "@/application/usecases/user/updateDepartment.usecase";

const sut = () => {
  const userRepo = new UserRepoInMemory();
  const update = new UpdateUserDepartment(userRepo);

  return {
    update
  };
};

describe("Update user department", () => {
  it("Should return error if user not found", async () => {
    const { update } = sut();

    try {
      await update.execute('user1', 'qualidade');
    } catch (error) {
      // console.log(error);
      expect(error).toEqual(new Error("User not found"));
    };
  });

  it("Should return error if user department is undefined", async () => {
    const { update } = sut();

    try {
      await update.execute('renantarifa@pme.local', '');
    } catch (error) {
      // console.log(error);
      expect(error).toEqual(new Error("Department is undefined"));
    };
  });

  it("Should return error if user department is not valid", async () => {
    const { update } = sut();

    try {
      await update.execute('renantarifa@pme.local', 'portaria');
    } catch (error) {
      // console.log(error);
      expect(error).toEqual(new Error('Department is not valid. Deparment received: portaria, expected: "almoxarifado", "custos", "pcp", "qualidade" ou "ti"'));
    };
  });

  it("Should update user department correctly", async () => {
    const { update } = sut();

    const user = await update.execute('renantarifa@pme.local', 'custos');
    // console.log(user);
    expect(user.department).toBe("custos");
  });
});
