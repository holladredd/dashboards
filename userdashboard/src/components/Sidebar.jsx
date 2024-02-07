import { Box, Grid } from "@mui/material"
import Appbar from "./Appbar"


const Sidebar = () => {
  return (
   <Box sx={{width:'100%', padding:'10px', height:'100%', backgroundColor:'white'}}>
    <Appbar/>
    <Grid container spacing={2}>

<Grid item >
     sidebar
  
  </Grid> 
    </Grid>
   </Box>
  )
}

export default Sidebar
