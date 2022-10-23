import ChoiceCard from "../../featurs/ChoiceCard/ChoiceCard.component";
import Row from 'react-bootstrap/Row';
import Box from '@mui/material/Box';


const choicePage=[
    {links:"/EthiopianMen",cathegory:"Mens",cathegoryImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFFkWCihrBaWkfywzAPapCTc1IJtYyRtTUtg&usqp=CAU"},
    {links:"/EthiopianGirl",cathegory:"Girls",cathegoryImg:"https://i.pinimg.com/originals/89/66/da/8966daf0272190445e729000f3b3decf.jpg"},
    {links:"/EthiopianBoy",cathegory:"Boys",cathegoryImg:"https://habeshakemise.com/wp-content/uploads/2019/06/anbessa-lij-ethiopian-traditional-dress-kids-9.jpg"},
    {links:"/EthiopianWomen",cathegory:"Womens",cathegoryImg:"https://i.pinimg.com/736x/1d/3c/ed/1d3cedbc24089564c1c7333ae6ef9121.jpg"},
    {links:"/EthiopianCouple",cathegory:"Couples",cathegoryImg:"https://i.pinimg.com/originals/82/a4/e6/82a4e689aa222cb8b22ee0448d5a5922.jpg"},
    {links:"/EthiopianAccessories",cathegory:"Accessories",cathegoryImg:"https://i.pinimg.com/736x/87/18/aa/8718aa590624a35d805f78c90103cbfa.jpg"},
    {links:"/EthiopianJewelry",cathegory:"Jewelry",cathegoryImg:"https://i.pinimg.com/736x/fb/33/92/fb3392afe9e8d64b5a6af4973313cf04.jpg"}
]

export default function EthiopianChoicePage(){
    
    return(
        <div className="d-flex flex-column align-items-center" >
        <Box sx={{ width: '90%' }}>
        <Row  xs={1} sm={2} md={4} className="g-5 mt-5">
            {choicePage.map((item,index) =>
                 <ChoiceCard item={item} key={index}/>)}
        </Row>
        </Box>
        </div>
    )
}