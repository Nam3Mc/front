import { Property } from "@/tipos/property"
import axios from "axios"

export async function AddProperty(data: Property): Promise<Property> {
    const id = localStorage.getItem
    const res = await axios.post(`http://localhost:3001/property`, data)
    const properties: Property = await res.data
    return properties
}