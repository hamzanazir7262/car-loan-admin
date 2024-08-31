// src/components/Login.js
import React from 'react';
import { Button, TextField, Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    // Handle authentication logic here
    navigate('/dashboard');
  };

  return (
<>

    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      sx={{flexDirection:"column"}}
    >
      <div style={{
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          overflow: 'hidden',
          marginRight: '1rem',
          marginBottom:10
        }}>
          <img src="/logocar.jpeg" alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      <Box
        width={300}
        p={3}
        boxShadow={3}
        textAlign="center"
        sx={{
          borderRadius:3
        }}
      >
        <Typography variant="h5" mb={2}>Sign In to account</Typography>
        <Typography mb={2} sx={{color:"lightgray"}}>Enter your email & password to Login</Typography>
        <TextField label="Email" fullWidth margin="normal" />
        <TextField label="Password" type="password" fullWidth margin="normal" />
        <Button variant="contained"sx={{ backgroundColor:"#7b2bff"}} fullWidth onClick={handleSignIn}>
          Sign In
        </Button>
      </Box>
    </Box>
    </>
  );
};

export default Login;
