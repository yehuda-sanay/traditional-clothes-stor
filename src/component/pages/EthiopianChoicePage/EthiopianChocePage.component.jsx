import ChoiceCard from "../../featurs/ChoiceCard/ChoiceCard.component";
import Row from 'react-bootstrap/Row';


const choicePage=[
    {links:"/",cathegory:"men",cathegoryImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMB31TSufu0fy-WoiCF7Zq_XOEk9H78C1rJA&usqp=CAU"},
    {links:"Sing In",cathegory:"kids",cathegoryImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRto6axtsaOEp3o6_aYi2g_R_EVju3xc7Yyrg&usqp=CAU"},
    {links:"https://github.com/yehuda-sanay?tab=repositories",cathegory:"women",cathegoryImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRto6axtsaOEp3o6_aYi2g_R_EVju3xc7Yyrg&usqp=CAU"},
    {links:"https://github.com/yehuda-sanay?tab=repositories",cathegory:"couple",cathegoryImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR00sVmrOiZ-alf6EHfRzze9bn2HKQumoT1Sw&usqp=CAU"}
]

export default function EthiopianChoicePage(){
    
    return(
        <div>
        
        <Row xs={1} md={4} className="g-4">
            {choicePage.map((item,index) =>
                 <ChoiceCard item={item} key={index}/>)}
        </Row>
        
        </div>
    )
}