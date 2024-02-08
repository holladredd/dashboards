import { Box, Button, Card, Typography,  Grid } from "@mui/material"
import Appbar from "./Appbar"



const Sidebar = () => {
  return (
   <Box sx={{width:'95%', padding:'10px', height:'100%', backgroundColor:'whitesmoke'}}>
    <Appbar/>
    <Grid container spacing={2}sx={{display:'flex'}}>

<Grid item xs={8}>
     <Card className="cardStyled" sx={{width:'100%', height:'25vh', borderRadius:'10px',backgroundImage: "url('./background1.jpg')", backgroundRepeat: "no-repeat", backgroundSize:'cover' }}>
<Box sx={{ backgroundColor:'slateblue', padding:'10px', width:'100%', height:'30vh', position:'relative', opacity:'90%' }}>
  <Box sx={{width:'50%'}}>
<Typography variant="h5" color="white"  mt={1}> This is where your Details Are!</Typography>
<Typography variant="body1" color="white"  mt={1} >Encourage users to provide feedback on their experience with the product and dashboard</Typography>
<Button variant='contained' color="inherit" sx={{backgroundColor:'white'}}>
      Change Profile
    </Button>
  </Box>
</Box>
     </Card>
  <Card elevation={0} sx={{display:'flex',  backgroundColor:'whitesmoke'}}>
<Box sx={{width:'46%', padding:'10px',  height:'20vh',backgroundColor:'white', margin:'10px', borderRadius:'20px'}}>
<Box sx={{justifyContent:'space-between'}}>
<Typography variant="body1" color="initial">Total Product</Typography>
</Box>
</Box>
<Box sx={{width:'46%', padding:'10px',  height:'20vh',backgroundColor:'white', margin:'10px', borderRadius:'20px'}}>
<Box sx={{justifyContent:'space-between'}}>
<Typography variant="body1" color="initial">Total Earning</Typography>
</Box>
</Box>

  </Card>
<Box sx={{width:'95%', padding:'10px',  height:'15vh',backgroundColor:'white', margin:'10px', borderRadius:'20px'}}>
<Box sx={{justifyContent:'space-between'}}>
<Typography variant="body1" color="initial">Latest Download</Typography>
</Box>
</Box>
  </Grid> 


<Grid item xs={4}>
<Box sx={{width:'100%', padding:'10px',  height:'40vh',backgroundColor:'white', margin:'10px', borderRadius:'20px'}}>
<Box sx={{justifyContent:'space-between'}}>
<Typography variant="body1" color="initial">Top Products</Typography>
</Box>
</Box>
<Box sx={{width:'100%', padding:'10px',  height:'20vh',backgroundColor:'white', margin:'10px', borderRadius:'20px'}}>
<Box sx={{justifyContent:'space-between'}}>
<Typography variant="body1" color="initial">Balances</Typography>
</Box>
</Box>
  
  </Grid> 
    </Grid>
   </Box>
  )
}

export default Sidebar
