import crypto from 'crypto';
import { jwtAdapter } from "@/infra/adapters/jwtAdapter";
import { UserOutput } from "@/application/usecases/user/types/user.types";
import { GenRefreshToken } from '@/application/usecases/token/GenRefresh.usecase';

const sut = () => {
  const jwtGenTokens = new jwtAdapter()
  const genRefreshToken = new GenRefreshToken(jwtGenTokens);

  const user: UserOutput = {
    id: crypto.randomUUID(),
    username: 'renantarifa',
    department: 'ti'
  };

  return {
    genRefreshToken,
    user
  };
};

describe("Generate access jwt token", () => {
  it("Should generate jwt token", async () => {
    const { genRefreshToken, user } = sut();

    const refreshToken = await genRefreshToken.execute<UserOutput>(user);
    // console.log(refreshToken);
    expect(typeof refreshToken).toBe("string");
  })
});