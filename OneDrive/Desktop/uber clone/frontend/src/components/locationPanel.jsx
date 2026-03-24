import {RiMapPinFill } from "@remixicon/react"



const locationPanel =(props)=>{

    const locations = [ "kelomal basic college, kumarganj, Kelomal, Tamluk, 721627" , "kelomal basic college, kumarganj, Kelomal, Tamluk, 721627", "kelomal basic college, kumarganj, Kelomal, Tamluk, 721627" ,"kelomal basic college, kumarganj, Kelomal, Tamluk, 721627"]
    
   
        return(
            <>
             {locations.map((location,idx)=>{
            
return(
        <div 
        onClick={()=>{
            props.setVehipanel(true)
            props.setPanel(false)
        }}
        key={idx} className="w-full break-words active:border-black rounded-md border-2 border-gray-50 flex gap-3 items-center p-2 text-start">
           <RiMapPinFill className="size-7" />
            <p>{location}</p>
      
        </div>

    )
    })}
            </>
        )
   
    
}

export default locationPanel