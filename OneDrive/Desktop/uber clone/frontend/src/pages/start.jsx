import {Link} from "react-router-dom"
import logo from "../assets/uber_logo.png"
const start = ()=>{
    return(
        <div className="h-screen w-full flex flex-col items-center justify-between pb-5 ">
            <div className=" bg-cover bg-[url(https://plus.unsplash.com/premium_photo-1731842686156-74895c29a87b?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] w-full h-full">
              <img src={logo} alt="..loading" className="size-20 mt-5 ml-10" />

            </div>
            <div className="w-full flex flex-col  items-center justify-center gap-3  h-1/6 px-10">
                <h1 className="text-3xl">Book your first Ride</h1>
                <Link to="/login" className="w-full text-xl bg-black text-white py-2 rounded flex items-center justify-center">continue</Link>

            </div>
        </div>
    )
}
export default start