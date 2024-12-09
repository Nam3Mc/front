import { Property } from "@/tipos/property"
import axios from "axios"

export async function GetOneProperty(id: string): Promise<Property> {
    const res = await axios.get(`http://localhost:3001/property/book/${id}`)
    const property: Property = await res.data
    return property
}