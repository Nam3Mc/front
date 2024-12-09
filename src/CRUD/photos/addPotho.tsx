import axios from "axios"
// 
export async function AddPhoto(data: File): Promise<string> {
    const image = data.arrayBuffer
    const res = await axios.post(`http://localhost:3001/image`, image)
    const photo: string = await res.data
    console.log(photo)
    return photo
}