import {RiMapPinLine,RiMapPin2Fill, RiArrowDownWideLine} from "@remixicon/react"
const finishRide =(props) =>{
    return (
        <div className={`w-full bg-white min-h-[30vh] fixed bottom-0 px-5 py-8 ${props.finishRidePanel ? 'translate-y-0' : 'translate-y-full'} transition-all duration-500`}>
            <RiArrowDownWideLine className="w-full" onClick={()=>props.setFinishRidePanel(false)} />
            <h1 className="text-2xl font-bold border-b-2 border-gray-600 pb-5">Finish This Ride</h1>
            <section className="flex items-center justify-between mt-5">
                <h1 className="bg-yellow-600 px-4 py-2 rounded text-white text-lg font-medium">total Distance:- <span>10km</span></h1>
                <h1 className="bg-green-600 px-4 py-2 rounded text-white text-lg font-medium">total Fair:- <span>$120.00</span></h1>
            </section>
            <section className="flex flex-col mt-5 gap-3">

                <div className="border-b-2 border-black pb-2 flex   gap-2">
                    <RiMapPinLine className="size-8" />
<div className="text-lg font-medium">John Doe, 123 Main St, Apt 4, New York, NY 10001</div>
                </div>
                <div className="border-b-2 border-black pb-2 flex   gap-2">
                    <RiMapPin2Fill className="size-9" />
<div className="text-lg font-medium">44/1 Bharat Apartments, 5th Main Road, Bangalore 560041, KA, IND</div>
                </div>
                
            </section>
            <section>
 <button className="w-full bg-amber-600 rounded text-white text-xl font-semibold mt-5 py-3">Finish Ride</button>
 <p className="text-red-900 mt-5 text-sm font-md">Before finishing this ride, make sure the passenger has safely exited the vehicle.</p>
            </section>
           
    
            </div>
    )
}

export default finishRide