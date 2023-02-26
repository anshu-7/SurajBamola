import NavBar from "../../utils/NavBar";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './ContactUs.css'

function ContactUs() {
  return (
    <div className="contactUs">
      <NavBar/>
      <div>
        <div>
        <h2>
        For any inquiries relating to PF, ESIC and Digital Signature *
        </h2>
        </div>
        <div>
        <Form className = "form">

            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter name" />
                <Form.Text className="text-muted">
                We'll never share your name with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicMobileNo">
                <Form.Label>Mobile No</Form.Label>
                <Form.Control type="number" placeholder="Enter Mobile No" />
                <Form.Text className="text-muted">
                We'll never share your Mobile No with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
          <Form.Label htmlFor="">Subject</Form.Label>
          <Form.Select id="disabledSelect" >
          <option>Select</option>
            <option>PF Registration</option>
            <option>PF Registration</option>
            <option>PF Registration</option>
            <option>PF Registration</option>
            <option>PF Registration</option>

          </Form.Select>
        </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control type="text" placeholder="Enter message" />
                <Form.Text className="text-muted">
                We'll never share your message with anyone else.
                </Form.Text>
            </Form.Group>

            
            
            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
