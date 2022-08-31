import { Department } from "@/util/common.types";
import { UserRepository } from "@/application/repositories/user.repository";
import { UserInput, UserOutput } from "@/application/usecases/user/types/user.types";

type UserData = {
  id: string;
  name: string;
  lastname: string;
  username: string;
  refreshToken?: string;
  department: Department;
  createdAt: Date;
  updatedAt: Date;
}

class UserRepoInMemory implements UserRepository {
  public user: UserData[] = [
    { id: '1', name: "Renan", lastname: "Oliveira", username: 'renantarifa@pme.local', department: "ti", createdAt: new Date(), updatedAt: new Date() },
  ];

  async register(userId: string, input: UserInput): Promise<void> {
    const user = this.user.find(user => user.username === input.username);
    if (user)
      throw new Error("User already exist");

    this.user.push({ id: userId, ...input, createdAt: new Date(), updatedAt: new Date() });
  };

  async findByUsername(username: string): Promise<UserOutput> {
    const user = this.user.find(user => user.username === username);
    if (!user)
      throw new Error("User not found");

    return {
      id: user.id,
      name: user.name,
      lastname: user.lastname,
      username: user.username,
      department: user.department,
    };
  };

  async updateRefreshToken(userId: string, refreshToken: string): Promise<{ username: string; refreshToken: string; }> {
    const userIndex = this.user.findIndex(user => user.id === userId);
    if (userIndex == -1)
      throw new Error("User not found");

    this.user[userIndex].refreshToken = refreshToken;
    this.user[userIndex].updatedAt = new Date();

    return {
      username: this.user[userIndex].username,
      refreshToken: this.user[userIndex].refreshToken!,
    };
  };

  async updateDepartment(userId: string, newDepartment: Department): Promise<UserOutput> {
    const userIndex = this.user.findIndex(user => user.id === userId);
    if (userIndex == -1)
      throw new Error("User not found");

    this.user[userIndex].department = newDepartment;
    this.user[userIndex].updatedAt = new Date();

    return {
      id: this.user[userIndex].id,
      name: this.user[userIndex].name,
      lastname: this.user[userIndex].lastname,
      username: this.user[userIndex].username,
      department: this.user[userIndex].department,
    };
  }
};

export { UserRepoInMemory };
