import { useContext } from "react"
import { ethiopianAccessoriesContext } from "../../../contexts/EthiopianAccessoriesProvaider.component";
import AllCards from "../../featurs/Card/AllCards.component"
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

export default function EthiopianAccessoriesPage(){

    const {ethiopianAccessories}=useContext(ethiopianAccessoriesContext)
    return(
        <div className="d-flex flex-column align-items-center">
            <h1>Ethiopian Accessories</h1>
            <Box sx={{ width: '90%' }}>
      <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {ethiopianAccessories?.map((ethiopian)=>(<Grid item xs={3}><AllCards ethiopian={ethiopian}/></Grid>))}
          
      </Grid>
    </Box>
        </div>
    )
}