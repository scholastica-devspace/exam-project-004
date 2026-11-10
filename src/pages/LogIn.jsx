import { Grid } from '@mui/material'
import Image from '../components/Image'
import Log from '../assets/login.jpg'



const LogIn = () => {
    return (
        <Grid container>
            <Grid size={6}>
                <Image className='w-full h-screen object-cover' src={Log} />
            </Grid>
            <Grid size={6}>
                <Item>size=8</Item>
            </Grid>
            
            
        </Grid>
    )
}

export default LogIn