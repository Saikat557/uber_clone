
const completeRide =(props) =>{
    return(
        <div className={`w-full bg-yellow-600 text-white fixed bottom-0 p-4 min-h-[10vh] flex items-center justify-between px-10 ${props.completeRidePanel ? 'translate-y-0' : 'translate-y-full'} transition-all duration-500`}>
            
        <h1 className="text-white text-lg font-medium">Total Distance:- <span>10km</span></h1>
        <button
        onClick={()=>{
            
            props.setFinishRidePanel(true)
        }}
        className="bg-green-800 text-white px-5 py-3 rounded text-sm font-medium">Complete This Ride</button>
            
            </div>
    )
}

export default completeRide