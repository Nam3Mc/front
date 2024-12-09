import PropertiesSeeder from "../property/propertyList";
import SearchBar from "./seachBar";

export default function Home() {
  return (
    <div className="text-center mt-10 m-auto">
      <h1 className="text-4xl text-blue-500 mb-2 ">Renting</h1>
      <h3 className="text-xl font-medium text-blue-500" >Find the place better fit you</h3>
      <SearchBar/>
      <PropertiesSeeder/>
    </div>
  );
}