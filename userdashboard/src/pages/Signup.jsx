import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

function SignupForm() {
  const [signupData, setSignupData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleSignup = (e) => {
    e.preventDefault();
    // Perform signup logic here with signupData
    console.log('Signup data:', signupData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupData({ ...signupData, [name]: value });
  };

  return (
    <Box sx={{ width:'100%', minHeight:'100vh', backgroundImage: "url('./background1.jpg')", backgroundRepeat: "no-repeat", backgroundSize:'cover'}}>
    <Box sx={{ backgroundColor:'whitesmoke', width:'100%', minHeight:'100dvh', position:'relative', opacity:'90%', placeItems:'center',display:'grid', }}>
    <Box sx={{width:'50%', backgroundColor:'white', padding:'10px', borderRadius:'10px'}}>


    <form onSubmit={handleSignup}>
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
    </Box>
    </Box>
  </Box>
  );
}

export default SignupForm;
