import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AccessibilityIcon from '@mui/icons-material/Accessibility';

export default function Join() {
  return (
    
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { my: 2, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <AccessibilityIcon fontSize='large' sx={{color:'purple'}}/>
      <br />
      <h1>Sing in</h1>
      <div>
        <TextField
          required
          id="outlined-error"
          label="First name"
          defaultValue=""
        />
        </div>
        <div>
        <TextField
          required
          id="outlined-error-helper-text"
          label="Last name"
          defaultValue=""
          helperText="Incorrect entry."
        />
      </div>
      <div>
        <TextField
          required
          id="filled-error"
          label="Email"
          defaultValue=""
          variant="filled"
        />
        </div>
        <div>
        <TextField
          required
          id="filled-error"
          label="image"
          defaultValue=""
          helperText="Incorrect entry."
          variant="filled"
          type="file"
          
        />
      </div>
      <div>
        <TextField
          required
          id="standard-error"
          label="password"
          defaultValue=""
          variant="standard"
        />
        </div>
        <div>
        <TextField
          required
          id="standard-error-helper-text"
          label="chcke password"
          defaultValue=""
          helperText="Incorrect entry."
          variant="standard"
        />
      </div>
    </Box>
    
  );
}
