import {RiUser3Fill} from "@remixicon/react"

const vehiclePanel =(props)=>{
    return(
 <div className={`fixed bg-white bottom-0 w-full h-[50%]  p-4 overflow-auto transition-all duration-500 ${props.vehiclePanel?"translate-y-0":"translate-y-full"}`}>
   <h4 className="text-2xl font-medium mb-3">Choose a Vehicle</h4>
<div onClick={()=>{props.setConfirmRidePanel(true)
props.setVehiclePanel(false)
props.setVehicle("car")
}

} className="w-full flex items-start justify-between  my-3 border-2 border-gray-100 p-2 rounded-md active:border-black">
    <img className="h-20 mr-3" src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=552/height=552/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy8zMDUxZTYwMi0xMGJiLTRlNjUtYjEyMi1lMzk0ZDgwYTljNDcucG5n" />
 <div className="">
    <h3 className="flex items-center text-2xl font-medium ">uber go  <span className="ml-3"><RiUser3Fill className="size-5" /></span> 4</h3>
    <p>Car</p>
    <h4 className="text-gray-400">premium ride in luxury car</h4>
   </div>
   <div className="text-xl font-medium">₹{props.fare.car}</div>
</div>

<div onClick={()=>{props.setConfirmRidePanel(true)
   props.setVehiclePanel(false)
   props.setVehicle("bike")
}}  className="w-full flex items-start justify-between my-3 border-2 border-gray-100 p-2 rounded-md active:border-black">
    <img className="h-20 mr-3" src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=552/height=552/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy85NTM4NTEyZC1mZGUxLTRmNzMtYmQ1MS05Y2VmZjRlMjU0ZjEucG5n" />
 <div className="">
    <h3 className="flex items-center text-2xl font-medium ">uber go  <span className="ml-3"><RiUser3Fill className="size-5" /></span> 1</h3>
    <p>Bike</p>
    <h4 className="text-gray-400">premium ride in luxury car</h4>
   </div>
   <div className="text-xl font-medium">₹{props.fare.bike}</div>
</div>

<div onClick={()=>{props.setConfirmRidePanel(true)
   props.setVehiclePanel(false)
   props.setVehicle("toto")
}}  className="w-full flex items-start justify-between border-2 border-gray-100 p-2 rounded-md my-3 active:border-black">
    <img className="h-20 mr-3" src="https://d1a3f4spazzrp4.cloudfront.net/car-types/haloProductImages/v1.1/TukTuk_RedWhite.png" />
 <div className="">
    <h3 className="flex items-center text-2xl font-medium ">uber go  <span className="ml-3"><RiUser3Fill className="size-5" /></span> 1</h3>
    <p>ToTo</p>
    <h4 className="text-gray-400">premium ride in luxury car</h4>
   </div>
   <div className="text-xl font-medium">₹{props.fare.toto}</div>
</div>

  
    </div> 

    )
}

export default vehiclePanel