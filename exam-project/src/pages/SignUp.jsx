import { Grid } from '@mui/material'
import { TextField } from '@mui/material'
import { Button } from '@mui/material'
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';

import Image from '../components/Image'
import Sign from '../assets/signup.png'
import Logo from '../assets/logo.png'

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'

import { BiError } from "react-icons/bi";
import { LuEye, LuEyeClosed } from "react-icons/lu";

import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import { ThreeDots } from 'react-loader-spinner'





const SignUp = () => {

  const auth = getAuth();
  const navigate = useNavigate()


  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const [emailError, setEmailError] = useState('');
  const [nameError, setNameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  const [loader, setLoader] = useState(false);


  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

  const handleSignUp = () => {

    if (!email) {
      setEmailError("Enter Your Email")

    } else if (!emailRegex.test(email)) {
      setEmailError("Enter Valid Email")
    }

    if (!name) {
      setNameError("Enter Your Name")
    }

    if (!password) {
      setPasswordError("Enter A Password")

    } else if (!passwordRegex.test(password)) {
      setPasswordError("Password must be at least 8 characters long and include an uppercase letter, a lowercase letter, a number, and a special character.")
    }

    if (email && emailRegex.test(email) && name && password && passwordRegex.test(password)) {

      setLoader(true)

      createUserWithEmailAndPassword(auth, email, password)

        .then((userCredential) => {

          sendEmailVerification(auth.currentUser)

          toast.success("Welcome to Aura!")
          setTimeout(() => {
            navigate('/login')

          }, 2000)
          setLoader(false)


        })
        .catch((error) => {
          const errorCode = error.code;
          setLoader(false)

          if (errorCode.includes("auth/email-already-in-use")) {
            setEmailError("This email is already registered.")

          } else if (errorCode.includes("auth/weak-password")) {
            setPasswordError("Please choose a stronger password.")

          } else if (errorCode.includes("auth/too-many-requests")) {
            toast.error("Too many attempts. Please try again later.")
          }

        });

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

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <Grid size={6}>

        <div className='h-full flex items-center justify-center'>
          <div className='w-75'>

            <Image className='mb-3' src={Logo} alt="AppLogo" />

            <h1 className='flexfont-poppins font-bold text-5xl text-heading leading-13 capitalize'>Your journey starts here.</h1>

            <p className='font-inter font-normal text-sm text-body/50 mt-3 mb-8'>Take the first step toward a more connected experience.</p>

            <div className='flex flex-col'>

              <TextField onChange={handleEmail} value={email} id="outlined-basic" label="Email Address" variant="outlined" />
              {
                emailError && <p className='flex items-center font-inter font-normal text-sm text-red-500 mt-1 gap-1'><BiError />{emailError}</p>
              }

              <TextField onChange={handleName} value={name} className='mt-5! border-red!' id="outlined-basic" label="Name" variant="outlined" />
              {
                nameError && <p className='flex items-center font-inter font-normal text-sm text-red-500 mt-1 gap-1'><BiError />{nameError}</p>
              }

              <TextField onChange={handlePassword} value={password} className='mt-5!' id="outlined-basic" label="Password" variant="outlined" type={showPassword ? "password" : "text"}
                slotProps={{
                  input: {
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={() => setShowPassword(!showPassword)}
                          edge="end" >
                          {showPassword ? <LuEyeClosed /> : <LuEye />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  },
                }}
              />
              {
                passwordError && <p className='flex items-center font-inter font-normal text-sm text-red-500 mt-1 gap-1'><BiError />{passwordError}</p>
              }



              {

                loader ?

                  <div className='flex justify-center py-2'>
                    <ThreeDots
                      visible={true}
                      height="60"
                      width="60"
                      color="#6D9D2C"
                      radius="9"
                      ariaLabel="three-dots-loading"
                      wrapperStyle={{}}
                      wrapperClass=""
                    />
                  </div>

                  :

                  <Button onClick={handleSignUp} className='font-poppins! text-sm! bg-heading! py-4! rounded-full! my-7!' variant="contained">Create New Account</Button>

              }



              <p className='font-inter font-normal text-sm text-body text-center'>Already have an account?<span className='font-bold text-light ml-2'><Link to="/login">Sign in</Link></span></p>

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