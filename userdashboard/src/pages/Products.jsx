import { Grid, SpeedDial, SpeedDialIcon, } from "@mui/material"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import axios from 'axios'
import Productbar from "../components/Productbar"
import { useNavigate } from "react-router-dom"



const Products = () => {
  const navigate =useNavigate()
  const [products, setProducts] = useState([])

  useEffect(() =>{
    axios.get('http://localhost:5000/products')
    .then(res => setProducts(res.data))
    .catch(err => console.log(err))
  }, [])

  return (

      <Grid container sx={{padding:'fit', width:'100%', alignContent:'center',transform: 'translateZ(0px)', flexGrow: 1}}>
      <SpeedDial
        ariaLabel="SpeedDial"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
        onClick={()=>navigate('/CreateProducts')}
      > </SpeedDial>

          {
            products?.map((product) =>(
              
      <Grid key={product.id} item elevation={2} xs={4} sx={{ borderRadius:'10px', padding:'10px'}}
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

<Productbar {...product}/>
          </Grid>
          ))}

    </Grid>

)
}

export default Products
