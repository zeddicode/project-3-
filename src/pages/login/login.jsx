import React from 'react'
import { Link } from 'react-router-dom'
import './login.css'

export const Login = () => {
  return (
    <div className='login'>
      <h2>Fill in your details to log in</h2>
        <form>
            <input type="text" placeholder='Enter your Email'/>
            <input type="password" placeholder='password'/>
            <button>Log in</button>
            <p>You don't have an account?</p>
            <Link to='/signup' className='link'>Sign Up</Link>
        </form>
    </div>
  )
}

