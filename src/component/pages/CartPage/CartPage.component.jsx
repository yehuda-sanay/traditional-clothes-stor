
import { ethiopianBoyContext } from "../../../contexts/EthiopianBoyProvaider.component"
import { useContext } from "react";
import AllCards from "../../featurs/Card/AllCards.component";


export default function CartPage(){
  const { ethiopianBoy } = useContext(ethiopianBoyContext);
    return (
        <>
          <h1 className="text-center mt-3">stor</h1>
          <section className="py-4 container">
            <div className="row justify-content-center">
              {ethiopianBoy?.map((ethiopian,index)=>{
                return(
                  <AllCards ethiopian={ethiopian} item={index}/>

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