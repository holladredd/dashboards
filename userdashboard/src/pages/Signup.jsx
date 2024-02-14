import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Box, Table, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../assets/styles/App.css';

function SignupForm() {

  const [signupData, setSignupData] = useState({
    username: '',
    email: '',
    password: '',
    firstname:'',
    lastname:''
  });

// States for checking the errors
const [submitted, setSubmitted] = useState(false);
const [error, setError] = useState(false);

  const handleSignup = (e) => {
    e.preventDefault();
    // Perform signup logic here with signupData
    if (signupData.username === '' || signupData.email === '' || signupData.password === '' || signupData.firstname === '' || signupData.lastname === '') {
        setError(true);
        } else {
        setSubmitted(true);
        setError(false);
        }
    // console.log('Signup data:', signupData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupData({ ...signupData, [name]: value });
  };
// Showing success message
const successMessage = () => {
    return (
    <div
    className="success"
    style={{
    display: submitted ? '' : 'none',
    }}>
    <h6>User {signupData.username}, {signupData.email}, {signupData.password}, {signupData.firstname}, {signupData.lastname} successfully registered!!</h6>
    </div>
    );
    };

// Showing error message if error is true
const errorMessage = () => {
    return (
    <div
    className="error"
    style={{
    display: error ? '' : 'none',
    }}>
    <h6>Please enter all the fields</h6>
    </div>
    );
};


  return (
    <Box sx={{ width:'100%', minHeight:'100vh', backgroundImage: "url('./background1.jpg')", backgroundRepeat: "no-repeat", backgroundSize:'cover'}}>
    <Box sx={{ backgroundColor:'whitesmoke', width:'100%', minHeight:'100dvh', position:'relative', opacity:'90%', placeItems:'center',display:'grid', }}>
        {/* Calling to the methods */}
        <Box className="messages">
        {errorMessage()}
        {successMessage()}
        </Box>
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
