import { Roll } from "@/enums/rolls";
import { CivilStatus, EmploymentStatus } from "@/enums/user";

export interface SingUp {
    name: string;
    lastName: string;
    email: string;
    phone: number;
    nationality: string
    dni: number
    DOB: Date
    civilStatus: CivilStatus
    employmentStatus: EmploymentStatus
    userName: string
    password: string;
    comfirmPassword: string
    roll: Roll    
}