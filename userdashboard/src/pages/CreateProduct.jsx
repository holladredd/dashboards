import { Box, Grid, Typography, } from "@mui/material"
import Leftbar from "../layouts/Leftbar"
import Appbar from "../layouts/Appbar"




const CreateProduct = () => {
  return (
    <Box sx={{padding:'5px', backgroundColor:'whitesmoke',}}>
    <Grid container spacing={2} sx={{ height:'100%', justifyContent:'space-between'}} >
  
        <Grid item xs={2} >
        <Leftbar/>
        </Grid>
      <Grid item xs={10}>
        <Appbar/>
       
          
    <Grid container sx={{ margin:'10px', padding:'fit', width:'100%', alignContent:'center',transform: 'translateZ(0px)', flexGrow: 1}}>
       <Typography variant="h1" color="initial">create Product here</Typography>
    </Grid>
  
  
      </Grid>
        
    </Grid>
  </Box>
  )
}

export default CreateProduct
