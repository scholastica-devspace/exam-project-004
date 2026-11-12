import { Grid } from '@mui/material'
import { TextField } from '@mui/material'
import { Button } from '@mui/material'
import Image from '../components/Image'
import Sign from '../assets/signup.png'

import { useState } from 'react';
import { Link } from 'react-router-dom'


const SignUp = () => {

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const [emailError, setEmailError] = useState('');
  const [nameError, setNameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleSignUp = () => {

    if (!email) {
      setEmailError("Enter Valid Email")
    }

    if (!name) {
      setNameError("Enter Your Name")
    }

    if (!password) {
      setPasswordError("Enter 8-digit password")
    }
    if(email && name && password){
      console.log("Created an Account")
    }
  }

  const handleEmail = (e) => {
    setEmail(e.target.value)
    setEmailError('')
  }

  const handleName = (e) => {
    setName(e.target.value)
    setNameError('')
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

            <h1 className='font-poppins font-bold text-5xl text-heading leading-13 capitalize'>Your journey starts here.</h1>

            <p className='font-inter font-normal text-sm text-body/50 mt-3 mb-8'>Create an account and take the first step toward a more connected experience.</p>

            <div className='flex flex-col'>

              <TextField onChange={handleEmail} value={email} id="outlined-basic" label="Email Address" variant="outlined" />
              {
                emailError && <p className='font-inter font-normal text-sm text-red-500 mt-1'>{emailError}</p>
              }

              <TextField onChange={handleName} value={name} className='mt-5!' id="outlined-basic" label="Name" variant="outlined" />
              {
                nameError && <p className='font-inter font-normal text-sm text-red-500 mt-1'>{nameError}</p>
              }

              <TextField onChange={handlePassword} type="password" value={password} className='mt-5!' id="outlined-basic" label="Password" variant="outlined" />
              {
                passwordError && <p className='font-inter font-normal text-sm text-red-500 mt-1'>{passwordError}</p>
              }

              <Button onClick={handleSignUp} className='font-poppins! text-sm! bg-heading! py-4! rounded-full! my-7!' variant="contained">SIGN UP</Button>

              <p className='font-inter font-normal text-sm text-body text-center'>Already have an account?<span className='text-light ml-2'><Link to ="/login">Sign in</Link></span></p>

            </div>
          </div>
        </div>

      </Grid>

      <Grid size={6}>
        <Image className='w-full h-screen object-cover rounded-l-4xl' src={Sign} alt="Signup image" />
      </Grid>
    </Grid>
  )
}

export default SignUp