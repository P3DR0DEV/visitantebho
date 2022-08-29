import { UserOutput } from "@/application/usecases/user/types/user.types";

interface UserRepository {
  register(input: { id: string, username: string }): Promise<void>;
  findByUsername(username: string): Promise<UserOutput>;
};

export { UserRepository };
