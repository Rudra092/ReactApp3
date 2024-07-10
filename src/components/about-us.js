import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import image1 from '../assets/images/image1.png';

export default function AppAbout(){
    return(
        <Container fluid className='aboutus'>
      <Row>
        <Col sm={3}>
        <Image src={image1} width="324" height="329" style={{borderRadius:10, marginTop: 12}} fluid />
        </Col>
        <Col sm={9}>
        <Card style={{ border:'none', marginTop:60}}>
      <Card.Body>
        <h6 style={{color:'#0082c0'}}>ABOUT US</h6>
        <Card.Title>Patient health is the <br></br>highest value in our work</Card.Title>
        <Card.Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Card.Text>
        <Button variant="primary">Learn More</Button>
      </Card.Body>
    </Card>

        </Col>
      </Row>
    </Container>
    )
}