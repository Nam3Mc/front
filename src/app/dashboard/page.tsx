"use client"

const HomePage: React.FC = () => {
  return (
    <div className="flex w-3/4 h-[600px] mx-auto mt-10">
      <div className="w-3/4 bg-blue-500 h-full">
        <h1 className="text-white text-center mt-6">Property </h1>
        <h3 className="text-white text-center mt-6 m-10">
          this section needs to contain the property where member is renting 
          and in the side below could have some pictures here should be a property
          name and pictures
        </h3>
      </div>
      <div className="w-1/4 bg-red-500 h-full">
          <h1 className="text-white text-center mt-6">Caracteristics </h1>
          <h3 className="text-white text-center mt-6">
            here we will have thew property caracteristics 
            like how many people is allowed 
            if it allowed minors 
            or pets 
            how many rooms 
            ho many baths 
          </h3>
      </div>
      <div className="w-1/4 flex flex-col h-full">
        <div className="bg-green-500 h-1/2">
          <h1 className="text-white text-center mt-6">Calendar</h1>
          <h3 className="text-white text-center mt-6">
            a calendar showing in color diferent events 
            the event will be leisted below 
          </h3>
        </div>

        <div className="bg-green-400 h-1/2">
          <h1 className="text-white text-center mt-6">Comming events </h1>
          <h3 className="text-white text-center mt-6">
            
            mounthly payment due date
            bills due date or status 
            finish contrac date
          </h3>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
