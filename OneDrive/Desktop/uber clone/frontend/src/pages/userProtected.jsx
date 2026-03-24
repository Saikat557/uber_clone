import {useContext,useEffect} from "react"
import {UserContextValue} from "../context/userContext"
import {useNavigate} from "react-router-dom"
import axios from "axios"

const userProtected=({children})=>{

const token = localStorage.getItem("token")
const {user,setUser} = useContext(UserContextValue)
  
   const navigate = useNavigate()
   
   useEffect(()=>{
    if(!token){
    return navigate("/login")
   }

axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`,{
  headers:{
    authorization: `Beare ${token}`
  }
})
.then((res)=>{
setUser(res.data)
})
.catch((err)=>{
  
  navigate("/login")
  localStorage.removeItem("token")
})


   },[token])
   return (
    <>
    {children}
    </>
   )

}
export default userProtected