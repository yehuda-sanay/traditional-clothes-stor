import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function StateTextFields() {
  const [name, setName] = React.useState('');
  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
    <h1>Contact Us</h1>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { my: 3, width: '25ch' }
      }}
      noValidate
      autoComplete="off"
    >
    
      <TextField
        id="outlined-name"
        label="first name"
        value={name}
        onChange={handleChange}
      />
      <br />
      <TextField
        id="outlined-uncontrolled"
        label="last name"
        defaultValue=""
      />
      <br />
      <TextField
        id="outlined-uncontrolled"
        label="Email"
        defaultValue=""
      />
      <br />
      <TextField 
        id="outlined-uncontrolled"
        label="Text to Email"
        defaultValue=""
      />
      <br />
      <Button variant="contained">Send to Email</Button>
    </Box>
    </div>
  );
}

