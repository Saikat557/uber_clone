import {useNavigate} from "react-router-dom"
import {useEffect,useContext,useState} from "react"
import axios from "axios"
import {CaptainDataContext} from "../context/captainContext"

const captainProtectedWrapper=({children})=>{
const navigate = useNavigate()
const token = localStorage.getItem("token")
const {captain,setCaptain} = useContext(CaptainDataContext)
const [isLoading,setIsLoading] = useState(true)
useEffect(()=>{
    if(!token)
        return navigate("/captain/login")
},[token])

useEffect(()=>{
axios.get(`${import.meta.env.VITE_BASE_URL}/captains/captain`,{
    headers:{
        Authorization: `Bearer ${localStorage.getItem("token")}`
    }
})
.then((res)=>{
if(res.status==200){
    setCaptain(res.data.captain)
    setIsLoading(false)
}

})
.catch((err)=>{
console.log(err.response)
navigate("/captain/login")
localStorage.removeItem("token")
})
},[])


if(isLoading){
    return(<div>loading...</div>)
}

    return(
        <>
        {children}
        </>
    )
}

export default captainProtectedWrapper