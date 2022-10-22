import { useContext } from "react"
import { ethiopianGirlContext } from "../../../contexts/EthiopianGirlProvaider.component";
import AllCards from "../../featurs/Card/AllCards.component"
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

export default function EthiopianGirlPage(){

    const {ethiopianGirl}=useContext(ethiopianGirlContext)
    return(
        <div className="d-flex flex-column align-items-center">
            <h1>Ethiopian Girls</h1>
            <Box xs={1} sm={2} md={4} sx={{ width: '90%' }}>
      <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {ethiopianGirl?.map((ethiopian)=>(<Grid item xs={3}><AllCards ethiopian={ethiopian}/></Grid>))}
          
      </Grid>
    </Box>
        </div>
    )
}
