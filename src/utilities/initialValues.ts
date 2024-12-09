import { Roll } from "@/enums/rolls";
import { CivilStatus, EmploymentStatus } from "@/enums/user";
import { SingUp } from "@/tipos/singUp";

export const initialValues: SingUp = {
  name: '',
  lastName: '',
  email: '',
  phone: 12345,
  nationality: '',
  dni: 12345,
  DOB: new Date,
  civilStatus: CivilStatus.SINGLE,
  employmentStatus: EmploymentStatus.UNEMPLOYED,
  userName: '',
  password: '',
  comfirmPassword: '',
  roll: Roll.USER,
};