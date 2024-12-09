import NewProperty from "@/components/property/addProperty"
import AddPicture from "@/components/photos/addPicture"

const AddProperty: React.FC = () => {
    return (
        <div style={{ display: "flex"}}>
            <NewProperty/>
            {/* <AddPicture/> */}
        </div>
    )
} 

export default AddProperty