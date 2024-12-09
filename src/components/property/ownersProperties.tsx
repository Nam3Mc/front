"use client"

import { OwnerProperties } from "@/CRUD/properties/ownerProperties"
import { useEffect, useState } from "react"
import PropertyCard from "./propertyCards"
import OwnerPropertyCard from "./ownersPropertyCard"

const OwnerPropertiesList: React.FC = () => {

    const [properties, setProperties] = useState([])

    useEffect(() => {
        const propertiesList = async () => {
            try {
                const MyProperties = await OwnerProperties()
                if (MyProperties.length < 0) {
                    return "You don't have any Property listed yet"
                }
                else {
                    setProperties(MyProperties)
                }
            } catch (error) {
                console.log("An error occur:", error)
            }
        }
        propertiesList()
    }, [])

    return (
        <div>
            <ol>
                {properties.map( (property) => (
                    <OwnerPropertyCard key={property.id} {...property}/>
                ))}
            </ol>
        </div>
    )
}

export default OwnerPropertiesList