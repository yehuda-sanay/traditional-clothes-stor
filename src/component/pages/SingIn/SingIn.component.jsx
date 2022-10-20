import './SingIn.css'
import FollowTheSignsIcon from "@mui/icons-material/FollowTheSigns";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';

export default function SingIn() {
  return (
    <div className="singInClass">
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: "center",
        width: 500,
        maxWidth: "100%",
        mt: -5,
      }}
    >
      <Box sx={{my: 4}}>
      <FollowTheSignsIcon fontSize="large" sx={{ color: "purple" }} />
      <br /><br />
      <h1>Sing in</h1>
      <FormLabel>Email</FormLabel>
        <TextField fullWidth label="Email" id="fullWidth" />
      </Box>
      <Box sx={{mb: 5}}>
      <FormLabel>Password</FormLabel>
      <TextField fullWidth label="Password" id="fullWidth" />
      </Box>
      <Button variant="contained">Contained</Button>
    </Box>
    </div>
  );
}
