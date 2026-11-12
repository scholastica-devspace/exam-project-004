import { Grid } from '@mui/material'
import { TextField } from '@mui/material'
import { Button } from '@mui/material'
import Image from '../components/Image'
import Log from '../assets/login.png'

import { useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom'


const LogIn = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleLogin = () => {

    if (!email) {
      setEmailError("Enter Valid Email")
    }

    if (!password) {
      setPasswordError("Enter 8-digit password")
    }
    if(email && password){
      console.log("Logged into Account")
    }
  }

  const handleEmail = (e) => {
    setEmail(e.target.value)
    setEmailError('')
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
    setPasswordError('')
  }


  return (
    <Grid container>
      <Grid size={6}>

        <div className='h-full flex items-center justify-center'>
          <div className='w-75'>

            <h1 className='font-poppins font-bold text-5xl text-heading leading-13 capitalize'>You're One Step Away!</h1>

            <p className='font-inter font-normal text-sm text-body/50 mt-3 mb-8'>Log in to reconnect with everything that matters.</p>

            <div className='flex flex-col'>

              <Button className='font-poppins! text-sm! text-heading/70! border-heading/30! capitalize! py-4! rounded-lg!' variant="outlined"><FcGoogle className=' text-2xl! mr-3' />
              Log in with Google</Button>

              <TextField onChange={handleEmail} value={email} className='mt-5!' id="outlined-basic" label="Email Address" variant="outlined" />
              {
                emailError && <p className='font-inter font-normal text-sm text-red-500 mt-1'>{emailError}</p>
              }

              <TextField onChange={handlePassword} type="password" value={password} className='mt-5!' id="outlined-basic" label="Password" variant="outlined" />
              {
                passwordError && <p className='font-inter font-normal text-sm text-red-500 mt-1'>{passwordError}</p>
              }

              <Button onClick={handleLogin} className='font-poppins! text-sm! bg-heading! py-4! rounded-full! my-7!' variant="contained">Login To Continue</Button>

              <p className='font-inter font-normal text-sm text-body text-center'>Don’t have an account ?<span className='text-light ml-2'><Link to ="/">Sign Up</Link></span></p>

            </div>
          </div>
        </div>

      </Grid>

      <Grid size={6}>
        <Image className='w-full h-screen object-cover rounded-l-4xl' src={Log} alt="Signup image" />
      </Grid>
    </Grid>
  )
}

export default LogIn