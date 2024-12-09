import { Property } from "@/tipos/property";

const account = localStorage.getItem("userId")
export const newPropertyValues: Property = {
    id: "",
    name: "",
    price: 350000,
    description: "",
    address: "",
    hasMinor: false,
    pets: false,
    accountId: `${account}`,
    image: []
}