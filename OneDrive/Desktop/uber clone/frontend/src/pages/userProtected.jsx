import {useContext,useEffect} from "react"
import {UserContextValue} from "../context/userContext"
import {useNavigate} from "react-router-dom"

const userProtected=({children})=>{

const token = localStorage.getItem("token")

  
   const navigate = useNavigate()
   
   useEffect(()=>{
    if(!token){
      console.log(token)
    return navigate("/login")
   }
   })
   return (
    <>
    {children}
    </>
   )

}
export default userProtected