import { Roll } from "@/enums/rolls"
import { Property } from "./property"
import { Contract } from "./contract"
import { User } from "./user"

export interface Account {
    id: string
    userName: string
    roll: Roll
    user: User
    contract: Contract
    property: Property
}