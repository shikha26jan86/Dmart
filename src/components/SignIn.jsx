import React from 'react'

const SignIn = () => {
  return (
    <div style={{border:"2px solid black", width:"700px",height:"500px",backgroundColor:"#add8e6", marginLeft:"400px",marginTop:"100px"}}>
      <div style={{margin:"100px"}} >
        <h1>Sign In</h1>
        <div> 
        <label>Email id : </label> 
        <input placeholder='Enter email id'></input><br></br><br></br>
        </div>
        <div><br></br>
        <label>Password : </label>
        <input placeholder='Enter Password' type='password'></input>  
        </div><br></br>
        
        <button style={{backgroundColor:"green"}} >Sign In</button><br></br><br></br>
        <p>Dont have an account ? Create your account</p>
      </div>
    </div>
  )
}

export default SignIn