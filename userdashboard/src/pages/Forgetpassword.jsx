import { Box, Button, TextField, Typography } from "@mui/material"
import { useState } from "react";
import { Form, Link } from "react-router-dom"


const Forgetpassword = () => {


    const [emailData, setEmailData] = useState({
        email: ''
      });
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Perform login logic here with loginData
        console.log('Password recovery has been sent to your email:', emailData);
      };
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setEmailData({ ...emailData, [name]: value });
      };
    
  return (
    <Box sx={{ width:'100%', minHeight:'100vh', backgroundImage: "url('./background1.jpg')", backgroundRepeat: "no-repeat", backgroundSize:'cover'}}>
    <Box sx={{ backgroundColor:'whitesmoke', width:'100%', minHeight:'100dvh', position:'relative', opacity:'90%', placeItems:'center',display:'grid', }}>
    <Box sx={{width:'50%', backgroundColor:'white', padding:'10px', borderRadius:'10px'}}>


    <Form onSubmit={handleSubmit}>
      <TextField
        label=" Please enter your email for retrieval"
        variant="outlined"
        fullWidth
            margin="normal"
        name="email"
        value={emailData.email}
        onChange={handleChange}
        required
      />
     

      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
      <Box sx={{display:'flex', justifyContent:'space-around'}}>

      <Typography LinkComponent={Link} to="/Login" variant='body1' color='inherit'>Go Back</Typography> 
      </Box>
    </Form>
    </Box>
    </Box>
  </Box>
  )
}

export default Forgetpassword
