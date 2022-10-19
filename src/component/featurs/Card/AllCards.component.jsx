import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function AllCards({ethiopian}) {
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
        <Button className="btn_card" size="small" >
          {/* <a className="link_card" href={link} target="_blank" rel="noopener noreferrer">read</a> */}
        </Button>
      </CardActions>
    </Card>
  );
}

  // const {id,name,details,size,price,pic}=ethiopian
  // return (
  //   <div className="horticulture-card">
  //     <h1>ethiopian-card</h1>
  //     <img id="card_img" src={ethiopian.pic} alt="" />
  //     <h2>first name:{ethiopian.name}</h2>
  //     <h2>last name:{ethiopian.details}</h2>
  //     <h3>number:{ethiopian.size}</h3>
  //   </div>