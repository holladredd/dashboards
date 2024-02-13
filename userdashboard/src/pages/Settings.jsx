import { Box, Grid } from "@mui/material"
import Leftbar from "../components/Leftbar"

const Settings = () => {
  return (
    <Box sx={{padding:'5px', backgroundColor:'whitesmoke'}}>
        <Grid container spacing={2} sx={{ height:'100%', justifyContent:'space-between'}} >
        <Grid item xs={2} >
        <Leftbar/>
      </Grid>
      <Grid item xs={10}>
      
      Settings
Settings
      </Grid>
        
        </Grid>
    </Box>
  )
}

export default Settings
