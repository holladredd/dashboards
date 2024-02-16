import { Typography, Grid, Card, CardActionArea, CardMedia, CardContent, CardActions, Button, Box, Badge } from "@mui/material"
import { motion } from "framer-motion"


const products=[
    {
        id:1,
        image:"https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?q=80&w=1526&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "First Edition Gucci Bag",
        category:"Bags",
        price:"$40.20",
        promo: "$36.34",
        
    },{
        id:2,
        image:"https://images.unsplash.com/photo-1479064555552-3ef4979f8908?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Free Clothes",
        category:"Cloth",
        price: "$10.33",
        
        
    },{
        id:3,
        image:"https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "High Performance Lens Camera",
        category:"Camera",
        price: "$15.03",
        promo: "13.00",
        
    },{
        id: 4,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1399&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
       name: "Limited Designer Watch ",
       category:"Wrist Watch",
       price: "$30.60",
        promo: "$25.34",
        
    },
    {
        id: 5,
        image: "https://images.unsplash.com/photo-1560343090-f0409e92791a?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
       name: "Blue Gucci Shoe",
       category:"Shoes",
       price: "$48.00",
        promo: "$40.30",
        
    },
    {
        id: 6,
        image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
       name: "black Ray-Ban wayfarer sunglasses",
       category:"Shade",
       price: "$35.00",
        promo: "",
        
    },
]
const Productbar = () => {
  return (
      
<Grid container sx={{ margin:'10px', padding:'fit', width:'100%', alignContent:'center'}}>

    { products.map((product, index) =>(
    <Grid item elevation={2} key={index} xs={4} sx={{ borderRadius:'10px', padding:'10px'}}
        component={motion.div}
        initial={{
            opacity:0,
            scale: 0.5,
          }}
          animate={{
            opacity:1,
            scale:1,
            transition:{
              delay: 0.5,
              ease: 'easeOut'
            }}}>
  <Card sx={{ maxWidth: 345 }}  >
<CardActionArea>

  <CardMedia
  width={'100%'}
    component={motion.img}
    height="140"
    image= {product.image}
    
    whileHover={{
      scale:1.1,
      transition:{
        delay:0,
        ease:'easeOut'
      }
      
    }}
  />
    <Badge color="error"  badgeContent=" Promo" sx={{marginRight:'10px', position:'absolute',top:'10%', right:'10%', display: product.promo ? 'flex' : 'none'}} >
    </Badge>
  <CardContent sx={{justifyContent:'space-between', display:'flex', alignItems:'center', padding:'5px'}}>
    <Typography gutterBottom variant="h5" color="text.primary">
      {product.category}
    </Typography>
    <Box sx={{display:'flex'}}>

    <Typography variant="body1" color="text.secondary" sx={{textDecoration : product.promo ? 'line-through' : 'none', color:'orange', marginRight:'10px'}}>
      {product.price}
    </Typography>

    
    <Typography variant="body1" color="text.error">
      {product.promo}
    </Typography> 
    </Box>
  </CardContent>
    <Typography variant="caption" color="initial" sx={{ml:'10px'}}>{product.name}</Typography>
</CardActionArea>
<CardActions sx={{padding:'0px'}}>
  <Button size="small" color="primary">
    Order
  </Button>
</CardActions>
</Card>
  
  </Grid>
  ))}
</Grid>
 
  )
}

export default Productbar
