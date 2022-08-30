import { UserOutput } from "@/application/usecases/user/types/user.types";
import { Department } from "@/util/common.types";

interface UserRepository {
  register(input: { id: string, username: string, department: Department }): Promise<void>;
  findByUsername(username: string): Promise<UserOutput>;
  updateRefreshToken(username: string, refreshToken: string): Promise<void>;
};

export { UserRepository };
