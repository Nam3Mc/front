import { Property } from "@/tipos/property"
import axios from "axios"

export async function LoadProperties(): Promise<Property[]> {
    const res = await axios.get(`http://localhost:3001/property`)
    const properties: Property[] = await res.data
    return properties
}