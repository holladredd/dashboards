import { Box, Button } from '@mui/material'
import Typography from '@mui/material/Typography'
import { Link} from 'react-router-dom';

const Home = () => {
  return (

        <Box sx={{display:'flex', justifyContent:'center',  alignItems:'center'}}>
            <Box>


      <Typography variant="h1" color="initial">welcome home</Typography>
      <Button component={Link} to="/Login" variant="contained" sx={{display:'flex', }}>Get Started</Button>
            </Box>
        </Box>

  )
}

export default Home
