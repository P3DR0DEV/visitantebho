import { AbstractEntity } from "@/core/domain/AbstractEntity";

type UserProps = {
  username: string;
  refreshToken?: string;
}

class User extends AbstractEntity<UserProps> {
  constructor(props: UserProps, id?: string) {
    super(props, id);
  };

  private set refreshToken(refreshToken: string) {
    this.props.refreshToken = refreshToken;
  };

  public get username() {
    return this.props.username;
  };

  public get refreshToken() {
    if (this.props.refreshToken != undefined)
      return this.refreshToken

    return "";
  };

  public updateRefreshToken(refreshToken: string) {
    this.refreshToken = refreshToken;
  };
};

export { User };
