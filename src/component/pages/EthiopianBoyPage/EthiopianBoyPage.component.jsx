import { useContext } from "react"
import { ethiopianBoyContext } from "../../../contexts/EthiopianBoyProvaider.component";
import AllCards from "../../featurs/Card/AllCards.component"
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

export default function EthiopianBoyPage(){

    const {ethiopianBoy}=useContext(ethiopianBoyContext)
    return(
        <div>
            <h1>ethiopianBoy</h1>
            <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {ethiopianBoy?.map((ethiopian)=>(<Grid item xs={3}><AllCards ethiopian={ethiopian}/></Grid>))}
          
      </Grid>
    </Box>
        </div>
    )
}