import Carousel from 'react-bootstrap/Carousel';
import banner from '../assets/images/banner.jpg';
import banner1 from '../assets/images/banner1.jpg';
import banner2 from '../assets/images/banner2.jpg';
import Button from 'react-bootstrap/Button';

export default function AppHero(){
    return(
        <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>High-quality and painless dentistry</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <Button variant="primary">Make Appointment</Button>{' '}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner1}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>High-quality and painless dentistry</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <Button variant="primary">Make Appointment</Button>{' '}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner2}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>High-quality and painless dentistry</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <Button variant="primary">Make Appointment</Button>{' '}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    )
}