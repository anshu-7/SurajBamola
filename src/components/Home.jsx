import NavBar from "../utils/NavBar";
import ImageSlider from "../utils/ImageSlider";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import EPFLogo from '../assets/EPFO-Black.png'
import ESICLogo from '../assets/ESIC-Black.png'
import Footer from "../utils/Footer";
import './Home.css'
import Typed from 'react-typed';
function Home() {
  return (
    <div>
      <NavBar/>
      <ImageSlider/>
      <div className = "intro">
         <div>Image 1</div>
         <div>
         <h2 className="heading_text">The Best ESI PF Consultant - Chakraborty Consultancy offers many services!</h2>
         <p className="description_text">As a ESI PF consultant, we provide PF & ESIC registration and monthly return file, PF Withdrawal. Digital Signature Certificate / DSC Registration.</p>
       </div>
               <div>Image 2</div>
      </div>
      {/* <Container fluid>
      <Row>
      <h1>The Best ESI PF Consultant - Chakraborty Consultancy offers many services!</h1>
      <p>As a ESI PF consultant, we provide PF & ESIC registration and monthly return file, PF Withdrawal. Digital Signature Certificate / DSC Registration.</p>
      </Row>
    </Container> */}



    <div className="heading">
      <div className="small_text">Features</div>
      <div className="heading_text">We offer many services for&nbsp;&nbsp;
      <Typed
          className='text-primary'
            strings={['EPF Consultant', 'ESIC Consultant', 'PF Withdrawal']}
            typeSpeed={100}
            backSpeed={110}
            loop
          />
      </div>
      <div className="small_text_sub">Features</div>
      <p className="description_text">
      As a PF ESI consultant, We provide PF & ESIC registration and monthly return filling<br/>
           PF Withdrawal & Correction Services for Employees & Company.
      </p>
      
    </div>
    <div className="cards">
    <Card>
      <Card.Img variant="top" src= {EPFLogo} className = "logo"/>
      <Card.Body>
        <Card.Title>EPF Consultant</Card.Title>
        <Card.Text>
        Best Provident Fund / PF Registration Consultant for company's. We provide Monthly PF Compliance / Return Filling...
        </Card.Text>
        <Button variant="primary">Read More</Button>
      </Card.Body>
    </Card>

    <Card >
      <Card.Img variant="top" src= {ESICLogo} className = "logo"/>
      <Card.Body>
        <Card.Title>ESIC Consultant</Card.Title>
        <Card.Text>
        Best ESIC Registration Consultant for company's. We provide Monthly ESI Return Filling Service & New Member Joining and Exit...
        </Card.Text>
        <Button variant="primary">Read More</Button>
      </Card.Body>
    </Card>

    <Card>
      <Card.Img variant="top" src= {EPFLogo} className = "logo" />
      <Card.Body>
        <Card.Title>PF Withdrawal</Card.Title>
        <Card.Text>
        We are One of the Best PF Withdrawal Agent / Consultant in all over India. Provides EPF Withdrawal & Member Services
        </Card.Text>
        <Button variant="primary">Read More</Button>
      </Card.Body>
    </Card>
    </div>
    <div className="heading">
      <p className="small_text">
      Chakraborty Consultancy is one of the industry’s most efficient & <br/>
      renowned firms for providing the best Legal Advisory Services like <br/>
      EPF & ESIC and many more at PF Consultants.
      </p>
      
    </div>
       <Footer/>

    </div>
  );
}

export default Home;
