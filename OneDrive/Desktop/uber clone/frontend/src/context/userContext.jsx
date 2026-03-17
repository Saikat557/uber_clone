import {createContext,useState} from "react"

export const UserContextValue = createContext()
const userContext=({children})=>{

const [user,setUser] = useState({})
    return(
        <UserContextValue.Provider value={{user,setUser}}>
            {children}
        </UserContextValue.Provider>
    )
}

export default userContext