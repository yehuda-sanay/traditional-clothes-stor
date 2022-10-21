import { useContext } from "react"
import { ethiopianGirlContext } from "../../../contexts/EthiopianMenProvaider"
import AllCards from "../../featurs/Card/AllCards.component"
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
export default function EthiopianGirlPage(){

    const {ethiopianMen}=useContext(ethiopianMenContext)
    return(
        <div>
            <h1>ethiopianMen</h1>
            <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {ethiopianMen?.map((ethiopian)=>(<Grid item xs={3}><AllCards ethiopian={ethiopian}/></Grid>))}
          
      </Grid>
    </Box>
        </div>
    )
}