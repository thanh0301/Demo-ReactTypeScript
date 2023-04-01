import { useState } from "react"
export const Loggedln = () =>{
    const [isloggedIn,setisloggedIn] = useState(false)
    const handlelogin =() => {
        setisloggedIn(true)
    }
    const handleLogout = () => {
        setisloggedIn(false)
    }
    return(
        <div>
             <button onClick={handlelogin}>Login</button>
                <button onClick={handleLogout}>Logout</button>
                <div>User is {isloggedIn ? 'logged in' : 'logged out'}</div>
        </div>
    )
}