import avatar from "../assets/avatar.png"
const waitingForDriver = (props) => {
  return (
    <div className={`min-h-[30vh] bg-white fixed bottom-0 w-full transition-all durations-500 ${props.waitingForDriverPanel?"translate-y-0":"translate-y-full"}`}>
        <div className="top flex items-center justify-between border-b-2 px-4 py-4 border-black gap-4">
<h3 className="text-xl font-medium">Meet At The Pickup Location</h3>
<div className="h-full bg-black text-white px-2 py-4 text-xl font-semibold text-center rounded">2 mints</div>
        </div>
     <div className="w-full h-full p-5">
          <div className="mid flex items-center justify-between px-4 mb-10">
        <div className="flex ">
         <img className="h-25 z-10 " src={avatar} alt="loading..." />
          <img className="size-50 absolute top-20 left-12 z-1" src="https://d1a3f4spazzrp4.cloudfront.net/car-types/haloProductImages/v1.1/TukTuk_RedWhite.png" alt="loading..." />
        </div>
        <div>
            <h1 className="text-xl font-medium">Name</h1>
            <h1 className="text-xl font-medium">captain Id</h1>
            <h2 className="text-lg text-gray-600">car Details</h2>
            <p className="text-gray-400">4.9</p>
        </div>
      </div>
      <div className="down text-lg font-semibold border-b-2 border-gray-600 mb-5">kelomal, Tamluk, purba medinipur, 721627</div>
        </div> 
    
    </div>
  );
};
export default waitingForDriver;
