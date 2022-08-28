import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Container from '@mui/material/Container';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import { styled, BoxProps } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Axios, { AxiosResponse ,AxiosError} from 'axios';
import useSWR from 'swr';
const theme = createTheme();

const MainWrap = styled(Box)<BoxProps>(() => ({
  backgroundColor: '#fff',
  padding: '20px',
  border: '1px solid #DFE0EB',
  borderRadius: '8px',
}));
interface State {
  email: string;
  password: string;
  showPassword: boolean;
}
interface AxiosData {
  accessToken: string;
  refreshToken: string;
}
const Login = () => {
  const [values, setValues] = React.useState<State>({
    email: '',
    password: '',
    showPassword: false,
  });
  const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  
  const handleSubmit =  async(e: React.SyntheticEvent) => {
    e.preventDefault();
    const accessToken = await Axios.post(
      'https://popcorn-be-app.herokuapp.com/api/admin/auth/login',
      { email: values.email, password: values.password },
      {
        headers: {
          'Content-Type': 'application/json',
          accept: 'application/json',
        },
      },
    )
    const data = await Axios.get("https://popcorn-be-app.herokuapp.com/api/admin/auth/user",{
      headers: {"Authorization" : `Bearer ${accessToken.data.accessToken}`}
    })
     
      
    
  };
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <MainWrap>
          <CssBaseline />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <img
                width={60}
                src="https://s3-alpha-sig.figma.com/img/d763/299f/7fad248ef89e1e7b8b7ebd654de0b91d?Expires=1661731200&Signature=Zar9amIwGwExOc4U6~v8wsJ2lHqcHyBezvTn3rmnoHdygj-9og1EgNlQxxt4C4hRVnDCHb9nYo0SiTBKRoPd3fOusScWE~vTE4Wb3O3cto5iDzCldNo5tFggGszK-DoLb18gRBqIIXaU55KoFlvzhQ7tNyfCtyRuWYjeu1rPW93qXyX7HdjVnUSaIbc2bUz3gecXP6OkVAkloH2BLuuCkX2QaIAndxLCz6rD2vUXjHtulSUdY4KEBeS7bcwoFH4mCN83fznC67Dy0uZGYe780WiU0CpqzEoasASx1VJ6DsHDM0CX3bk8hRvohJ6ZoMJirnSLbe-H5RNog0aVbasoeQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                alt=""
              />
            </Avatar>

            <Box
              sx={{
                fontSize: '19px',
                lineHeight: '24px',
                alignItem: 'center',
                verticalAlign: 'top',
                letterSpacing: '.4px',
                color: '#A4A6B3',
                opacity: '0.7',
              }}
            >
              Popcorn Admin
            </Box>
            <Box
              component="span"
              sx={{
                fontSize: '14px',
                lineHeight: '20px',
                alignItem: 'center',
                verticalAlign: 'top',
                letterSpacing: '.3px',
                color: '#9FA2B4',
                marginTop: '15px',
              }}
            >
              Enter your email and password below
            </Box>
            <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={handleSubmit}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                onChange={handleChange('email')}
                name="email"
                autoComplete="email"
                autoFocus
              />
              <FormControl sx={{ mt: 1 }} variant="outlined" fullWidth required>
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={values.showPassword ? 'text' : 'password'}
                  value={values.password}
                  onChange={handleChange('password')}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword} edge="end">
                        {values.showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>

              <Box sx={{ mt: 1, display: 'flex', justifyContent: 'flex-end' }}>
                <Link
                  href="#"
                  variant="body2"
                  sx={{
                    fontSize: '10px',
                    fontWeight: '400',
                    lightHeight: '13px',
                    letterSpacing: '0.1px',
                    color: '#9FA2B4',
                    textDecoration: 'none',
                  }}
                >
                  Forgot password?
                </Link>
              </Box>
              <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                Log In
              </Button>
            </Box>
          </Box>
        </MainWrap>
      </Container>
    </ThemeProvider>
  );
};

export default Login;
