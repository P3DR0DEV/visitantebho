import { UserOutput } from "@/application/usecases/user/types/user.types";
import { UserRepository } from "@/application/repositories/user.repository";

type UserData = {
  id: string;
  username: string;
  createdAt: Date;
  refreshToken?: string;
}

class UserRepoInMemory implements UserRepository {
  public user: UserData[] = [
    { id: '1', username: 'rotrenanoliveira', createdAt: new Date() },
  ];

  async register(input: { id: string; username: string; }): Promise<void> {
    const user = this.user.find(user => user.username === input.username);
    if (user)
      throw new Error("User already exist");

    this.user.push({ ...input, createdAt: new Date() });
  };

  async findByUsername(username: string): Promise<UserOutput> {
    const user = this.user.find(user => user.username === username);
    if (!user)
      throw new Error("User not found");

    return {
      id: user.id,
      username: user.username,
      refreshToken: (user.refreshToken) ? user.refreshToken : "",
    };
  };
};

export { UserRepoInMemory };
