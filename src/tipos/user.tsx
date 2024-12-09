import { CivilStatus, EmploymentStatus } from "@/enums/user"
import { Account } from "./account"

export interface User {
    id: string
    name:string
    lastName: string
    email: string
    phone: number
    nationality: string
    dni: number
    DOB: Date
    civilStatus: CivilStatus
    employmentStatus: EmploymentStatus
    account_: Account
}