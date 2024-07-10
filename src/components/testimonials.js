import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import user from '../assets/images/user.png';
import user1 from '../assets/images/user1.png';
import user2 from '../assets/images/user2.png';

export default function AppTestimonials(){
    return(
        <Container fluid className='testimonials'>
        <Card style={{margin: '0 auto', float: 'none', textAlign: 'center', backgroundColor: '#ffffff', border: 'none' }}>
      <Card.Body>
      <h6 style={{color:'#0082c0'}}>TESTIMONIALS</h6>
      <Card.Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Card.Text>
      </Card.Body>
      </Card>

      <Carousel>
      <Carousel.Item style={{height:'140px'}}>
      <Image src={user} fluid style={{width:'60px', height:'60px', marginLeft:'320px'}}/>
        <Carousel.Caption style={{color:'#000000'}}>
          <h5><i>"Ut enim ad minim veniam, quis nostrud exercitation ullamco<br></br> laboris nisi ut aliquip ex ea commodo consequat."</i></h5>
          <p>John Roberts(Student, SEO)</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{height:'140px'}}>
      <Image src={user1} fluid style={{width:'60px', height:'60px', marginLeft:'320px'}}/>
        <Carousel.Caption style={{color:'#000000'}}>
        <h5><i>"Ut enim ad minim veniam, quis nostrud exercitation ullamco<br></br> laboris nisi ut aliquip ex ea commodo consequat."</i></h5>
        <p>John Roberts(Student, SEO)</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{height:'140px'}}>
      <Image src={user2} fluid style={{width:'60px', height:'60px', marginLeft:'320px'}}/>
        <Carousel.Caption style={{color:'#000000'}}>
        <h5><i>"Ut enim ad minim veniam, quis nostrud exercitation ullamco<br></br> laboris nisi ut aliquip ex ea commodo consequat."</i></h5>
        <p>John Roberts(Student, SEO)</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    </Container>
    )
} 