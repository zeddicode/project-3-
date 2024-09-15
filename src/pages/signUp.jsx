import React from 'react'
import { Link } from 'react-router-dom'
import './signUp.css'
import { FacebookLogo, GoogleLogo, InstagramLogo, LinkedinLogo, TwitterLogo } from 'phosphor-react'

export const SignUp = () => {
  return (
    <div className='signup'>
      <h2>Sign Up</h2>
      <div className="signup">
        <form>
            <input type="text" placeholder='First Name' />
            <input type="text" placeholder='Last Name' />
            <input type="email" placeholder='Email'/>
            <input type="password" placeholder='Password'/>
            <input type="password" placeholder='Confirm password'/>
            <p>By signing up, you agree to our Terms & Conditions </p>
            <button>Sign Up</button>
            <p className='already'>
            Already have an account?     
            <Link to='/login'>
               Log in
            </Link>
            </p>

                <div className="alternatively">
                        <hr/>
                        <p>OR</p>
                        <hr/>
                    </div>
                    <p>Sign up using any of these</p>
                        <div className="socialMedia">
                        <Link to={'/'}>
                            <InstagramLogo size={32}/>
                        </Link>
                
                        <Link to={'/'}>
                            <FacebookLogo size={32}/>
                        </Link>
     
                        <Link to={'/'}>
                            <TwitterLogo size={32}/>
                        </Link>
                        <Link to={'/'}>
                            <GoogleLogo size={32}/>
                        </Link>

                        <Link to={'/'}>
                            <LinkedinLogo size={32}/>
                        </Link>
                    </div>
        </form>
      </div>
    </div>
  )
}

