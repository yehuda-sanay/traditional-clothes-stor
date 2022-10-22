import { useContext } from "react"
import { ethiopianJewelryContext } from "../../../contexts/EthiopianJewelryProvaider.component";
import AllCards from "../../featurs/Card/AllCards.component"
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
function EthiopianJewelryPage(){
    const {ethiopianJewelry}=useContext(ethiopianJewelryContext)
    return(
        <div className="d-flex flex-column align-items-center">
            <h1>Ethiopian Jewelry</h1>
            <Box sx={{ width: '90%' }}>
      <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {ethiopianJewelry?.map((ethiopian)=>(<Grid item xs={3}><AllCards ethiopian={ethiopian}/></Grid>))}
          
      </Grid>
    </Box>
        </div>
    );
}
export default EthiopianJewelryPage;