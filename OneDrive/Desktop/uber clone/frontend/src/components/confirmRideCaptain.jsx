import {RiArrowDownWideLine} from "@remixicon/react"
const confirmRide=(props)=>{
    return (
       <div className={`min-h-[30vh] w-full fixed bottom-0 bg-white p-4 transition-all duration-500 ${props.confirmRidePanel ? 'translate-y-0' : 'translate-y-full'}`} >

<RiArrowDownWideLine className="w-full text-gray-600 size-10"
onClick={(e)=>{
    props.setConfirmRidePanel(false)
}} />

        <h1 className="text-2xl font-bold border-b-2 border-gray-600 pb-4 ">Confirm This Ride</h1>
        <section className="flex items-center justify-between my-5 px-2">
            <div className="flex items-center justify-center gap-2">
                <img className="h-20 rounded-full" src="https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg" alt="...loading"/>
                <h1 className="text-xl font-semibold ">Rider Name</h1>
            </div>
            <div className="bg-amber-800 px-4 py-2 rounded text-white text-center">
                <h1 className="text-lg font-bold">2.2 km</h1>
                <h1 className="text-lg font-bold">₹150</h1>
            </div>
        </section>
        <section className="">
            <div className="text-lg font-semibold border-b-2 border-black pb-2 mb-3">Pick up Location</div>
            <div className="text-lg font-semibold border-b-2 border-black pb-2">Destination Location</div>
        </section>
        <section className="flex flex-col items-center justify-center  my-5 gap-5 ">
            <input type="text" placeholder="Enter The OTP" className="border-2 border-gray-600 w-full px-3 py-2 rounded placeholder:text-lg" />
            
            <button className="bg-green-800 text-white rounded px-8 py-3 text-lg font-medium"
            onClick={()=>{
                props.setNewRidePanel(false)
                props.setCompleteRidePanel(true)
                props.setConfirmRidePanel(false)
            }}
            >Confirm</button>
        </section>
        </div>
    )
}

export default confirmRide