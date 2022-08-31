import { Department } from "@/util/common.types";

type UserInput = {
  name: string;
  lastname: string;
  username: string;
  department: Department;
};

type UserOutput = {
  id: string;
  name: string;
  lastname: string;
  username: string;
  department: string;
  // refreshToken: string;
};

export { UserInput, UserOutput };
