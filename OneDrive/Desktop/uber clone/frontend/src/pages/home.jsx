import {useContext,useState,useEffect,useRef} from "react"
import {UserContextValue} from "../context/userContext"
import {RiArrowDownWideLine,RiUser3Fill} from "@remixicon/react"
import uber_logo from "../assets/uber_logo.png"
import LocationPanel from "../components/locationPanel.jsx"
import VehiclePanel from "../components/vehiclePanel.jsx"
const home = ()=>{
    const [panel,setPanel] = useState(false)
    const [vehiclePanel,setVehiclepanel] = useState(false)
    const panelRef = useRef()


  
    return (
        <div className="h-screen w-screen relative overflow-hidden">
<div
onClick={()=>{
       setVehiclepanel(false) 
     }}
id="top" className="h-full w-full">
    <img
     
    className="size-15 absolute left-5" src={uber_logo} alt="...loading"/>
<img className="w-full h-full object-cover" src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="...loading" />

</div>



<div id="panel" className={`absolute bottom-0  transition-all duration-500 overflow-hidden ${panel?"h-full":"h-[30%]"}`} ref={panelRef}>
 <div className={`min-h-[30vh] h-[30%] px-10 py-4  bg-white `}>
<RiArrowDownWideLine className="absolute right-10 top-5" onClick={(e)=>{
    setPanel(false)
}}/>
<h4 className="mb-10 text-4xl font-semibold">Find a Trip</h4>
     <input
     onClick={(e)=>{
        setPanel(true)
     }}
      className="w-full p-2 bg-[#eee] rounded-md mb-5" placeholder="Add a pick up location" />
     <input
      onClick={(e)=>{
        setPanel(true)
     }}
      className="w-full p-2 bg-[#eee] rounded-md "  placeholder="Add Destination" />
    </div>
     <div className="w-full  -mt-4 h-full py-4 bg-white p-4 ">
      
<LocationPanel setVehipanel={setVehiclepanel} setPanel={setPanel} />
       
   </div>

   
</div>

{/* vehicle panel */}
 <VehiclePanel vehiclePanel={vehiclePanel} />
    
</div>



     
    )
}

export default home