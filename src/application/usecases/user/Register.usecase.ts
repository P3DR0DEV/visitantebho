import { User } from "@/domain/entities/User.entity";
import { UserInput, UserOutput as UserData } from "@/application/usecases/user/types/user.types";
import { UserRepository } from "@/application/repositories/user.repository";
import { validDepartment } from "@/util/validation/validDepartment";

class UserRegister {
  constructor(private userRepo: UserRepository) { }

  async execute(input: UserInput): Promise<Pick<UserData, "id" | "name" | "lastname" | "username" | "department">> {
    try {
      if (!input.username)
        throw new Error("User username param is undefined");

      if (!input.name)
        throw new Error("User name param is undefined");

      if (!input.lastname)
        throw new Error("User lastname param is undefined");

      if (!input.department)
        throw new Error("User department param is undefined");

      validDepartment(input.department);

      const user = new User(input);
      await this.userRepo.register(
        user.id,
        {
          name: user.name,
          lastname: user.lastname,
          username: user.username,
          department: user.department
        }
      );

      return {
        id: user.id,
        name: user.name,
        lastname: user.lastname,
        username: user.username,
        department: user.department
      };

    } catch (error) {
      if (error instanceof Error)
        throw new Error(error.message);

      throw new Error("Failed to register new user");
    };
  };
};

export { UserRegister };
