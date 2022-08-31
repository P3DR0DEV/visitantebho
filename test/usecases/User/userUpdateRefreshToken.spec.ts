import { UserRepoInMemory } from "@/infra/repositories/repositoryInMemory/user.repository";
import { UpdateUserRefreshToken } from "@/application/usecases/user/updateRefreshToken.usecase";

const sut = () => {
  const userRepo = new UserRepoInMemory();
  const update = new UpdateUserRefreshToken(userRepo);

  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoiMDA5M2UzZDgtZDcxNi00YWJhLThhYTktODc1ZGI2MTM0Njc5IiwidXNlcm5hbWUiOiJyZW5hbm9saXZlaXJhIiwiZGVwYXJ0bWVudCI6InRpIn0sImlhdCI6MTY2MTk1NTEyMCwiZXhwIjoxNjYyNTU5OTIwfQ.XywYV_yumxs39FLlYqq7ZHAv09URrblyrz252_fVmeQ";

  return {
    update,
    token
  };
};

describe("Update user department", () => {
  it("Should return error if user not found", async () => {
    const { update } = sut();

    try {
      await update.execute('user1', 'token');
    } catch (error) {
      // console.log(error);
      expect(error).toEqual(new Error("User not found"));
    };
  });

  it("Should return error if user refresh token is undefined", async () => {
    const { update } = sut();

    try {
      await update.execute('renantarifa@pme.local', '');
    } catch (error) {
      // console.log(error);
      expect(error).toEqual(new Error("Refresh token is undefined"));
    };
  });

  it("Should update user refresh token correctly", async () => {
    const { update, token } = sut();

    const user = await update.execute('renantarifa@pme.local', token);
    // console.log(user);
    expect(typeof user.refreshToken).toBe("string");
  });
});
