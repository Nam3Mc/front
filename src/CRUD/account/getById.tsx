import { Account } from "@/tipos/account";
import axios from "axios";

export async function GetAccount (id: string): Promise<Account> {
    const data = await axios.get(`http://localhost:3001/account/${id}`)
    const account = await data.data
    console.log(account)
    return account
}