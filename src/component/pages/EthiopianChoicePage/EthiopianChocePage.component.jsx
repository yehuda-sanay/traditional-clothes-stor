import ChoiceCard from "../../featurs/ChoiceCard/ChoiceCard.component";
import Row from 'react-bootstrap/Row';


const choicePage=[
    {links:"/",cathegory:"men",cathegoryImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFFkWCihrBaWkfywzAPapCTc1IJtYyRtTUtg&usqp=CAU"},
    {links:"Sing In",cathegory:"kids",cathegoryImg:"https://i.pinimg.com/originals/89/66/da/8966daf0272190445e729000f3b3decf.jpg"},
    {links:"https://github.com/yehuda-sanay?tab=repositories",cathegory:"women",cathegoryImg:"https://i.pinimg.com/736x/1d/3c/ed/1d3cedbc24089564c1c7333ae6ef9121.jpg"},
    {links:"https://github.com/yehuda-sanay?tab=repositories",cathegory:"couple",cathegoryImg:"https://i.pinimg.com/originals/82/a4/e6/82a4e689aa222cb8b22ee0448d5a5922.jpg"}
]

export default function EthiopianChoicePage(){
    
    return(
        <div style={{display: 'flex', justifyContent: 'center'}}>
        
        <Row xs={1} md={4} className="g-5 mt-5">
            {choicePage.map((item,index) =>
                 <ChoiceCard item={item} key={index}/>)}
        </Row>
        
        </div>
    )
}