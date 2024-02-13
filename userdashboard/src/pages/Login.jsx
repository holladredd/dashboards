import { Box, TextField } from "@mui/material"


const Login = () => {
  return (
    <Box sx={{ display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',bgcolor:'whitesmoke' }}>

        <Box 
      component="form"
      sx={{
     width
         bgcolor:'white'
      }}
      noValidate
      autoComplete="off"
    >
        <div>
        <TextField
          required
          id="outlined-required"
          label="Email"
          
        />
        </div>
        </Box>


    </Box>
  )
}

export default Login
