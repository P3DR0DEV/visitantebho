import crypto from 'crypto';
import { jwtAdapter } from "@/infra/adapters/jwtAdapter";
import { UserOutput } from "@/application/usecases/user/types/user.types";
import { GenAccessToken } from "@/application/usecases/token/GenAccess.usecase";

const sut = () => {
  const jwtGenTokens = new jwtAdapter()
  const genAccessToken = new GenAccessToken(jwtGenTokens);

  const user: UserOutput = {
    id: crypto.randomUUID(),
    username: 'renantarifa',
    department: 'ti'
  };

  return {
    genAccessToken,
    user
  };
};

describe("Generate access jwt token", () => {
  it("Should generate jwt token", async () => {
    const { genAccessToken, user } = sut();

    const accessToken = await genAccessToken.execute<UserOutput>(user);
    // console.log(accessToken);
    expect(typeof accessToken).toBe("string");
  })
});