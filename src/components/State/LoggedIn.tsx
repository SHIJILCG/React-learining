
import { useState } from "react"

export default function LoggedIn() {
  
  const [islogged,setislogged]=useState(false)
    const handleLogin = ()=>{setislogged(true)}
    const hanleLogedout = ()=>{setislogged(false)}
  return (
    <div>
        <button onClick={handleLogin} className="border-2 border-blue-400 bg-blue-950 text-white p-1 ">Login</button>
        <button onClick={hanleLogedout} className="border-2 border-blue-900 bg-blue-800 p-1 m-4 text-white">Logout</button>
        <div>User is {islogged ? 'logged in ' : 'logged out'}</div>
    </div>
  )
} 
