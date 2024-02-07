import './App.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Box, Grid } from "@mui/material";
import Sidebar from './components/Sidebar'
import Leftbar from './components/Leftbar'
function App() {


  return (
   <Box sx={{padding:'20px', backgroundColor:'whitesmoke'}}>

  <Grid container spacing={4} sx={{ height:'95vh', justifyContent:'space-between'}} >
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

export default App
