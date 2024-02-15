import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Box, Table, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../assets/styles/App.css';
import { toast } from "react-toastify";

function SignupForm() {

  const [signupData, setSignupData] = useState({
    username: '',
    email: '',
    password: '',
    firstname:'',
    lastname:''
  });



  const handleSignup = (e) => {
    e.preventDefault();
    // Perform signup logic here with signupData
    if (signupData.username === '' || signupData.email === '' || signupData.password === '' || signupData.firstname === '' || signupData.lastname === '') {
        toast.error("Please enter all the fields");
      } else {
        toast.success("successfully registered!!");
        navi('/Login')
        }
    // console.log('Signup data:', signupData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupData({ ...signupData, [name]: value });
  };

const navi = useNavigate()
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


    <form onSubmit={handleSignup}>
        
    <Typography variant="h3" color="initial" sx={{textAlign:'center'}}> SIGN UP PAGES</Typography>
    <TextField
      label="First Name Here"
      variant="outlined"
      
      sx={{width:{xs:'100%',md:'50%'}}}
      
          margin="normal"
      name="firstname"
      type="text"
      value={signupData.firstname}
      onChange={handleChange}
      required
    />
    <TextField
      label="Last Name Here"
      variant="outlined"
      
      sx={{width:{xs:'100%',md:'50%'}}}
          margin="normal"
      name="lastname"
      type="text"
      value={signupData.lastname}
      onChange={handleChange}
      required
    />
    <TextField
      label="Email"
      variant="outlined"
      fullWidth
          margin="normal"
      name="email"
      type="email"
      value={signupData.email}
      onChange={handleChange}
      required
    />
      <TextField
        label="Username"
        variant="outlined"
        fullWidth
            margin="normal"
        name="username"
        value={signupData.username}
        onChange={handleChange}
        required
      />
      <TextField
        label="Password"
        variant="outlined"
        fullWidth
            margin="normal"
        name="password"
        type="password"
        value={signupData.password}
        onChange={handleChange}
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
