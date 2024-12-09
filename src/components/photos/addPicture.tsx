"use client"

import { AddPhoto } from "@/CRUD/photos/addPotho"
import React, { useState } from "react"

const AddPicture: React.FC = () => {

  const [files, setFiles] = useState()
  const images = []

  const handleSubmit = async (values:File) => {
    const url = await AddPhoto(values)
    console.log(values)
    return url
  }
  
  return (
    <div>
      <form onSubmit={ (e) => {
        e.preventDefault()
        console.log(files)
      }}>
        <label >
          upload picture 
        </label>
        <input type="file" onChange={ (e) => {
          images.push(e.target.files)
          setFiles(images)
        }}/> 
        <button onSubmit={handleSubmit}>
          clcik
        </button>
      </form>
    </div>
  )
} 

export default AddPicture