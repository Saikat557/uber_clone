import axios from "axios"
import {useNavigate} from "react-router-dom"
import {useEffect} from "react"

const captainLogout =()=>{
    const navigate = useNavigate()
useEffect( ()=>{
    async function logout(){
      try{
const res = await axios.delete(`${import.meta.env.VITE_BASE_URL}/captains/logout`,{
        headers:{
            Authorization:`Bearer ${localStorage.getItem("token")}`
        }
    })
    if(res.status==200){
localStorage.removeItem("token")
navigate("/captain/login")
    }
    }catch(err){
        console.log(err.response)
    }  
    }
    logout()
    
},[])

    return (<div>captain logout</div>)
}

export default captainLogout