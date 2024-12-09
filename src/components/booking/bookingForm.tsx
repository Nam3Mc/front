"use client"

import { GetOneProperty } from "@/CRUD/properties/getOneProperty"
import { error } from "console"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

export default function BookingForm() {

    const searchParams = useSearchParams();
    const id = searchParams.get("id");
    const [address, setAddress] = useState(null)
    const [name, setName] = useState(null)
    const [price, setPrice] = useState(null)
    const [description, setDescription] = useState(null)

    useEffect(() => {
        const property = async () => {
            const response = await GetOneProperty(id)
            setAddress(response.address)
            setName(response.name)
            setPrice(response.price)
        }
        property()
    }, [])

    return (
        <div>
            {address}
            {name}
            {price}
            {description}
        </div>
    )
}