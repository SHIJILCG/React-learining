import { useState } from "react";

type AuthUser  ={
    name:string,
    email:string
}

export default function User() {
    const [user,setuser]=useState<AuthUser>({} as AuthUser)
    const handleLogin =()=>{
        setuser({
            name:'Vishwas',
            email:'Vishwas@gmail.com'
        })
    }
    // const handleLogout=() => {setuser(null)}
  return (
    <div>
        <button onClick={handleLogin} className="border-2 border-blue-400 bg-blue-950 text-white p-1 ">Login</button>
        {/* <button onClick={handleLogout} className="border-2 border-blue-900 bg-blue-800 p-1 m-4 text-white">Logeout</button> */}
        <div>user name is {user.name}</div>
         <div>use email is {user.email}</div>
    </div>
  )
}
