import {RiMapPinFill } from "@remixicon/react"
import axios from "axios"
import {useState} from "react"



const locationPanel =(props)=>{
   

  
if(props.suggestion.length>0){
  
return(
            <>
             {props.suggestion.map((location,idx)=>{
               
           
return(
        <div 
        onClick={()=>{
          if(props.activeField=="pickup") {
             props.setPickup(location.display_name)
          }else if(props.activeField=="destination"){
           props.setDestination(location.display_name)
          }
        }}
        key={idx} className="w-full mt-5 break-words active:border-black rounded-md border-2 border-gray-50 flex gap-3 items-center p-2 text-start">
           <RiMapPinFill className="size-7" />
            <p>{location.display_name}</p>
         
      
        </div>

    )
    })}
            </>
        )
    }
}
        
 
   

    
    
   
       
   
    


export default locationPanel