import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Box, Typography } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Form() {

  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });

// States for checking the errors
const [submitted, setSubmitted] = useState(false);
const [error, setError] = useState(false);

  
  const handleLogin = (e) => {
    e.preventDefault();
    // Perform login logic here with loginData
    if (loginData.username === '' || loginData.password === '' ) {
      setError(true);
      } else {
      setSubmitted(true);
      setError(false);
      }
  // console.log('Signup data:', signupData);
    console.log('Login data:', loginData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };


// Showing success message
const successMessage = () => {
  return (
  <div
  className="success"
  style={{
  display: submitted ? '' : 'none',
  }}>
  <h6>User {loginData.username}, {loginData.password}, successfully registered!!</h6>
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

        <form onSubmit={handleLogin}>
        <Typography variant="h3" color="initial" sx={{textAlign:'center'}}> LOG IN PAGES</Typography>
          <TextField
            label="Username"
            variant="outlined"
            name='username'
            fullWidth
            margin="normal"
            value={loginData.username}
        onChange={handleChange}
        required
          />
          <TextField
            label="Password"
            name='password'
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={loginData.password}
        onChange={handleChange}
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
