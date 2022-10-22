import React, { useContext } from "react";
import { ethiopianWomenContext } from "../../../contexts/EthiopianWomenPrivaider";
import AllCards from "../../featurs/Card/AllCards.component";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

export default function EthiopianWomenPage() {
  const { ethiopianWomen , setEthiopianWomen } = useContext ( ethiopianWomenContext )
  return (
    <div className="d-flex flex-column align-items-center">
      <h1>Ethiopian Women</h1>
      <Box sx={{ width: '90%' }}>
      <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {ethiopianWomen?.map((ethiopian)=>(<Grid item xs={3}><AllCards ethiopian={ethiopian}/></Grid>))}
          
      </Grid>
    </Box>
      
    </div>
  );
};