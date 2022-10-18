import React, { useContext } from "react";
import { ethiopianWomenContext } from "../../../contexts/EthiopianWomenPrivaider";
import AllCards from "../../featurs/Card/AllCards.component";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

export default function EthiopianWomenPage() {
  const { ethiopianWomen , setEthiopianWomen } = useContext ( ethiopianWomenContext )
  return (
    <div className="books">
      <h1 data-testid="books component h1" className="books-h1">books</h1>
      <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {ethiopianWomen?.map((ethiopian)=>(<Grid item xs={3}><AllCards ethiopian={ethiopian}/></Grid>))}
          
      </Grid>
    </Box>
      
    </div>
  );
};