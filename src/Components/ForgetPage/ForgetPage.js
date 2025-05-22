import { Box, Button, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import backGround from '../Assets/backGround.webp';
const ForgetPage = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');

  const eventHandler = () => {
    if (!email) {
      alert("Email is not registered");
    } else {
      const generatedOtp = Math.floor(100000 + Math.random() * 900000).toString();
      setOtp(generatedOtp);
      alert(`OTP sent to ${email}: ${generatedOtp}`);
    }
  };

  return (
    <Box
              sx={{
                height: '100vh',
                display: 'flex',
                backgroundImage: `url(${backGround})`,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
    
    <Box
  
      sx={{
        width: 400,

        margin: '100px auto',
        padding: 4,
        boxShadow: 3,
        borderRadius: 2,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        backgroundColor: 'white',
      }}
    >
      <Typography variant="h5" align="center" gutterBottom>
        Forgot Password
      </Typography>
      <TextField
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
      />
      <Button variant="contained" onClick={eventHandler} fullWidth>
        Send OTP
      </Button>
      <p style={{position:"relative",left:"20px",fontSize:"25px"}}> <Link  to='/createPassword'><Button>createPassword</Button></Link><Link style={{paddingLeft:'160px',fontSize:"20px"}} to='/login'><Button>Login</Button></Link></p>
      {otp && (
        <Typography align="center" sx={{ mt: 2 }}>
          OTP: {otp}
        </Typography>
      )}
      </Box>
    </Box>
  );
};

export default ForgetPage;
