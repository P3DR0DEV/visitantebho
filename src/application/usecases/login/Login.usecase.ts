import { UserRepository } from "@/application/repositories/user.repository";
import { ActiveDirectoryAuth } from "@/util/interfaces/ActiveDirectoryAuth.interface";

class Login {
  constructor(private userRepo: UserRepository, private activeDirectoryAuth: ActiveDirectoryAuth) { }

  async execute(loginPass: { username: string, password: string }) {
    try {
      if (!loginPass.username)
        throw new Error("Login username is undefined");

      if (!loginPass.password)
        throw new Error("Login password is undefined");

      const user = await this.userRepo.findByUsername(loginPass.username);
      if (!user)
        throw new Error("User not allowed");

      const adAuth = await this.activeDirectoryAuth.authenticate(loginPass.username, loginPass.password);
      if (!adAuth)
        throw new Error(String(adAuth));

      return user;

    } catch (error) {
      if (error instanceof Error)
        throw new Error(error.message);

      throw new Error("Authentication invalid");
    };
  };
};

export { Login };
