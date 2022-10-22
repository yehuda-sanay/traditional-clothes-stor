import ItemCard from "../../featurs/CartCard/CartCard.component"
import { ethiopianBoyContext } from "../../../contexts/EthiopianBoyProvaider.component"
import { useContext } from "react";


export default function CartPage(){
  const { ethiopianBoy } = useContext(ethiopianBoyContext);
    return (
        <>
          <h1 className="text-center mt-3">stor</h1>
          <section className="py-4 container">
            <div className="row justify-content-center">
              {ethiopianBoy?.map((ethiopian,index)=>{
                return(
                  <ItemCard ethiopian={ethiopian} item={index}/>

                )
              })}
            </div>
          </section>
        </>
      )
}
// img={item.img} 
//                   title={item.title} 
//                   desc={item.desc} 
//                   price={item.price} 
//                   item={item}
//                   key={index}