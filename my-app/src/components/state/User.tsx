import { useState } from "react"
type AuthUser ={
    name:string,
    email:string
}
export const User = () =>{
    const [User,setUser] = useState<AuthUser> ({} as AuthUser)
    const handlelogin = () =>{
        setUser({
            name:'thanh',
            email:'pyt31200@gmail.com'
        })       
    }  
    // const handleLogout = () =>{
    //         setUser(null)
    // }
        return(
        <div>
           <button onClick={handlelogin}>Login</button>
            {/* <button onClick={handleLogout}>Logout</button> */}
            <div>User name is {User?.name }</div>
            <div>User email is {User?.email}</div>
        </div>
    )
}