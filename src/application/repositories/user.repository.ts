import { UserInput, UserOutput } from "@/application/usecases/user/types/user.types";
import { Department, SystemPermission } from "@/util/common.types";

interface UserRepository {
  register(userId: string, input: UserInput): Promise<void>;
  findByUsername(username: string): Promise<UserOutput>;
  updateRefreshToken(userId: string, refreshToken: string): Promise<{ username: string, refreshToken: string }>;
  updateDepartment(userId: string, newDepartment: Department): Promise<UserOutput>;
  setPermission(userId: string, permission: SystemPermission): Promise<{ username: string, permission: SystemPermission }>;
};

export { UserRepository };
