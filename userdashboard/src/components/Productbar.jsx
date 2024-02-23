import { Typography,  Card, CardActionArea, CardMedia, CardContent, CardActions, Button, Box, Badge } from "@mui/material"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import PropTypes from 'prop-types'
import { toast } from "react-toastify"


const handleDelete = () => {

        toast.success("You clicked the delete icon.");  
};

// eslint-disable-next-line react/prop-types
const Productbar = ({_id, imageUrl, name, category,price, promo}) => {

  const navigate =useNavigate()

  return (
      

<Card sx={{ maxWidth: 345 }}  >
<CardActionArea>

  <CardMedia
  width={'100%'}
    component={motion.img}
    height="140"
    image= {imageUrl}

    initial={{ 
      opacity: 0,
      scale:0.5,
    x:0,
    y:0
    }}
    animate={{ 
      scale:1,
x: 2, 
y: 4, 
opacity: 1 }}
    exit={{
      opacity: 0,
      scale:0.5,
    }}
    whileHover={{
      scale:1.1,
      transition:{
        delay:0,
        ease:'easeOut'
      }
      
    }}
  />
    <Badge color="error"  badgeContent=" Promo" sx={{marginRight:'10px', position:'absolute',top:'10%', right:'10%', display: promo ? 'flex' : 'none'}} >
    </Badge>
  <CardContent sx={{justifyContent:'space-between', display:'flex', alignItems:'center', padding:'5px'}}>
    <Typography gutterBottom variant="h5" color="text.primary">
      {category}
    </Typography>
    <Box sx={{display:'flex'}}>

    <Typography variant="body1" color="text.secondary" sx={{textDecoration : promo ? 'line-through' : 'none', color:'orange', marginRight:'10px'}}>
      ${price}
    </Typography>

    
    <Typography variant="body1" color="text.error" sx={{display: promo? 'flex' : 'none'}}>
      ${promo}
    </Typography> 
    </Box>
  </CardContent>
    <Typography variant="caption" color="initial" sx={{ml:'10px'}}>{name}</Typography>
</CardActionArea>
<CardActions sx={{padding:'0px', display:"flex", justifyContent:'space-between' }}>

  <Button size="small" color="primary" onClick={()=>navigate(`/Dashboard/products/${_id}`)}>
    edit
  </Button>
  <Button size="small" sx={{color:'red'}} onClick={handleDelete}>
    remove
  </Button>
     
</CardActions>
</Card>
  

 
  )
}
Productbar.propType ={
  id:PropTypes.number,
  name:PropTypes.string,
  image:PropTypes.string,
  category:PropTypes.string,
  price:PropTypes.number,
  promo:PropTypes.number,
}
export default Productbar
