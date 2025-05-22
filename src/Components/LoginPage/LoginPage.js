import {  useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, TextField, Typography, Box } from '@mui/material';
import backGround from '../Assets/backGround.webp';

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginAccess = () => {
    const userData = localStorage.getItem(`user_${email}`);
    if (!userData) {
      alert('User not found');
      return;
    }

    const user = JSON.parse(userData);
    if (user.Password === password) {
      localStorage.setItem('loggedUser', email);
      navigate('/');
    } else {
      alert('Incorrect password');
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
          width: 320,
          p: 4,
          border: '1px solid #ccc',
          borderRadius: 2,
          boxShadow: 3,
          bgcolor: 'white',
        }}
      >
        <Typography variant="h5" gutterBottom>
          Login
        </Typography>

        <TextField
          type="email"
          label="Email"
          fullWidth
          sx={{ mb: 2 }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          type="password"
          label="Password"
          fullWidth
          sx={{ mb: 2 }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={loginAccess} sx={{ width: '100%' }} variant="contained" color="success">
          LOGIN
        </Button>

        <Box display="flex" justifyContent="space-between" mt={2}>
          <Link to="/ForgetPage">
            <Button>Forget Account?</Button>
          </Link>
          <Link to="/SignUp">
            <Button>Sign Up</Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginPage;
