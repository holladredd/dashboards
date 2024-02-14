import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Box, Typography } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Form() {

  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });

  const handleLogin = (e) => {
    e.preventDefault();
    // Perform login logic here with loginData
    console.log('Login data:', loginData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  return (
  <Box sx={{ width:'100%', minHeight:'100vh', backgroundImage: "url('./background1.jpg')", backgroundRepeat: "no-repeat", backgroundSize:'cover'}}>
    <Box sx={{ backgroundColor:'whitesmoke', width:'100%', minHeight:'100dvh', position:'relative', opacity:'90%', placeItems:'center',display:'grid', }}>
      <Box sx={{width:'50%', backgroundColor:'white', padding:'10px', borderRadius:'10px'}}>

        <form onSubmit={handleLogin}>
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
