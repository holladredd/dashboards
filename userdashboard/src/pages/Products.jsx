import { Box, Grid } from "@mui/material"
import Leftbar from "../layouts/Leftbar"
import Appbar from "../layouts/Appbar"
import Productbar from "../components/Productbar"

const Products = () => {
  return (
    <Box sx={{padding:'5px', backgroundColor:'whitesmoke'}}>
    <Grid container spacing={2} sx={{ height:'100%', justifyContent:'space-between'}} >
    <Grid item xs={2} >
    <Leftbar/>
  </Grid>
  <Grid item xs={10}>
    <Appbar/>
  <Productbar/>

  </Grid>
    
    </Grid>
</Box>
  )
}

export default Products
