import { Box, Button, Card, Typography,  Grid, List, ListItem, ListItemAvatar, Avatar, ListItemText, Paper } from "@mui/material"
import Appbar from "./Appbar"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ReactApexChart from "react-apexcharts";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { motion } from "framer-motion";




const totalProduct = {
  // Define your chart options here
  chart: {
    type: 'line',
  },
  series: [
    {
      name: 'Products',
      data: [20, 30, 15, 45],
    },
  ],
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'April'],
  },
};

const totalEarning = {
  // Define your chart options here
  chart: {
    type: 'bar',
  },
  series: [
    {
      name: 'Dollars',
      data: [45, 40, 10, 20],
      
    },
  ],
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'April'],

  },
};

const totalDownload = {
  // Define your chart options here
  chart: {
    type: 'area',
  },
  stroke: {
    curve: 'smooth',
  },
  series: [{
    name: 'Downloads',
    data: [12, 4, 13, 10, 8, 2, 9]
  }],
   dataLabels: {
      enabled: false
    },
  xaxis: {
  
    categories: ["01 Jan","02 Jan","03 Jan","04 Jan","05 Jan","06 Jan","07 Jan"]
  },
};

const products = [

  {
    id: 1,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1399&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
   name: "Wrist Watch",
   price: "$30.60"
  },
  {
    id:2,
    image:"https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?q=80&w=1526&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
   name: "Bags",
   price:"$40.20"
  },
  {
    id:3,
    image:"https://images.unsplash.com/photo-1479064555552-3ef4979f8908?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
   name: "Cloth",
   price: "$10.33"
  },
  {
    id:4,
    image:"https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
   name: "Camera",
   price: "$15.03"
  },
  {
    id:5,
    image:"https://images.unsplash.com/photo-1560343090-f0409e92791a?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
   name: "Foot Wear",
   price: "$25.50"
  },

]



const Sidebar = () => {
  return (
   <Box sx={{width:'95%', padding:'10px', height:'100%', backgroundColor:'whitesmoke'}}>
    <Appbar />
    <Grid container spacing={2}sx={{display:'flex'}}>

<Grid item xs={8}>
<Card className="cardStyled scale-in-center" sx={{width:'100%', height:'25vh', borderRadius:'10px',backgroundImage: "url('./background1.jpg')", backgroundRepeat: "no-repeat", backgroundSize:'cover' }}
>
  <Box sx={{ backgroundColor:'slateblue', padding:'10px', width:'100%', height:'30vh', position:'relative', opacity:'90%' }}>
    <Box sx={{width:'50%'}}>
    <Typography variant="h5" color="white"  mt={1}> This is where your Details Are!</Typography>
    <Typography variant="body1" color="white"  mt={1} >Encourage users to provide feedback on their experience with the product and dashboard</Typography>
    <Button variant='contained' color="inherit" sx={{backgroundColor:'white'}}>
        Change Profile
    </Button>
    </Box>
  </Box>
</Card>
<Card elevation={0} sx={{display:'flex',  backgroundColor:'whitesmoke'}}>
  <Box elevation={3} className="scale-in-center" sx={{width:'46%', padding:'10px',  height:'20vh',backgroundColor:'white', margin:'10px', borderRadius:'20px'}}>
    <Box sx={{display:'flex', justifyContent:'space-between'}}>
    <Typography variant="body1" color="initial">Total Product</Typography>
    <MoreVertIcon/>
    </Box>
    <ReactApexChart
        options={totalProduct}
        series={totalProduct.series}
        type="line"
        height={'95%'}
      />
  </Box>


<Box  className="scale-in-center" sx={{width:'46%', padding:'10px',  height:'20vh',backgroundColor:'white', margin:'10px', borderRadius:'20px'}}>
<Box sx={{display:'flex', justifyContent:'space-between'}}>
<Typography variant="body1" color="initial">Total Earning</Typography>
<MoreVertIcon/>
</Box>
<ReactApexChart
        options={totalEarning}
        series={totalEarning.series}
        type="bar"
        height={'95%'}
      
        
      />
</Box>

</Card>
<Box  className="scale-in-center" sx={{width:'95%', padding:'10px',  height:'25vh',backgroundColor:'white', margin:'10px', borderRadius:'20px'}}>
  
<Box sx={{display:'flex', justifyContent:'space-between'}}>
<Typography variant="body1" color="initial">Latest Download</Typography>
<MoreVertIcon/>
</Box>
<ReactApexChart
        options={totalDownload}
        series={totalDownload.series}
        type="area"
        height={'95%'}
        sx={{position:'static'}}
        
      />
</Box>
</Grid> 


<Grid item xs={4} >
<Box  className="scale-in-center" sx={{width:'100%', padding:'10px',  height:'fit',backgroundColor:'white', borderRadius:'20px'}}>
<Box sx={{justifyContent:'space-between'}}>
<Typography variant="body1" color="initial">Top Products</Typography>
</Box>

<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
  {
    products.map((product, index) =>(

      <ListItem key={index}
      component={motion.div} 
      initial={{ 
        opacity: 0,
        scale: 0.5,
      x:0,
      y:0
      }}
      animate={{ 
      x: 2, 
      y: 4, 
      scale: 0.9,
      opacity: 1 }}
      whileHover={{ 
      scale:1.1,
      
      }}>
        <ListItemAvatar>
          <Avatar
          src={product.image}/>
            
        </ListItemAvatar>
        <Box sx={{display:'flex',  width:'100%', alignItems:'center',justifyContent:'space-between'}}>

        <ListItemText primary={product.name} secondary={product.price} />
        <ArrowForwardIosIcon/>
        </Box>
      </ListItem>
      ))
  }
</List>
      
</Box>


<Box  className="scale-in-center" sx={{width:'100%', padding:'10px',  height:'fit',backgroundColor:'white', margin:'10px', borderRadius:'20px'}}
>
<Box sx={{justifyContent:'space-between'}}
>
  <Box sx={{justifyContent:'space-between', display:'flex'}}>

<Typography variant="body1" color="initial">Balances</Typography>
<MoreVertIcon/>
  </Box>
  <Box sx={{display:'flex', width:'100%', height:'100%'}}>
<Paper elevation={0} sx={{ width:'50%', borderRadius:'10px' }}
component={motion.div} 
initial={{ 
  opacity: 0,
  scale: 0.5,
x:0,
y:0
}}
animate={{ 
x: 2, 
y: 4, 
scale: 0.9,
opacity: 1 }}
whileHover={{ 
scale:1,

}}>
  <Typography variant="h2" color="initial">$400</Typography>
  <Typography variant="body1" color="inherit" sx={{bgcolor:'skyblue',textAlign:'center', borderBottomRightRadius:'10px',borderBottomLeftRadius:'10px'}}>Available</Typography>
  </Paper>    
<Paper elevation={0} sx={{ width:'50%'}}
component={motion.div} 
initial={{ 
  opacity: 0,
  scale: 0.5,
x:0,
y:0
}}
animate={{ 
x: 2, 
y: 4, 
scale: 0.9,
opacity: 1 }}
whileHover={{ 
scale:1,

}}>
  <Typography variant="h2" color="initial">$230</Typography>
  <Typography variant="body1" color="inherit" sx={{bgcolor:'slateblue',textAlign:'center', borderBottomRightRadius:'10px',borderBottomLeftRadius:'10px'}}>Available</Typography>
  </Paper>    
  </Box>
</Box>
</Box>
  
  </Grid> 
    </Grid>
   </Box>
  )
}

export default Sidebar
