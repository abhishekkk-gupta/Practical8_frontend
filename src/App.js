import React, { useState } from "react";
import axios from "axios";

function App() {

  const [username,setUsername]=useState("")
  const [password,setPassword]=useState("")
  const [token,setToken]=useState("")
  const [message,setMessage]=useState("")

  const login = async () => {

    try{

      const res = await axios.post("https://fsd-practical-8.onrender.com",{
        username,
        password
      })

      setToken(res.data.access_token)
      setMessage("Login Successful")

    }
    catch(err){
      setMessage("Invalid Login")
    }
  }

  return (

    <div style={{textAlign:"center",marginTop:"100px"}}>

      <h2>Login</h2>

      <input
      placeholder="Username"
      onChange={(e)=>setUsername(e.target.value)}
      />

      <br/><br/>

      <input
      type="password"
      placeholder="Password"
      onChange={(e)=>setPassword(e.target.value)}
      />

      <br/><br/>

      <button onClick={login}>Login</button>

      <p>{message}</p>

      {token && <p>Token Generated</p>}

    </div>

  )
}

export default App