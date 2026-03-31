import uber_logo from '../assets/uber_logo.png'
import {RiTimeLine, RiDashboard3Line,RiBookletLine  } from "@remixicon/react"
import NewRideAvailable from '../components/newRideAvailable.jsx'
import ConfirmRide from "../components/confirmRideCaptain.jsx"
import {useState} from "react"
import CompleteRide from "../components/completeRide.jsx"
import FinishRide from '../components/finishRide.jsx'
const captainHome=()=>{
    const [newRidePanel,setNewRidePanel] = useState(false)
    const [confirmRidePanel,setConfirmRidePanel] = useState(false)
    const [completeRidePanel,setCompleteRidePanel] = useState(false)
    const [finishRidePanel,setFinishRidePanel] = useState(false)
    return (
        <div className="h-screen w-screen">
<div id="top" className="h-full  w-full">
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
              <div className="w-full h-2/7 bg-white absolute bottom-0 p-7">
              <section className="flex items-center justify-between ">
                <div className="flex items-center justify-start gap-2">
                    <img className="h-20 rounded-full" src="https://png.pngtree.com/png-clipart/20200224/original/pngtree-cartoon-color-simple-male-avatar-png-image_5230557.jpg" alt="...loading" />
                    <h3 className="text-lg font-bold">Saikat Bera</h3>
                </div>
              <div className="text-center bg-yellow-600 text-white px-3 py-1 rounded">
                <h1 className="text-base font-medium">Total Earning</h1>
                <h2>$1000.20</h2>
              </div>
              </section>
              <section className="flex items-center justify-between mt-10 ">
                <div className="flex items-center flex-col justify-center">
                    <RiTimeLine className="size-base" />
                    <h1 className="text-lg font-medium">10 hours online</h1>
                </div>
                <div className="flex items-center flex-col justify-center">
                    <RiDashboard3Line />
                    <h1 className="text-lg font-medium">20km distance</h1>
                </div>

                <div className="flex items-center flex-col justify-center">
                    <RiBookletLine />
                    <h1 className="text-lg font-medium">10 riders</h1>
                </div>
              </section>
              </div>

              <NewRideAvailable  setNewRidePanel={setNewRidePanel} newRidePanel={newRidePanel} setConfirmRidePanel={setConfirmRidePanel} />
              <ConfirmRide confirmRidePanel={confirmRidePanel} setConfirmRidePanel={setConfirmRidePanel} setNewRidePanel={setNewRidePanel} setCompleteRidePanel={setCompleteRidePanel}  />
              <CompleteRide completeRidePanel={completeRidePanel} setFinishRidePanel={setFinishRidePanel}  />
              <FinishRide finishRidePanel={finishRidePanel} setFinishRidePanel={setFinishRidePanel}  />
        </div>
         
    )
}
export default captainHome