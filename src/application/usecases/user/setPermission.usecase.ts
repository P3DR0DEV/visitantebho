import { SystemPermission } from "@/util/common.types";
import { validRole } from "@/util/validation/validRole";
import { UserRepository } from "@/application/repositories/user.repository";
import { validSystemsAvailables } from "@/util/validation/validSystemDescription";

class SetUserPermission {
  constructor(private userRepo: UserRepository) { }

  private validInput(permission: SystemPermission) {

    if (!permission)
      throw new Error("Permission is undefined");

    if (!permission.role)
      throw new Error("Permission role is undefined");

    if (!permission.systemDescription)
      throw new Error("Permission system description is undefined");

    validRole(permission.role);
    validSystemsAvailables(permission.systemDescription);

  }

  async execute(username: string, permission: SystemPermission) {
    try {
      const user = await this.userRepo.findByUsername(username);
      if (!user)
        throw new Error("User not found");

      this.validInput(permission);

      const updatedUser = await this.userRepo.setPermission(user.id, permission);
      if (!updatedUser)
        throw new Error(`Failed to set permission in user: ${username}`);

      return updatedUser;

    } catch (error) {
      if (error instanceof Error)
        throw new Error(error.message);

      throw new Error(`Failed to set permission in user: ${username}`);
    };
  };
};

export { SetUserPermission };
