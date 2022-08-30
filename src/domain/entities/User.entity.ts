import { AbstractEntity } from "@/core/domain/AbstractEntity";
import { Department, SystemPermission, SystemsAvailable } from "@/util/common.types";

type UserProps = {
  username: string;
  refreshToken?: string;
  department: Department;
  permissions?: SystemPermission[];
};
class User extends AbstractEntity<UserProps> {
  constructor(props: UserProps, id?: string) {
    super(props, id);

    this.permissions = (props.permissions) ? props.permissions : [];
  };

  private set refreshToken(refreshToken: string) {
    this.props.refreshToken = refreshToken;
  };

  private set department(newDepartment: Department) {
    this.props.department = newDepartment;
  };

  private set permissions(permissions: SystemPermission[]) {
    this.props.permissions = permissions;
  };

  private set permission(permission: SystemPermission) {
    this.props.permissions?.push(permission);
  }

  public get username() {
    return this.props.username;
  };

  public get department() {
    return this.props.department;
  };

  public get refreshToken() {
    if (this.props.refreshToken != undefined)
      return this.refreshToken

    return "";
  };

  public get permissions() {
    if (this.props.permissions != undefined)
      return this.props.permissions;

    return [];
  };

  public updateRefreshToken(refreshToken: string) {
    this.refreshToken = refreshToken;
  };

  public getPermission(systemDescription: SystemsAvailable) {
    return this.permissions.find(permission => permission.systemDescription === systemDescription);
  };

  public updateDeparment(newDepartment: Department) {
    this.department = newDepartment;
  };

  public setPermission(permission: SystemPermission) {
    this.permission = permission;
  };
};

export { User };
