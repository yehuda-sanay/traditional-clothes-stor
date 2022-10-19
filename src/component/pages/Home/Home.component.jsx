import Carousel from 'react-bootstrap/Carousel';

function Home() {
  return (
    <Carousel style={{ width: '86rem',height:'31rem' }}>
      <Carousel.Item interval={1000}>
        <img style={{ width: '15rem',height:'30rem' }}
          className="d-block w-100"
          src="https://www.choctawnation.com/wp-content/uploads/2022/03/traditional-dress-1296x729.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100" style={{ width: '15rem',height:'30rem' }}
          src="https://habeshakemise.com/wp-content/uploads/2019/06/cropped-Capture-1.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img 
          className="d-block w-100" style={{ width: '30rem',height:'30rem' }}
          src="https://fashionablyemployed.com/wp-content/uploads/2021/04/Paste-21-780x491.png"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Home;