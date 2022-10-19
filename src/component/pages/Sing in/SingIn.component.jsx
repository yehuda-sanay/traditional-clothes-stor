import "./SingIn.css";
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { grey } from "@mui/material/colors";
import {UsersContext} from '../../../contexts/UserProvaider'
import { useContext } from "react";

export default function SingIn() {
  // console.log(UsersContext);
  // const {users,setUsers}=useContext(UsersContext)
  // console.log("sum")
  

  
  return (
  <div className="sing-in-page">
    
    <Box
      sx={{m: 20,
        width: 500,
        maxWidth: '100%',
        bgcolor:grey,
      }}
    >
       <Stack spacing={4} direction="column ">
      <label class="sing_in_label" htmlFor="">Email Address</label>
      <TextField fullWidth label="" id="Email_Address_sing_in" />
      <br/>
      <label class="sing_in_label" htmlFor="">Password</label>
      <TextField fullWidth label="" id="Password_sing_in" />
      <br />
      <Button variant="contained">Contained</Button>
      </Stack>
    </Box>
    </div>
    
  );
}