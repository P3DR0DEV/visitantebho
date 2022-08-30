import { Department } from "@/util/common.types";

type UserInput = {
  username: string;
  department: Department;
};

type UserOutput = {
  id: string;
  username: string;
  department: string;
  refreshToken: string;
};

export { UserInput, UserOutput };
