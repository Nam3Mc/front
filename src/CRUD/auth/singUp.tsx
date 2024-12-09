import { SingUp } from "@/tipos/singUp"
import { User } from "@/tipos/user"
import axios from "axios"

export async function SignUp(data: SingUp): Promise<User> {
    const res = await axios.post(`http://localhost:3001/auth/signup`, data)
    const user: User = await res.data
    return user
}