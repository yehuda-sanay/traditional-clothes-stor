import { useContext } from "react"
import { ethiopianCoupleContext } from "../../../contexts/EthiopianCoupleProvaider.component";
import AllCards from "../../featurs/Card/AllCards.component"
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

export default function EthiopianCouplePage(){

    const {ethiopianCouple}=useContext(ethiopianCoupleContext)
    return(
        <div>
            <h1>ethiopianCouple</h1>
            <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {ethiopianCouple?.map((ethiopian)=>(<Grid item xs={3}><AllCards ethiopian={ethiopian}/></Grid>))}
          
      </Grid>
    </Box>
        </div>
    )
}