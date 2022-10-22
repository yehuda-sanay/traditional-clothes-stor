import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useCart} from 'react-use-cart';

export default function AllCards({ethiopian ,item}) {
  const {addItem}= useCart();
  const {name,details,size,price,pic}=ethiopian
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="400"
        image={pic}
        alt="book"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {/* {title} - {author} */}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          name: {name} <br/>
          details: {details} <br/>
          size: {size} <br/>
          price: {price}$
        </Typography>
      </CardContent>
      <CardActions>
        <Button className="btn btn-success" onClick={()=>addItem(item)} >
          add to cart
        </Button>
      </CardActions>
    </Card>
  );
}