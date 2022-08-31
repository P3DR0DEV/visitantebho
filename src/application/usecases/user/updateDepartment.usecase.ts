import { Department } from "@/util/common.types";
import { validDepartment } from "@/util/validation/validDepartment";
import { UserRepository } from "@/application/repositories/user.repository";
import { UserOutput as UserData } from "@/application/usecases/user/types/user.types";

class UpdateUserDepartment {
  constructor(private userRepo: UserRepository) { }

  async execute(username: string, newDepartment: Department): Promise<UserData> {
    try {
      const user = await this.userRepo.findByUsername(username);
      if (!user)
        throw new Error("User not found");

      if (!newDepartment)
        throw new Error("Department is undefined");

      validDepartment(newDepartment);

      const updatedUser = await this.userRepo.updateDepartment(user.id, newDepartment);
      if (!updatedUser)
        throw new Error("Failed to update user department");

      return updatedUser;

    } catch (error) {
      if (error instanceof Error)
        throw new Error(error.message);

      throw new Error("Failed to update user department");
    };
  };
};

export { UpdateUserDepartment };
