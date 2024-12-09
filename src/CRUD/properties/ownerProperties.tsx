import { Property } from "@/tipos/property"
import axios from "axios"

export async function OwnerProperties(): Promise<Property[]> {
    const account = localStorage.getItem("userId")
    const res = await axios.get(`http://localhost:3001/property/owner/${account}` )
    const properties: Property[] = await res.data
    return properties
}