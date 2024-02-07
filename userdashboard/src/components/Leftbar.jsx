import { Avatar, Box, Button, Card, Divider, Link, List, ListItem, ListItemAvatar, ListItemText, Paper, Typography } from "@mui/material"
import InventoryIcon from '@mui/icons-material/Inventory';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CampaignIcon from '@mui/icons-material/Campaign';
import PaymentIcon from '@mui/icons-material/Payment';
import DehazeIcon from '@mui/icons-material/Dehaze';
import SettingsIcon from '@mui/icons-material/Settings';
import '../App.css';

const Leftbar = () => {
  return (
    <Box  sx={{padding:'10px',height:"100%", width:'100%', }} >
      <Card bgcolor="secondary" sx={{backgroundColor:'slateblue', height:'100%', padding:'10px', borderRadius:'10px'}}>
        <Box display={"flex"} alignItems={"center"} justifyContent={"space-around"} mb={5}>
        <Avatar sx={{width:70, height:70}}
        src="../public/dredd.png"
        />
        <Typography variant="h5" color="white">DREDD</Typography>
        </Box>
        <Divider />
        <List sx={{mb:'60px'}}>
          <Typography variant="body1 " color="white" sx={{margin:'5px'}}>Admin Tools</Typography>
          <ListItem sx={{mt:'10px'}} components={Link} href="#">
            <ListItemAvatar sx={{ color:'white' }} >
              <VisibilityIcon sx={{ width:50, height:40}} />
              </ListItemAvatar> 
            <ListItemText primary="Overview" sx={{ color:'white'}}/>
          </ListItem>

          <ListItem sx={{mt:'10px'}}>
            <ListItemAvatar sx={{ color:'white' }} >
              <InventoryIcon sx={{ width:50, height:40}} />
              </ListItemAvatar> 
            <ListItemText primary="Products" sx={{ color:'white'}}/>
          </ListItem>
          
          <ListItem sx={{mt:'10px'}}>
            <ListItemAvatar sx={{ color:'white' }} >
              <CampaignIcon sx={{ width:50, height:40}} />
              </ListItemAvatar> 
            <ListItemText primary="Campaign" sx={{ color:'white'}}/>
          </ListItem>
          <ListItem sx={{mt:'10px'}}>
            <ListItemAvatar sx={{ color:'white' }} >
              <PaymentIcon sx={{ width:50, height:40}} />
              </ListItemAvatar> 
            <ListItemText primary="Payment" sx={{ color:'white'}}/>
          </ListItem>
          <ListItem sx={{mt:'10px'}}>
            <ListItemAvatar sx={{ color:'white' }} >
              <DehazeIcon sx={{ width:50, height:40}} />
              </ListItemAvatar> 
            <ListItemText primary="Statement" sx={{ color:'white'}}/>
          </ListItem>
          <ListItem sx={{mt:'10px'}}>
            <ListItemAvatar sx={{ color:'white' }} >
              <SettingsIcon sx={{ width:50, height:40}} />
              </ListItemAvatar> 
            <ListItemText primary="Setting" sx={{ color:'white'}}/>
          </ListItem>
          <ListItem sx={{mt:'10px'}}>
            <ListItemAvatar sx={{ color:'white' }} >
              <InventoryIcon sx={{ width:50, height:40}} />
              </ListItemAvatar> 
            <ListItemText primary="Overview" sx={{ color:'white'}}/>
          </ListItem>

        </List>
        <Paper className="glass" sx={{ padding:'10px', mb:'5px', opacity:'80%'}}>
<Typography variant="body1" color="inherit" textAlign={"center"}>Design and ship your dream site in seconds. Start with the App Tour for a quick overview.</Typography>
<Button variant="contained" color="primary" sx={{ width:'100%'}}>Contact Me</Button>
        </Paper>
      </Card>

    </Box>
  )
}

export default Leftbar