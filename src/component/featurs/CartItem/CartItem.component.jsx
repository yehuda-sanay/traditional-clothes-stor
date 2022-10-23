import { Button, Stack } from "react-bootstrap"
import { useShoppingCart } from "../../../contexts/ShoppingCartContext"
import { formatCurrency } from "../../../utilities/formatCurrency" 
import { useContext } from "react"
import { ethiopianBoyContext } from "../../../contexts/EthiopianBoyProvaider.component"



export function CartItem({ id, quantity }) {
  const { ethiopianBoy } = useContext(ethiopianBoyContext);
  const { removeFromCart } = useShoppingCart()
  const item = ethiopianBoy?.find(i => i.id === id)
  if (item == null) return null

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={item.pic}
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
      />
      <div className="me-auto">
        <div>
          {item.name}{" "}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: ".65rem" }}>
              x{quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: ".75rem" }}>
          {formatCurrency(item.price)}
        </div>
      </div>
      <div> {formatCurrency(item.price * quantity)}</div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromCart(item.id)}
      >
        &times;
      </Button>
    </Stack>
  )
}




// import { Button, Card } from "react-bootstrap"
// import { useShoppingCart } from "../context/ShoppingCartContext"
// import { formatCurrency } from "../utilities/formatCurrency"



// export function StoreItem({ id, name, price, pic }) {
//   const {
//     getItemQuantity,
//     increaseCartQuantity,
//     decreaseCartQuantity,
//     removeFromCart,
//   } = useShoppingCart()
//   const quantity = getItemQuantity(id)

//   return (
//     <Card className="h-100">
//       <Card.Img
//         variant="top"
//         src={pic}
//         height="200px"
//         style={{ objectFit: "cover" }}
//       />
//       <Card.Body className="d-flex flex-column">
//         <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
//           <span className="fs-2">{name}</span>
//           <span className="ms-2 text-muted">{formatCurrency(price)}</span>
//         </Card.Title>
//         <div className="mt-auto">
//           {quantity === 0 ? (
//             <Button className="w-100" onClick={() => increaseCartQuantity(id)}>
//               + Add To Cart
//             </Button>
//           ) : (
//             <div
//               className="d-flex align-items-center flex-column"
//               style={{ gap: ".5rem" }}
//             >
//               <div
//                 className="d-flex align-items-center justify-content-center"
//                 style={{ gap: ".5rem" }}
//               >
//                 <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
//                 <div>
//                   <span className="fs-3">{quantity}</span> in cart
//                 </div>
//                 <Button onClick={() => increaseCartQuantity(id)}>+</Button>
//               </div>
//               <Button
//                 onClick={() => removeFromCart(id)}
//                 variant="danger"
//                 size="sm"
//               >
//                 Remove
//               </Button>
//             </div>
//           )}
//         </div>
//       </Card.Body>
//     </Card>
//   )
// }


// import React from "react";
// import {useCart} from 'react-use-cart';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

// export default function ItemCard ({ethiopian ,item}){
//   const {addItem}= useCart();
//   const {name,details,size,price,pic}=ethiopian
//   return(
//     <Card sx={{ maxWidth: 345 }}>
//       <CardMedia
//         component="img"
//         height="400"
//         image={pic}
//         alt="book"
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//           {/* {title} - {author} */}
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           name: {name} <br/>
//           details: {details} <br/>
//           size: {size} <br/>
//           price: {price}$
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button className="btn btn-success" onClick={()=>addItem(item)} >
//           add to cart
//         </Button>
//       </CardActions>
//     </Card>
//   )
// }