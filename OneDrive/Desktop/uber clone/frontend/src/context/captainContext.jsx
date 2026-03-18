import {createContext,useState} from "react"

export const CaptainDataContext = createContext()
const captainContext=({children})=>{
const [captain,setCaptain] = useState("")

return (
   
       <CaptainDataContext.Provider value={{captain,setCaptain}}>
    {children}
       </CaptainDataContext.Provider>
)

}

export default captainContext