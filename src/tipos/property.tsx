import { Account } from "./account"

export interface Property {
    name: string
    price: number
    description: string
    address: string
    hasMinor: boolean
    pets: boolean
    accountId: string
    image: string[]
    // id: string
}