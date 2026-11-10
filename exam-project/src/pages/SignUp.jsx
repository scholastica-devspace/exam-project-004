import React from 'react'
import { Grid } from '@mui/material'
import { TextField } from '@mui/material'
import { Button } from '@mui/material'
import Image from '../components/Image'
import Sign from '../assets/signup.png'

const SignUp = () => {
  return (
    <Grid container>
      <Grid size={6}>

        <div className='h-full flex items-center justify-center'>
          <div className='w-75'>

            <h1 className='font-poppins font-bold text-5xl text-heading leading-13 capitalize'>Your journey starts here.</h1>

            <p className='font-inter font-normal text-sm text-body/50 mt-3 mb-8'>Create an account and take the first step toward a more connected experience.</p>

            <div className='flex flex-col gap-5'>

              <TextField id="outlined-basic" label="Email Address" variant="outlined" />
              <TextField id="outlined-basic" label="Name" variant="outlined" />
              <TextField id="outlined-basic" label="Password" variant="outlined" />

              <Button className='text-lg! bg-heading! py-4! rounded-full!' variant="contained">SIGN UP</Button>

              <p className='font-inter font-normal text-sm text-body text-center'>Already have an account?<span className='text-light'> Sign in</span></p>

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