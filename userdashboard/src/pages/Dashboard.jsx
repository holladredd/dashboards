import { Box, Grid } from "@mui/material";
import Sidebar from '../layouts/Sidebar'
import Leftbar from '../layouts/Leftbar'






const Dashboard = () => {
  
    return (
        <Box sx={{padding:'5px', backgroundColor:'whitesmoke'}}>

        <Grid container spacing={2} sx={{ height:'100%', justifyContent:'space-between'}} >
      <Grid item xs={2} >
        <Leftbar/>
      </Grid>
      <Grid item xs={10}>
      <Sidebar/>
      </Grid>
      
        </Grid>
    
         </Box>
    )
}
export default Dashboard