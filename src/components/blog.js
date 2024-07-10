import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import image2 from '../assets/images/image2.jpg';
import image3 from '../assets/images/image3.jpg';
import image4 from '../assets/images/image4.jpg';

export default function AppBlog(){
    return(
        <Container fluid className='blog'>
            <Card style={{margin: '0 auto', float: 'none', textAlign: 'center', background: 'transparent', border: 'none' }}>
      <Card.Body>
      <h6 style={{color:'#0082c0'}}>OUR LATEST BLOG</h6>
        <Card.Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Card.Text>
      </Card.Body>
    </Card>

    <Row style={{textAlign:'center'}}>
        <Col sm={4}>
        <Card style={{border:'none'}}>
      <Card.Img variant="top" src={image2} />
      <Card.Body>
        <Card.Title>Lorem ipsum dolor</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Read More</Button>
      </Card.Body>
    </Card>
        </Col>
        <Col sm={4}>
        <Card style={{border:'none'}}>
      <Card.Img variant="top" src={image3}/>
      <Card.Body>
        <Card.Title>Consectetur adipiscing</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Read More</Button>
      </Card.Body>
    </Card>
        </Col>
        <Col sm={4}>
        <Card style={{border:'none'}}>
      <Card.Img variant="top" src={image4} />
      <Card.Body>
        <Card.Title>Sed do eiusmod</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Read More</Button>
      </Card.Body>
    </Card>
        </Col>
      </Row>

        </Container>
    )
}