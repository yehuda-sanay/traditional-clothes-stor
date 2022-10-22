// import './SingIn.css'
// import FollowTheSignsIcon from "@mui/icons-material/FollowTheSigns";
// import * as React from "react";
// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
// import FormLabel from '@mui/material/FormLabel';
// import Button from '@mui/material/Button';

// export default function SingIn() {

//   return (
//     <div className="singInClass">
//     <Box
//       sx={{
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: "center",
//         width: 500,
//         maxWidth: "100%",
//         mt: -5,
//       }}
//     >
//       <Box sx={{my: 4}}>
//       <FollowTheSignsIcon fontSize="large" sx={{ color: "purple" }} />
//       <br /><br />
//       <h1>Sing in</h1>
//       <FormLabel>Email</FormLabel>
//         <TextField fullWidth label="Email" id="fullWidth" />
//       </Box>
//       <Box sx={{mb: 5}}>
//       <FormLabel>Password</FormLabel>
//       <TextField fullWidth label="Password" id="fullWidth" />
//       </Box>
//       <Button variant="contained">Contained</Button>
//     </Box>
//     </div>
//   );
// }

import React from 'react'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import LockOutlinedIcon from '@mui/material/LockOutlinedIcon';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';

const SingIn=()=>{
    const sxStyle= { my: 3 }
    const paperStyle={padding :20,height:'70vh',width:300, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}
    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}><LockOpenIcon/></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <TextField sx={sxStyle} label='Username' placeholder='Enter username' fullWidth required/>
                <TextField sx={sxStyle} label='Password' placeholder='Enter password' type='password' fullWidth required/>
                <FormControlLabel
                    control={
                    <Checkbox
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label="Remember me"
                 />
                <Button sx={sxStyle} type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
                <Typography sx={sxStyle} >
                     <Link href="#" >
                        Forgot password ?
                </Link>
                </Typography>
                <Typography sx={sxStyle} > Do you have an account ?
                     <Link href="#" >
                        Sign Up 
                </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default SingIn