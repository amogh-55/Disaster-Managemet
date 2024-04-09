import React, { useState } from 'react';
import { Container, Box, Typography, Card, Grid, Button, TextField, Link, Fade } from '@mui/material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import Cookie from 'js-cookie';
import { useDispatch } from 'react-redux';
import { setCollectionCenter, setAdmin, setReliefCenter } from '../../store/auth';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [formErrors, setFormErrors] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const validateFormData = (data) => {
    let errors = {};
    if (!data.email) errors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(data.email)) errors.email = 'Email is invalid';
    if (!data.password) errors.password = 'Password is required';
    else if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(data.password))
      errors.password = 'Password must contain at least 8 characters, one uppercase, one lowercase, and one number';
    return errors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const errors = validateFormData(formData);
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      try {
        const res = await axios.post('/user/signin', formData);
        toast.success(res.data.message);
        Cookie.set('Token', res.data.token);
        // Dispatch role-based actions and navigate
        if (res.data.role === "reliefCenter") {
          dispatch(setReliefCenter(res.data.userID));
          navigate('/volunteer/relief-center');
        } else if (res.data.role === "admin") {
          dispatch(setAdmin(res.data.userID));
          navigate('/admin');
        } else {
          dispatch(setCollectionCenter(res.data.userID));
          navigate('/volunteer/collection-center');
        }
      } catch (err) {
        toast.error(err.response.data.message);
      }
    }
  };

  return (
    <Container component="main" sx={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
      <Fade in timeout={700}>
        <Card sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          p: 4,
          borderRadius: '8px',
          boxShadow: '0 4px 20px 0 rgba(0, 255, 0, .7)',
          background: 'rgba(18, 18, 18, 0.9)',
          color: '#fff',
          width: '100%',
          maxWidth: '400px'
        }}>
          <Typography variant="h4" component="h1" sx={{ color: '#00e676', fontWeight: '500', mb: 2 }}>
            Login
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1, width: '100%' }}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={formData.email}
              onChange={handleInputChange}
              error={Boolean(formErrors.email)}
              helperText={formErrors.email}
              InputProps={{ style: { color: '#fff' } }}
              InputLabelProps={{ style: { color: '#a5a5a5' } }}
              sx={{
                '& label.Mui-focused': { color: '#00e676' },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: '#333' },
                  '&:hover fieldset': { borderColor: '#00e676' },
                  '&.Mui-focused fieldset': { borderColor: '#00e676' },
                },
                '& .MuiInputBase-input': {
                  backgroundColor: 'rgba(255, 255, 255, 0.09)',
                  borderRadius: '4px',
                }
              }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={formData.password}
              onChange={handleInputChange}
              error={Boolean(formErrors.password)}
              helperText={formErrors.password}
              InputProps={{ style: { color: '#fff' } }}
              InputLabelProps={{ style: { color: '#a5a5a5' } }}
              sx={{
                '& label.Mui-focused': { color: '#00e676' },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: '#333' },
                  '&:hover fieldset': { borderColor: '#00e676' },
                  '&.Mui-focused fieldset': { borderColor: '#00e676' },
                },
                '& .MuiInputBase-input': {
                  backgroundColor: 'rgba(255, 255, 255, 0.09)',
                  borderRadius: '4px',
                }
              }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3, mb: 2, bgcolor: '#00e676',
                '&:hover': { bgcolor: '#66ffa6' },
                color: 'black',
                fontWeight: 'bold'
              }}
            >
              Login
            </Button>
            <Grid container justifyContent="space-between" sx={{ mt: 2 }}>
              <Grid item>
                <Link href="#" variant="body2" sx={{ color: '#c5e1a5', '&:hover': { color: '#fff' } }}>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <RouterLink to="/register" style={{ textDecoration: 'none' }}>
                  <Typography sx={{ color: '#c5e1a5', '&:hover': { color: '#fff' } }}>
                    Don't have an account? Sign Up
                  </Typography>
                </RouterLink>
              </Grid>
            </Grid>
          </Box>
        </Card>
      </Fade>
    </Container>
  );
}

export default Login;
