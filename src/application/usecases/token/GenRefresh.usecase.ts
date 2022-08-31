import { jwtGenTokens } from "@/util/interfaces/jwtGenTokens.interface";

class GenRefreshToken {
  constructor(private genToken: jwtGenTokens) { }

  async execute<T>(data: T): Promise<string> {
    try {
      return this.genToken.createRefreshToken<T>(data);
    } catch (error) {
      if (error instanceof Error)
        throw new Error(error.message);

      throw new Error("Failed to generate refresh token");
    };
  };
};

export { GenRefreshToken };