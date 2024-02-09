import { Avatar, Box, Button, Card, Divider, Link, List, ListItem, ListItemAvatar, ListItemText, Paper, Typography } from "@mui/material"
import InventoryIcon from '@mui/icons-material/Inventory';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CampaignIcon from '@mui/icons-material/Campaign';
import PaymentIcon from '@mui/icons-material/Payment';
import DehazeIcon from '@mui/icons-material/Dehaze';
import SettingsIcon from '@mui/icons-material/Settings';
import '../App.css';
import styled from "@emotion/styled";
import {motion} from 'framer-motion';



const Holder = styled(Box)(() =>({
 padding:'10px',
 height:'93%',
 width:'100%',

}));
const Leftbar = () => {


  return (
    <Holder className="scale-in-center">
      <Card bgcolor="secondary" sx={{backgroundColor:'slateblue', height:'100%', padding:'10px', borderRadius:'10px'}}>
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

        <Typography component={motion.h5} variant="h5" color="white"
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
          <Typography variant="body1 " component={motion.p} color="white" sx={{margin:'2px'}}
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
>Admin Tools</Typography>
          <ListItem components={Link} href="#">
            <ListItemAvatar sx={{ color:'white' }} >
              <VisibilityIcon sx={{ width:25, height:25}} />
              </ListItemAvatar> 
            <ListItemText primary="Overview" sx={{ color:'white'}}/>
          </ListItem>

          <ListItem>
            <ListItemAvatar sx={{ color:'white' }} >
              <InventoryIcon sx={{ width:25, height:25}} />
              </ListItemAvatar> 
            <ListItemText primary="Products" sx={{ color:'white'}}/>
          </ListItem>
          
          <ListItem>
            <ListItemAvatar sx={{ color:'white' }} >
              <CampaignIcon sx={{ width:25, height:25}} />
              </ListItemAvatar> 
            <ListItemText primary="Campaign" sx={{ color:'white'}}/>
          </ListItem>
          <ListItem>
            <ListItemAvatar sx={{ color:'white' }} >
              <PaymentIcon sx={{ width:25, height:25}} />
              </ListItemAvatar> 
            <ListItemText primary="Payment" sx={{ color:'white'}}/>
          </ListItem>
          <ListItem>
            <ListItemAvatar sx={{ color:'white' }} >
              <DehazeIcon sx={{ width:25, height:25}} />
              </ListItemAvatar> 
            <ListItemText primary="Statement" sx={{ color:'white'}}/>
          </ListItem>
          <ListItem>
            <ListItemAvatar sx={{ color:'white' }} >
              <SettingsIcon sx={{ width:25, height:25}} />
              </ListItemAvatar> 
            <ListItemText primary="Setting" sx={{ color:'white'}}/>
          </ListItem>
          <ListItem>
            <ListItemAvatar sx={{ color:'white' }} >
              <InventoryIcon sx={{ width:25, height:25}} />
              </ListItemAvatar> 
            <ListItemText primary="Overview" sx={{ color:'white'}}/>
          </ListItem>

        </List>
        <Paper className="glass" sx={{ padding:'10px', mb:'5px', opacity:'80%'}}>
<Typography variant="body1" color="inherit" textAlign={"center"}>Design and ship your dream site in seconds. Start with the App Tour for a quick overview.</Typography>
<Button variant="contained" color="primary" sx={{ width:'100%'}}>Contact Me</Button>
        </Paper>
      </Card>

    </Holder>
  )
}

export default Leftbar
