import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function AppServices(){
    return(
        <Container fluid className='services'>
            <Card style={{margin: '0 auto', float: 'none', textAlign: 'center', background: 'transparent', border: 'none' }}>
      <Card.Body>
      <h6 style={{color:'#0082c0'}}>OUR SERVICES</h6>
        <Card.Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Card.Text>
      </Card.Body>
    </Card>

    <Row style={{textAlign:'center'}}>
        <Col sm={4}>
        <Card style={{backgroundColor:'#0d6efd', color:'#ffffff'}}>
      <Card.Body>
      <i class="fas fa-tooth" style={{fontSize:'35px', marginBottom:'18px'}}></i>
        <h6 style={{color: '#ffffff'}}>Intervention Dentistry</h6>
        <Card.Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        </Card.Text>
      </Card.Body>
    </Card>
        </Col>
        <Col sm={4}>
        <Card style={{backgroundColor:'#0d6efd', color:'#ffffff'}}>
      <Card.Body>
      <i class="fas fa-tooth" style={{fontSize:'35px', marginBottom:'18px'}}></i>
        <h6 style={{color: '#ffffff'}}>Braces</h6>
        <Card.Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        </Card.Text>
      </Card.Body>
    </Card>
        </Col>
        <Col sm={4}>
        <Card style={{backgroundColor:'#0d6efd', color:'#ffffff'}}>
      <Card.Body>
      <i class="fas fa-tooth" style={{fontSize:'35px', marginBottom:'18px'}}></i>
        <h6 style={{color: '#ffffff'}}>Teeth Whitening</h6>
        <Card.Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        </Card.Text>
      </Card.Body>
    </Card>
        </Col>
      </Row>

      <Row style={{textAlign:'center', marginTop:'22px'}}>
        <Col sm={4}>
        <Card style={{backgroundColor:'#0d6efd', color:'#ffffff'}}>
      <Card.Body>
      <i class="fas fa-tooth" style={{fontSize:'35px', marginBottom:'18px'}}></i>
        <h6 style={{color: '#ffffff'}}>Dental Implants</h6>
        <Card.Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        </Card.Text>
      </Card.Body>
    </Card>
        </Col>
        <Col sm={4}>
        <Card style={{backgroundColor:'#0d6efd', color:'#ffffff'}}>
      <Card.Body>
      <i class="fas fa-tooth" style={{fontSize:'35px', marginBottom:'18px'}}></i>
        <h6 style={{color: '#ffffff'}}>Maxillofacial Surgery</h6>
        <Card.Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        </Card.Text>
      </Card.Body>
    </Card>
        </Col>
        <Col sm={4}>
        <Card style={{backgroundColor:'#0d6efd', color:'#ffffff'}}>
      <Card.Body>
      <i class="fas fa-tooth" style={{fontSize:'35px', marginBottom:'18px'}}></i>
        <h6 style={{color: '#ffffff'}}>Endodontics</h6>
        <Card.Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        </Card.Text>
      </Card.Body>
    </Card>
        </Col>
      </Row>
        </Container>
    )
}