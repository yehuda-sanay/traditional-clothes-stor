import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function AllCards({ethiopianWomenDress}) {
  const {author,country,language,link,pages,title,year}=ethiopianWomenDress
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://www.cityofboise.org/media/14754/shutterstock_523462210.jpg?width=1200&mode=max&upscale=false"
        alt="book"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title} - {author}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          country: {country} <br/>
          language: {language} <br/>
          pages: {pages} <br/>
          year: {year}
        </Typography>
      </CardContent>
      <CardActions>
        <Button className="btn_card" size="small" >
          <a className="link_card" href={link} target="_blank" rel="noopener noreferrer">read</a>
        </Button>
      </CardActions>
    </Card>
  );
}