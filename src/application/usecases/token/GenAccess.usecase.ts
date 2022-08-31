import { jwtGenTokens } from "@/util/interfaces/jwtGenTokens.interface";

class GenAccessToken {
  constructor(private genToken: jwtGenTokens) { }

  async execute<T>(data: T): Promise<string> {
    try {
      return this.genToken.createAccessToken<T>(data);
    } catch (error) {
      if (error instanceof Error)
        throw new Error(error.message);

      throw new Error("Failed to generate access token");
    };
  };
};

export { GenAccessToken };