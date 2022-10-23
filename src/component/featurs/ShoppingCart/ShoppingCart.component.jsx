import { Offcanvas, Stack } from "react-bootstrap"
import { useShoppingCart } from "../../../contexts/ShoppingCartContext"
import { formatCurrency } from "../../../utilities/formatCurrency"
import AllCards from "../Card/AllCards.component"
import { useContext } from "react"
import { ethiopianBoyContext } from "../../../contexts/EthiopianBoyProvaider.component"
import { CartItem } from "../CartItem/CartItem.component"

export function ShoppingCart({ isOpen }) {
  const { ethiopianBoy } = useContext(ethiopianBoyContext);
  const { closeCart, cartItems } = useShoppingCart()
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map(item => (
            <CartItem key={item.id} {...item} />
          ))}
          <div className="ms-auto fw-bold fs-5">
            Total{" "}
            {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = ethiopianBoy.find(i => i.id === cartItem.id)
                return total + (item?.price || 0) * cartItem.quantity
              }, 0)
            )}
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  )
}

// import React from "react";
// import {useCart} from 'react-use-cart'

// export default function Cart(){
//     const {
//         isEmpty,
//         totalUnuqueItems,
//         items,
//         totalItems,
//         cartTotal,
//         updateItemQuantity,
//         removeItem,
//         emptyCart
//     }= useCart();
//     if(isEmpty) return <h1>your cart is empty</h1>
//     return(
//         <section className="py-4 container">
//         <div className="row justify-content-center">
//             <div className="col-12">
//                 <h5>Catr ({totalUnuqueItems}) total items:({totalItems})</h5>
//                 <table className="table table-ligth table-hover m-0">
//                     <tbody>
//                     {items.map((item,index)=>{
//                         return(

//                         <tr key={index}>
//                             <td>
//                                 <img src={items.img} style={{height:'6rem'}}/>
//                             </td>
//                             <td>{items.title}</td>
//                             <td>{items.price}</td>
//                             <td>Quantity:({items.quantity})</td>
//                             <td>
//                                 <botton className="btn btn-info ms-2"
//                                         onClick={()=>updateItemQuantity(item.id,item.quantity-1)}>-</botton>
//                                 <botton className="btn btn-info ms-2"
//                                         onClick={()=>updateItemQuantity(item.id,item.quantity+1)}>+</botton>
//                                 <botton className="btn btn-danger ns-2"
//                                         onClick={()=>removeItem(item.id)}>remove item</botton>
//                             </td>
//                         </tr>
//                         )
//                     })}
//                     </tbody>
//                 </table>
//             </div>
//             <div className="col-auto ms-auto">
//                 <h2>Total Price:{cartTotal}</h2>
//             </div>
//             <div className="col auto">
//                     <button className="btn btn-danger m-2"
//                     onClick={()=>emptyCart()}>Clear Cart</button>
//                     <button className="btn btn-primary m-2">Buy now</button>
//             </div>
//         </div>
//         </section>
//     ) 
// }