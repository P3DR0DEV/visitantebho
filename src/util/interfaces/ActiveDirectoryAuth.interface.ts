type ActiveDirectoryConfig = {
  url: string;
  username: string;
  baseDN: string;
  password: string;
};

interface ActiveDirectoryAuth {
  authenticate(username: string, password: string): Promise<boolean>;
};

export { ActiveDirectoryAuth, ActiveDirectoryConfig };
