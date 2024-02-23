import { Avatar, Box, Button, Card, Divider, List, ListItem, ListItemAvatar, ListItemText, Paper, Typography } from "@mui/material"
import InventoryIcon from '@mui/icons-material/Inventory';
import LogoutIcon from '@mui/icons-material/Logout';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CampaignIcon from '@mui/icons-material/Campaign';
import PaymentIcon from '@mui/icons-material/Payment';
import DehazeIcon from '@mui/icons-material/Dehaze';
import SettingsIcon from '@mui/icons-material/Settings';
import '../assets/styles/App.css';

import styled from "@emotion/styled";
import { motion} from 'framer-motion';
import { Link, useLocation } from "react-router-dom";





const Holder = styled(Box)(() =>({
 padding:'10px',
 height:'93%',
 width:'100%',

}));
const duration = 0.8;
const navigations =[
  {
    id:1,
    icon: <VisibilityIcon/>,
    navname:"Overview",
    link:"/Dashboard"
  },
  {
    id:2,
    icon: <InventoryIcon/>,
    navname:"Products",
    link:"/Dashboard/Products"
  },
  {
    id:3,
    icon: <CampaignIcon/>,
    navname:"Campaign",
    link:"#"
  },
  {
    id:4,
    icon: <PaymentIcon/>,
    navname:"Payment",
    link:"#"
  },
  {
    id:5,
    icon: <DehazeIcon/>,
    navname:"Statement",
    link:"#"
  },
  {
    id:6,
    icon: <SettingsIcon/>,
    navname:"Settings",
    link:"/Dashboard/Settings"
  },
  {
    id:7,
    icon: <LogoutIcon/>,
    navname:"Log Out",
    link:"/Login"
  },
]

const Leftbar = () => {


  const path = useLocation().pathname
  // const location = useLocation()

  return (
<Holder  className="scale-in-center" sx={{padding:'fit'}}>
  <Card elevation={0} bgcolor="secondary" sx={{backgroundColor:'slateblue', height:'fit', padding:'fit', borderRadius:'10px'}}>
    <Box display={"flex"} alignItems={"center"} justifyContent={"space-around"} mb={2}>
    <motion.div initial={{ 
        opacity: 0,
      x:0,
      y:0
      }}
      animate={{ 
x: 2, 
y: 4, 
opacity: 1 }}
whileHover={{ 
  scale:1.3
}}
style={{width:'60', height:'60'}}
>

    <Avatar
        sx={{width:60, height:60}}
    src="/dredd.png"
    />
</motion.div>



  
  <Typography  component={motion.h5} variant="h5" color="white"
  initial={{ 
    opacity: 0,
    x:0,
  y:0
  }}
  animate={{ 
    x: 2, 
    y: 4, 
    opacity: 1 }}
    whileHover={{ 
      scale:1.3
    }}
    >DREDD</Typography>


    </Box>
    <Divider />
 <List>      
  <Typography variant="body1 " component={motion.div} color="white" sx={{margin:'1px'}}
initial={{ 
    opacity: 0,
  x:0,
  y:0
  }}
  animate={{ 
x: 2, 
y: 4, 
opacity: 1 }}
whileHover={{ 
scale:1.1
}}
  >Admin Tools</Typography>

{navigations.map((navigation, index) =>(

<Box key={index} component={motion.div}  sx={{backgroundColor:path === navigation.link?'whitesmoke':'' }}
initial={{ 
  opacity: 0,
  scale: 0.5,
  x:0,
y:0
}}
animate={{ 
  
  scale: 1,
  opacity: 1 }}
  whileHover={{ 
    scale:1.2,
    
}}>
<ListItem sx={{backgroundColor:path === navigation.link?'whitesmoke':''}} component={Link} to={navigation.link} className={`link ${path === navigation.link? 'active': ''}`}>


  <ListItemAvatar sx={{color:path === navigation.link?'slateblue':'white' }} >
    {navigation.icon}
    </ListItemAvatar> 
  <ListItemText underline="none" primary={navigation.navname} sx={{ color:path === navigation.link?'slateblue':'white'}}/>

</ListItem>
</Box>
))
  
}
 </List>
  <Paper className="glass" sx={{ padding:'fit', margin:'5px', opacity:'80%'}}
    components={Link} href="#"
    component={motion.div} 
    initial={{ 
      opacity: 0,
    x:0,
    y:0
    }}
    animate={{ 
 x: 2, 
 y: 4, 
 opacity: '80%' }}
 whileHover={{ 
   opacity: '100%'
}}>
<Typography variant="body1" color="inherit" textAlign={"center"}
components={Link} href="#"
component={motion.div} 
initial={{ 
 opacity: 0,
 scale: 0.5,
}}
animate={{ 
x: 2, 
y: 4, 
scale: 1,
marginTop:1,
opacity: 1 }}
whileHover={{ 
scale:0.9,
marginTop:1
}}>Design and ship your dream site in seconds. Start with the App Tour for a quick overview.</Typography>
<Button variant="contained" color="primary" sx={{ width:'100%'}}
component={motion.button}
initial={{
  opacity:0,
  scale: 0.5,
}}
animate={{
  opacity:1,
  scale:0.9,
  transition:{
    ease:'easeOut',
    delay: duration,
    duration
  }
}}
whileHover={{ 
  scale:1.1,
  }}
>Contact Me</Button>
        </Paper>
</Card>

</Holder>
  )
}

export default Leftbar
