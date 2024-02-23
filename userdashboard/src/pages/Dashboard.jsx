import { Box, Grid } from "@mui/material";
import Leftbar from '../layouts/Leftbar'
import {Outlet} from 'react-router-dom'
import Appbar from "../layouts/Appbar";
import { useLocation } from "react-router-dom";
import SearchBar from "../layouts/SearchBar";




const Dashboard = () => {

  const { pathname } = useLocation();
  // const pathName =["Overview","Settings"]
    return (
        <Box sx={{padding:'5px', backgroundColor:'whitesmoke'}}>

        <Grid container spacing={2} sx={{ height:'100%', justifyContent:'space-between'}} >
      <Grid item xs={2} >
        <Leftbar/>
      </Grid>
      <Grid item xs={10}>
      {pathname !== "/Dashboard/Settings" && pathname !== "/Dashboard/Products" && <Appbar />}
      {pathname == "/Dashboard/Products" && <SearchBar />}

      <Outlet/>
      </Grid>
      
        </Grid>
    
         </Box>
    )
}
export default Dashboard