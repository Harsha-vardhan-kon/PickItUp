import { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import backGround from '../Assets/backGround.webp';
const SignUpPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === 'email') setEmail(value);
    else if (name === 'password') setPassword(value);
    else if (name === 'confirmPassword') setConfirmPassword(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password || !confirmPassword) {
      alert('Please fill all fields.');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }
  
    const user = { Email: email, Password: password };
    localStorage.setItem(`user_${email}`, JSON.stringify(user));
    localStorage.setItem('loggedUser', email);

    alert('User registration successful! Please log in.');

    // Clear fields
    setEmail('');
    setPassword('');
    setConfirmPassword('');
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
       
        margin: '100px auto',
        padding: 3,
        border: '1px solid #ccc',
        borderRadius: 2,
        backgroundColor: '#fff',
      }}
    >
      <Typography variant="h5" gutterBottom align="center">
        Sign Up
      </Typography>
      <form id="form" onSubmit={handleSubmit}>
        <TextField
          id="email"
          fullWidth
          label="Email"
          name="email"
          value={email}
          onChange={handleInputChange}
          sx={{ mb: 2 }}
        />
        <TextField
          id="password"
          fullWidth
          type="password"
          label="Password"
          name="password"
          value={password}
          onChange={handleInputChange}
          sx={{ mb: 2 }}
        />
        <TextField
          id="confirmPassword"
          fullWidth
          type="password"
          label="Confirm Password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleInputChange}
          sx={{ mb: 3 }}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Sign Up
        </Button>
      </form>
      <Typography variant="body2" align="center" sx={{ mt: 2 }}>
        Have an account?
        <Link to="/login" style={{ marginLeft: 8, fontWeight: 'bold' }}>
          Login
        </Link>
      </Typography>
      </Box>
    </Box>
  );
};

export default SignUpPage;
    