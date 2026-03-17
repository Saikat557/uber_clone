import logo from "../assets/uber_logo.png"
import {Link} from "react-router-dom"
import {useState} from "react"
const captainLogin=()=>{
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState('')
    const [user,setUser] = useState({})
    return(
      <div className="h-screen w-full ">
      <img src={logo} className="size-20 ml-10 " />

      <form
      onSubmit={(e)=>{
        e.preventDefault()
        setUser({email,password})
        console.log(user)
        setEmail("")
        setPassword("")
      }}
      className="flex flex-col items-center justify-center w-full px-10 py-5 gap-7">
        <div className="flex flex-col w-full ">
          <label className="mb-3 text-2xl font-semibold mb-2">
            what's our captain's email?
          </label>
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
          New here ?{" "}
          <span className="text-blue-800 font-bold underline">
            <Link to="/captain/register">Register your account</Link>
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
export default captainLogin