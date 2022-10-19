import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';
import Col from 'react-bootstrap/Col';

function ChoiceCard({item}) {
    const {links,cathegory,cathegoryImg} = item
    
  return (
    <Col>
    <Card style={{ width: '18rem',height:'18rem' }}>
      <Card.Img style={{ width: '15rem',height:'18rem' }} variant="top" src={cathegoryImg} />
      <Card.Body>
        <Card.Title>{cathegory}</Card.Title>
        <Button variant="primary">
            <Link to={links}>to bay</Link>
        </Button>
      </Card.Body>
    </Card>
    </Col>
  );
}

export default ChoiceCard;
