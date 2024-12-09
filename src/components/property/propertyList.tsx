"use client"

import { LoadProperties } from "@/CRUD/properties/properties"
import { useEffect, useState } from "react"
import PropertyCard from "./propertyCards"

const PropertiesSeeder: React.FC = () => {

  const [properties, setProperties] = useState([])
  
  useEffect(() => {
    const propertiesList = async () => {
      try {
        const properties = await LoadProperties()
        if (properties.length == 0) {
          return "No property found"
        }
        else {
          setProperties(properties)
        }
      } catch (error) {
        console.log("An error occur:", error)
      }
    }
    propertiesList()
  }, [])

  return (
    <div style={{ maxWidth: "80%", margin: "auto"}}>
      <ul style={{display: "flex"}}>
        {properties.map((property) => (
          <PropertyCard key={property.id} {...property}/>
       ))}
      </ul>

    </div>
  )
}

export default PropertiesSeeder