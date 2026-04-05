import { useContext, useState, useEffect, useRef } from "react";
import { UserContextValue } from "../context/userContext";
import { RiArrowDownWideLine, RiUser3Fill } from "@remixicon/react";
import uber_logo from "../assets/uber_logo.png";
import LocationPanel from "../components/locationPanel.jsx";
import VehiclePanel from "../components/vehiclePanel.jsx";
import ConfirmRide from "../components/confirmRide.jsx";
import LookingForDriver from "../components/LookingForDriver.jsx";
import WaitingForDriver from "../components/waitingForDriver.jsx";
import axios from "axios";
const home = () => {
  const [panel, setPanel] = useState(false);
  const [vehiclePanel, setVehiclePanel] = useState(false);
  const panelRef = useRef();
  const [confirmRidePanel, setConfirmRidePanel] = useState(false);
  const [lookingForDriverPanel, setLookingForDriverPanel] = useState(false);
  const [waitingForDriverPanel, setWaitingForDriverPanel] = useState(false);
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [activeField,setActiveField] = useState("")
  const [fare,setFare] = useState({})
  const [vehicle,setVehicle] = useState("")

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (pickup.length < 3) return;
      const res = await getSuggestion(pickup);

      setSuggestion(res);
    }, 1000);

    return () => clearTimeout(timer);
  }, [pickup]);

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (destination.length < 3) return;
      const res = await getSuggestion(destination);

      setSuggestion(res);
    }, 1000);

    return () => clearTimeout(timer);
  }, [destination]);

  async function getSuggestion(origin) {
    try {
      const result = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/maps/suggestion`,
        {
          params: {
            origin,
          },

          header: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        },
      );

      return result.data;
    } catch (err) {
      console.log(err.response);
    }
  }

  async function getFare(origin1, origin2){
    if(!origin1 || !origin2) return alert("please fill pick up and destination")
    try{
const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/rides/get-fare`,{
  params:{
    pickup:origin1,
    destination:origin2
  },
  headers:{
    authorization:`Bearer ${localStorage.getItem("token")}`
  }
})
setFare(res.data)

    }catch(err){

    }
  }

    async function createUser(){
        const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/rides/create-ride`,{
            pickup,destination,vehicle
        },{
          headers:{
            authorization:`Bearer ${localStorage.getItem("token")}`
          }
        })
        console.log(res)
    }

  return (
    <div className="h-screen w-screen relative overflow-hidden">
      <div id="top" className="h-full w-full">
        <img
          className="size-15 absolute left-5"
          src={uber_logo}
          alt="...loading"
        />
        <img
          className="w-full h-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt="...loading"
        />
      </div>

      <div
        id="panel"
        className={`absolute bottom-0  transition-all duration-500 overflow-hidden ${panel ? "h-full" : "h-[30%]"}`}
        ref={panelRef}
      >
        <div className={`min-h-[30vh] h-[30%] px-10 py-4  bg-white `}>
          <RiArrowDownWideLine
            className="absolute right-10 top-5"
            onClick={(e) => {
              setPanel(false);
            }}
          />
          <h4 className="mb-10 text-4xl font-semibold">Find a Trip</h4>
          <input
            onClick={(e) => {
              setPanel(true);
              setActiveField("pickup")
            }}
            className="w-full p-2 bg-[#eee] rounded-md mb-5"
            placeholder="Add a pick up location"

            value={pickup}
            onChange={(e) => {
              setPickup(e.target.value);
            }}
          />
          <input
            onClick={(e) => {
              setPanel(true);
              setActiveField("destination")
            }}
            className="w-full p-2 bg-[#eee] rounded-md "
            placeholder="Add Destination"

            value={destination}
            onChange={(e) => {
              setDestination(e.target.value);
            }}
          />
          <button 
          onClick={()=>{
            setVehiclePanel(true)
            setPanel(false)
            getFare(pickup,destination)
          }}
          className="w-full  bg-black text-white mt-5 py-2 text-xl font-medium rounded-md active:scale-95 duration-300 transition-all">Find a Trip</button>
        </div>
        <div className="w-full  -mt-4 h-full py-4 bg-white p-4 ">
          <LocationPanel
            setPickup={setPickup}
            setDestination={setDestination}
            suggestion={suggestion}
           
            
            activeField={activeField}
          />
        </div>
      </div>

      {/* vehicle panel */}
      <VehiclePanel
        vehiclePanel={vehiclePanel}
        setVehiclePanel={setVehiclePanel}
        setConfirmRidePanel={setConfirmRidePanel}
        fare={fare}
        setVehicle={setVehicle}
      />

      <ConfirmRide
        confirmRidePanel={confirmRidePanel}
        setLookingForDriverPanel={setLookingForDriverPanel}
        setConfirmRidePanel={setConfirmRidePanel}
        pickup={pickup}
        destination={destination}
        fare={fare}
        vehicle={vehicle}
        createUser={createUser}
      />
      <LookingForDriver lookingForDriverPanel={lookingForDriverPanel}
       pickup={pickup}
        destination={destination}
        fare={fare}
        vehicle={vehicle}
      />
      <WaitingForDriver waitingForDriverPanel={waitingForDriverPanel} />
    </div>
  );
};

export default home;
