
const LookingForDriver=(props)=>{
    return(
         <div className={`w-full fixed bottom-0 px-5 py-5 bg-white transition-translate duration-500  ${props.lookingForDriverPanel?"translate-y-0":"translate-y-full"}`}>

<h4 className="text-2xl font-semibold">Looking for Driver</h4>
<div className="flex  flex-col items-start justify-center w-full gap-3">
   
   <div className="w-full flex items-center justify-center">
<img className="h-30  " src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=956/height=538/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy8yOWZiYjhiMC03NWIxLTRlMmEtODUzMy0zYTM2NGU3MDQyZmEucG5n" alt="...loading" />
   </div>
    
<h1 className="text-xl font-semibold border-b-2 w-full py-3 border-gray-400">kelomal, 721627</h1>
<h1 className="text-xl font-semibold border-b-2 w-full py-3 border-gray-400">mechada, 721636</h1>
<h1 className="text-2xl font-semibold border-b-2 w-full py-3 border-gray-400 mb-10">₹30</h1>

</div>

        </div>
    )
}
export default LookingForDriver