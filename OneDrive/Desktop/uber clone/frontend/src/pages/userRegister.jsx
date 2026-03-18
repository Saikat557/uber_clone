import logo from "../assets/uber_logo.png";
import { Link,useNavigate } from "react-router-dom";
import {useState,useEffect} from "react"
import {useContext} from "react"
import {UserContextValue} from "../context/userContext"
import axios from "axios"


const userRegister =()=>{
const [firstName,setFirstName] = useState("")
const [lastName,setLastName] = useState("")
const [email,setEmail] = useState("")
const [password,setPassword] = useState("")
const {user,setUser} = useContext(UserContextValue)
const navigate = useNavigate()



    return(
         <div className="h-screen w-full ">
      <img src={logo} className="size-20 ml-10 " />

      <form
      onSubmit={async (e)=>{
        e.preventDefault()
        const newUser = {
          fullname:{
            firstname:firstName,lastname:lastName
          },
          email,
          password
        }
    try{
const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`,newUser)
  if(res.status==201){
   setUser(res.data)
   navigate("/home")
  }
    } catch(err){
console.log(err.response.data)
    }
  
// if(res.status==201){
// setUser(res.data)
// }

        setFirstName("")
        setLastName("")
        setEmail("")
        setPassword("")
       

      
        
      }} 
      className="flex flex-col items-center justify-center w-full px-10 py-5 gap-7">
        <div className="flex flex-col w-full ">
          <label className="mb-3 text-2xl font-semibold mb-2">
            Full Name
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
        <div>
          <button className="w-full py-2 bg-black text-white text-xl font-semibold rounded">
            Submit
          </button>
          <p className="text-xs m-2">
            By creating an account or logging into our website/application, you
            agree to follow these Terms and Conditions.
          </p>
        </div>

        <p className="">
          Already Have an account ?
          <span className="text-blue-800 font-bold underline">
            <Link to="/login">Login Back</Link>
          </span>
        </p>
      </form>
      <hr />
      <div className="px-5 mt-10">
        <button className="w-full bg-[#bfba2b] mt-3 text-white py-2 text-xl font-bold rounded ">
          <Link to="/captain/login">Login as a captain</Link>
        </button>
      </div>
    </div>
    )
}
export default userRegister