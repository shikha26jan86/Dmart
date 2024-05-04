import React from 'react';
import './CSS/LoginSignup.css'

const LoginSignup = () => {
  return (
<>
<header/>
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='your name' />
          <input type="email" placeholder='email' />
          <input type="password" placeholder='your password' />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">Already have an account <span>login here</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
      
    </div>
    </>
  )
}

export default LoginSignup