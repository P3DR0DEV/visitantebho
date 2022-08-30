import { ActiveDirectoryAuth, ActiveDirectoryConfig } from "@/util/interfaces/ActiveDirectoryAuth.interface";
import { Log } from "@/util/Logger";
import 'dotenv/config';

var ActiveDirectory = require('activedirectory');

class ActiveDirectoryAdapter implements ActiveDirectoryAuth {
  private activedirectory: any;

  constructor() {
    const props: ActiveDirectoryConfig = {
      url: process.env.AD_URL!,
      username: process.env.AD_USERNAME!,
      password: process.env.AD_PASSWORD!,
      baseDN: process.env.AD_DOMAIN_CONTROLLER!,
    };

    this.activedirectory = new ActiveDirectory(props);
  };

  public async authenticate(username: string, password: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.activedirectory.authenticate(username, password, (error: any, auth: boolean) => {
        if (auth) {
          Log.info(`User ${username} has logged in`);
          return resolve(true)
        };

        if (error instanceof Error) {
          Log.error(error.name, error.message);
          return reject(error);
        };
      });
    });
  };
};

export { ActiveDirectoryAdapter };
