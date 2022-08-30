import { UserOutput } from "@/application/usecases/user/types/user.types";
import { UserRepository } from "@/application/repositories/user.repository";
import { Department } from "@/util/common.types";

type UserData = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  username: string;
  refreshToken?: string;
  department: Department;
}

class UserRepoInMemory implements UserRepository {
  public user: UserData[] = [
    { id: '1', username: 'renantarifa@pme.local', department: "ti", createdAt: new Date(), updatedAt: new Date() },
  ];

  async register(input: { id: string; username: string; department: Department }): Promise<void> {
    const user = this.user.find(user => user.username === input.username);
    if (user)
      throw new Error("User already exist");

    this.user.push({ ...input, createdAt: new Date(), updatedAt: new Date() });
  };

  async findByUsername(username: string): Promise<UserOutput> {
    const user = this.user.find(user => user.username === username);
    if (!user)
      throw new Error("User not found");

    return {
      id: user.id,
      username: user.username,
      department: user.department,
      refreshToken: (user.refreshToken) ? user.refreshToken : "",
    };
  };

  async updateRefreshToken(username: string, refreshToken: string): Promise<void> {
    const userIndex = this.user.findIndex(user => user.username === username);
    if (userIndex == -1)
      throw new Error("User not found");

    this.user[userIndex].refreshToken = refreshToken;

    return;
  }
};

export { UserRepoInMemory };
