"use client";
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import { Button, IconButton, InputAdornment, InputLabel, OutlinedInput, FormHelperText } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useForm } from 'react-hook-form';
import { signInService } from '@/shared/services/auth.service'
import Swal from 'sweetalert2';
import { setCookie } from "cookies-next";

interface ILogin {
  email: string;
  password: string;
}

const AuthPage: React.FC = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ILogin>();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const onSubmit = (data: ILogin) => {
    signInService(data).then((response) => {
      const resService = response.data;
      if (resService.isSuccess === true) {
        Swal.fire({
          title: "Sign in Success",
          icon: "success"
        });
        setCookie("access_token", resService.result.accessToken);
      }
    }).catch((error) => {
      console.log(error);
    })
  }

  return (
    <div className="flex">
      <Card sx={{ maxWidth: 650, maxHeight: 500, padding: 5 }} className='min-w-96 max-w-full self-center min-h-96 max-h-full'>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" align='center'>
            SING IN
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 2 }}>

              <FormControl fullWidth sx={{ m: 1 }} variant="outlined">
                <TextField id="outlined-basic email" label="Email" placeholder='Email' error={errors.email && errors.email.message}  {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: 'Invalid email address',
                  },
                })} helperText={errors.email && errors.email.message}></TextField>
              </FormControl>

              <FormControl fullWidth sx={{ m: 1 }} variant="outlined" error={errors.password && errors.password.message}>
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                <OutlinedInput

                  id="outlined-adornment-password password"
                  {...register("password", {
                    required: "Password is required",
                    pattern: {
                      value: /^(?=.*[a-zA-Z])(?=.*\d)[A-Za-z\d]{6,}$/,
                      message: 'Password invalid',
                    },
                  })}
                  // error={(errors.password) ? false : true}
                  type={showPassword ? 'text' : 'password'}
                  placeholder='Password'
                  endAdornment={
                    <InputAdornment position="end" >
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
                <FormHelperText error>{errors.password && errors.password.message}</FormHelperText>
              </FormControl>
              <Button variant="outlined" sx={{ width: 150, height: 45 }} type='submit'>
                Sing in
              </Button>

              {/* </FormGroup> */}
            </Box>
          </form>
        </CardContent>
      </Card>
    </div >
  );
};

export default AuthPage;