import { useContext } from "react"
import { ethiopianMenContext } from "../../../contexts/EthiopianMenProvaider"
import AllCards from "../../featurs/Card/AllCards.component"
function EthiopianMenPage(){
    const {ethiopianMen}=useContext(ethiopianMenContext)
    return(
        <div>
            <h1>ethiopianMen</h1>
            {ethiopianMen?.map((ethiopian)=>(<AllCards ethiopian={ethiopian}/>
            ))}
        </div>
    );
}
export default EthiopianMenPage;