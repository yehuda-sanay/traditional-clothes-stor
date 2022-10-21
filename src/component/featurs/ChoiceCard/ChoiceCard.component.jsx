import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';
import Col from 'react-bootstrap/Col';

function ChoiceCard({item}) {
    const {links,cathegory,cathegoryImg} = item
    
  return (
    <Col>
            <Link to={links}>
    <Card style={{ width: '18rem',height:'18rem' }} >
      <Card.Img style={{ width: '18rem',height:'18rem' }} variant="top" src={cathegoryImg} />
      <Card.Body>
        <Card.Title>{cathegory}</Card.Title>
      </Card.Body>
    </Card>
    </Link>
    </Col>
  );
}

export default ChoiceCard;
