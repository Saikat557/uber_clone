import logo from "../assets/uber_logo.png";
import { Link,useNavigate } from "react-router-dom";
import {useState,useEffect,useContext} from "react"
import axios from "axios"
import {CaptainDataContext} from "../context/captainContext"
const captainRegister =()=>{
    const [firstName,setFirstName] = useState("")
    const [lastName,setLastName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
   
const [plateNumber,setPlateNumber] = useState("")
const [capacity,setCapacity] = useState("")
const [carType,setCarType] = useState("")
const [color,setColor] = useState("")

const {captain,setCaptain} = useContext(CaptainDataContext)
const navigate = useNavigate()

    return(
        <div className="h-screen w-full ">
      <img src={logo} className="size-20 ml-10 " />

      <form
      onSubmit={(e)=>{
        e.preventDefault()
const captain = {
  fullname:{
    firstname:firstName,
    lastname:lastName
  },email,password,
  vehicle:{
    plateNumber,
    capacity,
    carType,
    color
  }
}

axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`,captain)
.then((res)=>{
 setCaptain(res.data.captain) 
 localStorage.setItem("token",res.data.token)
  navigate("/captain/home")
})
.catch((err)=>{
  console.log(err.response)

})


        
        setFirstName("")
        setLastName("")
        setEmail("")
        setPassword("")
        setPlateNumber("")
        setCapacity("")
        setCarType("")
        setColor("")
        
        
      }} 
      className="flex flex-col items-center justify-center w-full px-10 py-5 gap-7">
        <div className="flex flex-col w-full ">
          <label className="mb-3 text-2xl font-semibold mb-2">
           Captain Full Name
          </label>
          <div className="flex items-center justify-center gap-5 w-full">
<input
value={firstName}
onChange={(e)=>{
    setFirstName(e.target.value)
}}
            type="text"
            placeholder="First Name"
            className="bg-gray-100 w-full outline-none border-1 border-black py-1 px-2 rounded placeholder:text-base"
          />
          <input
          value={lastName}
onChange={(e)=>{
    setLastName(e.target.value)
}}
            type="text"
            placeholder="Last Name"
            className="bg-gray-100 w-full outline-none border-1 border-black py-1 px-2 rounded placeholder:text-base"
          />

          </div>
          
        </div>

<div className="flex flex-col w-full ">
          <label className="mb-3 text-2xl font-semibold mb-2">Email</label>
          <input
          value={email}
onChange={(e)=>{
    setEmail(e.target.value)
}}
            type="text"
            placeholder="example@gmail.com"
            className="bg-gray-100 w-full outline-none border-1 border-black py-1 px-2 rounded placeholder:text-base"
          />
        </div>

        <div className="flex flex-col w-full ">
          <label className="mb-3 text-2xl font-semibold mb-2">password</label>
          <input
          value={password}
onChange={(e)=>{
    setPassword(e.target.value)
}}
            type="text"
            placeholder="enter your password"
            className="bg-gray-100 w-full outline-none border-1 border-black py-1 px-2 rounded placeholder:text-base"
          />
        </div>
        <div className="flex flex-col w-full ">
          <label className="mb-3 text-2xl font-semibold mb-2">vehicle details</label>
         
         <div className="w-full grid grid-cols-2 gap-4">

          <input
          value={plateNumber}
          onChange={(e)=>{
            setPlateNumber(e.target.value)
          }}
          type="text"
            placeholder="plateNumber"
            className="w-1/2 bg-gray-100 w-full outline-none border-1 border-black py-1 px-2 rounded placeholder:text-base"
          />
           <input
            value={capacity}
          onChange={(e)=>{
            setCapacity(e.target.value)
          }}
          type="text"
            placeholder="Capacity"
            className="w-1/2 bg-gray-100 w-full outline-none border-1 border-black py-1 px-2 rounded placeholder:text-base"
          />
           <input
            value={color}
          onChange={(e)=>{
            setColor(e.target.value)
          }}
          type="text"
            placeholder="color"
            className="w-1/2 bg-gray-100 w-full outline-none border-1 border-black py-1 px-2 rounded placeholder:text-base"
          />
          <select
          value={carType}
          onChange={(e)=>{
            setCarType(e.target.value)
           
          }}
          className="w-1/2 bg-gray-100 w-full outline-none border-1 border-black py-1 px-2 rounded placeholder:text-base"
          >
            <option>select your car</option>
            <option>car</option>
            <option>bike</option>
            <option>toto</option>
          </select>
         </div>
        
        </div>
        <div>
          <button className="w-full py-2 bg-black text-white text-xl font-semibold rounded">
           Create Captain Account
          </button>
          <p className="text-xs m-2">
            By creating an account or logging into our website/application, you
            agree to follow these Terms and Conditions.
          </p>
        </div>

        <p className="">
          Already Have an account ?
          <span className="text-blue-800 font-bold underline">
            <Link to="/captain/login">Login Back</Link>
          </span>
        </p>
      </form>
      <hr />
      <div className="px-5 mt-10">
        <button className="w-full bg-[#bfba2b] mt-3 text-white py-2 text-xl font-bold rounded ">
          <Link to="/login">Login as a user</Link>
        </button>
      </div>
    </div>
    )
}
export default captainRegister