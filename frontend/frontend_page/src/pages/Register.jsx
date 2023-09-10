import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
const defaultTheme = createTheme();

const Register = () => {

  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const navigate = useNavigate();
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {
          email,
          password,
        };
        axios.post('http://localhost:5555/login/register',data).then(()=>{
            navigate('/login');
        }).catch((err)=>{
          console.log(err);
        })
      };


  return (
    <ThemeProvider theme={defaultTheme}>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} >
            <Typography component="h2" variant="h5">
              Name:
            </Typography>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                
              />
            </Grid>
            <Grid item xs={12}>
            <Typography component="h2" variant="h5">
              Email:
            </Typography>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={(e)=>setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
            <Typography component="h2" variant="h5">
              Password:
            </Typography>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                onChange={(e)=>setPassword(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="already have an account"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleSubmit}>
            Login
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  </ThemeProvider>
  )

  
}

export default Register;
