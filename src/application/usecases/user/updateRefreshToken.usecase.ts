import { UserRepository } from "@/application/repositories/user.repository";

class UpdateUserRefreshToken {
  constructor(private userRepo: UserRepository) { }

  async execute(username: string, refreshToken: string): Promise<{ username: string, refreshToken: string }> {
    try {
      const user = await this.userRepo.findByUsername(username);
      if (!user)
        throw new Error("User not found");

      if (!refreshToken)
        throw new Error("Refresh token is undefined");

      const updatedUser = await this.userRepo.updateRefreshToken(user.id, refreshToken);
      if (!updatedUser)
        throw new Error("Failed to update user refresh token");

      return updatedUser;

    } catch (error) {
      if (error instanceof Error)
        throw new Error(error.message);

      throw new Error("Failed to update user refresh token");
    };
  };
};

export { UpdateUserRefreshToken };
