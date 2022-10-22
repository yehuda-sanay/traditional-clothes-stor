// import * as React from 'react';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import AccessibilityIcon from '@mui/icons-material/Accessibility';

// export default function Join() {
//   return (

//     <Box
//       component="form"
//       sx={{
//         '& .MuiTextField-root': { my: 2, width: '25ch' },
//       }}
//       noValidate
//       autoComplete="off"
//     >
//       <AccessibilityIcon fontSize='large' sx={{color:'purple'}}/>
//       <br />
//       <h1>Sing in</h1>
//       <div>
//         <TextField
//           required
//           id="outlined-error"
//           label="First name"
//           defaultValue=""
//         />
//         </div>
//         <div>
//         <TextField
//           required
//           id="outlined-error-helper-text"
//           label="Last name"
//           defaultValue=""
//           helperText="Incorrect entry."
//         />
//       </div>
//       <div>
//         <TextField
//           required
//           id="filled-error"
//           label="Email"
//           defaultValue=""
//           variant="filled"
//         />
//         </div>
//         <div>
//         <TextField
//           required
//           id="filled-error"
//           label="image"
//           defaultValue=""
//           helperText="Incorrect entry."
//           variant="filled"
//           type="file"

//         />
//       </div>
//       <div>
//         <TextField
//           required
//           id="standard-error"
//           label="password"
//           defaultValue=""
//           variant="standard"
//         />
//         </div>
//         <div>
//         <TextField
//           required
//           id="standard-error-helper-text"
//           label="chcke password"
//           defaultValue=""
//           helperText="Incorrect entry."
//           variant="standard"
//         />
//       </div>
//     </Box>

//   );
// }

import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import Typography from "@mui/material/Typography";

const Signup = () => {
  const sxStyle= { my: 3 }
  
  const paperStyle = { padding: "30px 20px", width: 300, margin: "20px auto" };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const marginTop = { marginTop: 5 };
  return (
    <Grid>
      <Paper elevation={20} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <RemoveCircleIcon />
          </Avatar>
          <h2 style={headerStyle}>Sign Up</h2>
          <Typography variant="caption" gutterBottom>
            Please fill this form to create an account !
          </Typography>
        </Grid>
        <form>
          <TextField
            sx={
              sxStyle
            }
            fullWidth
            label="Name"
            placeholder="Enter your name"
          />
          <TextField sx={
              sxStyle
            } fullWidth label="Email" placeholder="Enter your email" />
          <TextField
            fullWidth
            label="Password"
            placeholder="Enter your password"
          />
          <TextField sx={
              sxStyle
            }
            fullWidth
            label="Confirm Password"
            placeholder="Confirm your password"
          />
          <FormControlLabel
            control={<Checkbox name="checkedA" />}
            label="I accept the terms and conditions."
          />
          <Button type="submit" variant="contained" color="primary">
            Sign up
          </Button>
        </form>
      </Paper>
    </Grid>
  );
};

export default Signup;
