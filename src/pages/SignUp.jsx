import { Grid } from '@mui/material'
import { TextField } from '@mui/material'
import { Button } from '@mui/material'
import Image from '../components/Image'
import Sign from '../assets/signup.jpg'

const SignUp = () => {
    return (
        <Grid container>
            <Grid size={6}>
                <Image className='w-full h-screen object-cover' src={Sign} />
            </Grid>

            <Grid size={6}>
                <div className='flex flex-col justify-center h-full ml-10'>
                    <div>
                        <h2 className='font-raleway font-bold text-[100px] mb-[50px]'>Get started with easily register</h2>

                        <p className='font-raleway font-bold text-[50px] mb-[50px]'>Free register and you can enjoy it</p>

                        <div className='flex flex-col justify-center gap-10'>
                            <TextField className='w-[70%]' id="outlined-basic" label="Email Address" variant="outlined" />
                            <TextField className='w-[70%]' id="outlined-basic" label="Full Name" variant="outlined" />
                            <TextField className='w-[70%]' id="outlined-basic" label="Password" variant="outlined" />
                            <Button className='w-[50%] py-10! rounded-xl! ' variant="contained">Sign Up</Button>
                        </div>

                        
                    </div>

                </div>
            </Grid>

        </Grid>

    )
}

export default SignUp