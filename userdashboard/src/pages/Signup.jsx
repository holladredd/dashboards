import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Box, Table, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../assets/styles/App.css';
import { toast } from "react-toastify";
import axios from "axios"




function SignupForm() {


const [username, setUsername] = useState()
const [email, setEmail] = useState()
const [password, setPassword] = useState()
const [fname, setFname] = useState()
const [lname, setLname] = useState()

const navigate = useNavigate()


  const submit = (e) => {
    e.preventDefault();
    // Perform signup logic here with signupData
    if (username === '' || email === '' || password === '' || fname === '' || lname === '') {
        toast.error("Please enter all the fields");
      } else {
        axios.post("http://localhost:5000/Signup", {username, email, password, fname, lname})
        .then(res =>{
          console.log(res)
          toast.success("successfully registered!!");
          navigate('/Login')
        })
        .catch(err => console.log(err))
        }
  };



  return (
    <Box sx={{ width:'100%', minHeight:'100vh', backgroundImage: "url('./background1.jpg')", backgroundRepeat: "no-repeat", backgroundSize:'cover'}}>
    <Box sx={{ backgroundColor:'whitesmoke', width:'100%', minHeight:'100dvh', position:'relative', opacity:'90%', placeItems:'center',display:'grid', }}>
    
       

    <Box sx={{width:{xs:'80%',md:'50%'}, backgroundColor:'white', padding:'10px', borderRadius:'10px'}}
    component={motion.div}
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
        
    <Typography variant="h3" color="initial" sx={{textAlign:'center'}}> SIGN UP PAGES</Typography>
    <TextField
      label="First Name Here"
      variant="outlined"
      
      sx={{width:{xs:'100%',md:'50%'}}}
      
          margin="normal"
      name="firstname"
      type="text"
    
      onChange={(e) =>setFname(e.target.value)}
      required
    />
    <TextField
      label="Last Name Here"
      variant="outlined"
      
      sx={{width:{xs:'100%',md:'50%'}}}
          margin="normal"
      name="lastname"
      type="text"
   
      onChange={(e) =>setLname(e.target.value)}
      required
    />
    <TextField
      label="Email"
      variant="outlined"
      fullWidth
          margin="normal"
      name="email"
      type="email"
      
      onChange={(e) =>setEmail(e.target.value)}
      required
    />
      <TextField
        label="Username"
        variant="outlined"
        fullWidth
        margin="normal"
        name="username"

        onChange={(e) =>setUsername(e.target.value)}
        required
      />
      <TextField
        label="Password"
        variant="outlined"
        fullWidth
            margin="normal"
        name="password"
        type="password"
        
        onChange={(e) =>setPassword(e.target.value)}
        required
      />
      <Box sx={{display:'flex', justifyContent:'space-around'}}>

      <Button type="submit" variant="contained" color="primary">
        Sign Up
      </Button>
      <Button LinkComponent={Link} to="/Login" variant='text' color='inherit'>Log In</Button> 
      </Box>
    </form>
    <Table></Table>
    </Box>
    </Box>
  </Box>
  );
}

export default SignupForm;
