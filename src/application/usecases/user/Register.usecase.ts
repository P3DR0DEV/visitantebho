import { User } from "@/domain/entities/User.entity";
import { UserInput } from "@/application/usecases/user/types/user.types";
import { UserRepository } from "@/application/repositories/user.repository";

class UserRegister {
  constructor(private userRepo: UserRepository) { }

  async execute(input: UserInput) {
    try {
      const user = new User(input);
      await this.userRepo.register({ id: user.id, username: user.username });

      return {
        id: user.id,
        username: user.username
      };

    } catch (error) {
      if (error instanceof Error)
        throw new Error(error.message);

      throw new Error("Failed to register new user");
    };
  };
};

export { UserRegister };
