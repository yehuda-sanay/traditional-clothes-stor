import * as React from 'react';
// import Card from '@mui/material/Card';
import { Card } from 'react-bootstrap';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {Button} from 'react-bootstrap'
import Typography from '@mui/material/Typography';
import {useCart} from 'react-use-cart';
import { formatCurrency } from '../../../utilities/formatCurrency';
import { useShoppingCart } from '../../../contexts/ShoppingCartContext';

export default function AllCards(ethiopian ,item) {
  const {name,details,size,price,pic,id}=ethiopian;
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart()
  const quantity = getItemQuantity(id)
  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={pic}
        height="500px"
        style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{name}</span>
          <span className="ms-2 text-muted">{formatCurrency(price)}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button className="w-100" onClick={() => increaseCartQuantity(id)}>
              + Add To Cart
            </Button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: ".5rem" }}
            >
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: ".5rem" }}
              >
                <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                <div>
                  <span className="fs-3">{quantity}</span> in cart
                </div>
                <Button onClick={() => increaseCartQuantity(id)}>+</Button>
              </div>
              <Button
                onClick={() => removeFromCart(id)}
                variant="danger"
                size="sm"
              >
                Remove
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  )
}

// const {addItem}= useCart();
//   const {name,details,size,price,pic}=ethiopian
//   return (
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
//   );