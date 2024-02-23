import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Box, Typography } from '@mui/material';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import axios from 'axios';

function Form() {
  const navigate =useNavigate()


  const [username, setUsername] = useState()
  const [password, setPassword] = useState()

  
  async function submit(e){
    e.preventDefault();
  
try{
  await axios.post("http://localhost:5000/users", {username,password})
  
    .then(res =>{
      if(res.data=="exist"){
        toast.success("Successful Logged In!!!")
        navigate("/Dashboard", {state:{id:username}})
        
      }
      else if(res.data=="notexist"){
        toast.error("Wrong Details or user not exist")
      }
    })
    .catch(e=>{
      console.log(e)
    })
}
catch(e){
  console.log(e)
}

  }




  return (
  <Box sx={{ width:'100%', minHeight:'100vh', backgroundImage: "url('./background1.jpg')", backgroundRepeat: "no-repeat", backgroundSize:'cover'}}>
    <Box sx={{ backgroundColor:'whitesmoke', width:'100%', minHeight:'100dvh', position:'relative', opacity:'90%', placeItems:'center',display:'grid', }}>
        
      <Box component={motion.div} sx={{width:{xs:'80%',md:'50%'}, backgroundColor:'white', padding:'10px', borderRadius:'10px',}}
       initial={{
        opacity:0,
        scale: 0.5,
      }}
      animate={{
        opacity:1,
        scale:1,
        transition:{
          
          ease: 'easeOut'
        }}} whileHover={{
          scale:1.2,
          transition:{
            delay:0,
            ease:'easeOut'
          }
          
        }}
      >

        <form onSubmit={submit}>
        <Typography variant="h3" color="initial" sx={{textAlign:'center'}}> LOG IN PAGES</Typography>
          <TextField
            label="Username"
            variant="outlined"
            name='username'
            fullWidth
            margin="normal"
            value={username}
        onChange={(e)=> setUsername(e.target.value)}
        required
          />
          <TextField
            label="Password"
            name='password'
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
        onChange={(e)=> setPassword(e.target.value)}
        required
          />
          <Box sx={{display:'flex', justifyContent:'space-around'}}>

          <Button
            variant="contained"
            color="primary"
            size='small'
            type="submit"
            >
            Submit
          </Button>
         <Button LinkComponent={Link} to="/Signup" variant='text' color='inherit'>Sign Up</Button>
            </Box>
            <Typography variant="body1" component={Link} to="/Forgetpassword" color="initial" sx={{mt:'10px'}}>Forget password?</Typography>
        </form>
      </Box>
    </Box>
  </Box>
  );
}

export default Form;
