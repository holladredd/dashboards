import { Box, Button, Card, Typography,  Grid } from "@mui/material"
import Appbar from "./Appbar"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ReactApexChart from "react-apexcharts";




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

const products = {

  name:["Wrist Watch", "Bags"]
 
}



const Sidebar = () => {
  return (
   <Box sx={{width:'95%', padding:'10px', height:'100%', backgroundColor:'whitesmoke'}}>
    <Appbar />
    <Grid container spacing={2}sx={{display:'flex'}}>

<Grid item xs={8}>
<Card className="cardStyled scale-in-center" sx={{width:'100%', height:'25vh', borderRadius:'10px',backgroundImage: "url('./background1.jpg')", backgroundRepeat: "no-repeat", backgroundSize:'cover' }}>
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
<Typography variant="span" color="initial">In Dollars</Typography>
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
<Box  className="scale-in-center" sx={{width:'100%', padding:'10px',  height:'40vh',backgroundColor:'white', margin:'10px', borderRadius:'20px'}}>
<Box sx={{justifyContent:'space-between'}}>
<Typography variant="body1" color="initial">Top Products</Typography>
</Box>

{products.map((product) => (
        <div key={product} >
            {product.name}
        </div>
    ))
}
       


</Box>
<Box  className="scale-in-center" sx={{width:'100%', padding:'10px',  height:'20vh',backgroundColor:'white', margin:'10px', borderRadius:'20px'}}>
<Box sx={{justifyContent:'space-between'}}>
<Typography variant="body1" color="initial">Balances</Typography>
</Box>
</Box>
  
  </Grid> 
    </Grid>
   </Box>
  )
}

export default Sidebar
