"use server";
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import { IconButton, InputAdornment, OutlinedInput } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const AuthPage: React.FC = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  return (
    <div className="flex">
      <Card sx={{ maxWidth: 650, maxHeight: 500, padding: 5 }} className='min-w-96 max-w-full self-center min-h-96 max-h-full'>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" align='center'>
            SING IN
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <FormControl fullWidth sx={{ m: 1 }} variant="filled">
              <TextField id="outlined-basic" label="Username" placeholder='Username' sx={{ m: 1 }} />
            </FormControl>

            <FormControl fullWidth sx={{ m: 1 }} variant="filled">
              <TextField id="outlined-basic" label="Password" placeholder='Password' sx={{ m: 1 }} />
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"></OutlinedInput>
            </FormControl>

          </Box>
        </CardContent>
      </Card>
    </div >
  );
};

export default AuthPage;