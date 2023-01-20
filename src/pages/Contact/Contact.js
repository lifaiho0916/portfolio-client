// Dependencies
import React, { useState, useEffect } from 'react';
import Form from "react-bootstrap/Form";
import axios from 'axios'
import { Row , Image, Col  } from 'react-bootstrap'
// Libs
import { onError } from "../../libs/errorLib";
import {Input , Button} from 'reactstrap';
// Components
import Container from '../../components/Container/Container';
import LoaderButton from "../../components/LoaderButton/LoaderButton";
import arrow_white from '../../images/Arrow 4.png';
// CSS
import './Contact.css';

function Contact(props) {
  const [isLoading, setIsLoading] = useState(false);

  const [fields, setFields] = useState({
    name: "",
    email: "",
    textarea: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFields({ ...fields, [name]: value })
  }

  async function handleSubmit(event) {
    event.preventDefault();
    console.log("submist");
    setIsLoading(true);

    try {
      fields.name = document.getElementById("fname").value+" "+document.getElementById("lname").value;
      fields.email = document.getElementById("email").value;
      fields.textarea = document.getElementById("textarea").value;
      // console.log(fields);
      await axios({
        method: "POST",
        url: "http://localhost:4000/api/sendMail",
        data: fields
      }).then((response) => {
        console.log(response);
        if (response.data.status === 'success') {
          alert("Message Sent.");
          setIsLoading(false)
          setFields({
            name: "",
            email: "",
            textarea: ""
          })
        } else if (response.data.status === 'fail') {
          alert("Message failed to send.")
          setIsLoading(false);
        }
      })
    } catch (e) {
      onError(e);
    }
  }
  useEffect(() => {
    let elements = document.getElementsByClassName("scroll-indicator-controller");
    if(elements.length>0) {
       elements[0].parentNode.removeChild(elements[0]);
    }
    
  });
  return (
    <Row style={{'justifyContent':'center','top':'15%','position':'relative','padding': '10%'}}>
      
        <Form onSubmit={handleSubmit} className='contact-wrapper'>
          <Row >
            <label className='contact-title'>
              Let’s get  in touch
            </label>
          </Row>
          <Row className='contact-subrow'>
            <Col md='6'>
              <label className='contact-label'>
                First Name
              </label>
              <Input name="fname" id="fname" className='contact-input'/>
            </Col>
            <Col md='6'>
              <label name="lanme" className='contact-label'>
                Last Name
              </label>
              <Input id="lname"  className='contact-input'/>
            </Col>
          </Row>
          <Row className='contact-subrow'>
            <Col md='12'>
              <label className='contact-label'>
                Email
              </label>
              <Input name="email1" id="email" className='contact-input'/>
            </Col>
          </Row>
          <Row className='contact-subrow'>
            <Col md='12'>
                <label className='contact-label'>
                  How can we help?
                </label>
                <textarea name="text" id="textarea" className='contact-textarea'/>
              </Col>
          </Row>
          <Row className='contact-subrow'>
            <Col md='12'>
              <Button className='btn-send'>
                Send{'\t\t'}<Image src={arrow_white}/>
              </Button>
            </Col>
          </Row>
        {/* <div className='row'>
          <h1 className="display-3 text-center col-12" style={{ color: 'white', marginTop: '10px' }}>Contact</h1>
        </div>
        <Form.Group controlId="formHorizontalName" onSubmit={this.handleSubmit} size="lg" >
          <Form.Control
            name='name'
            placeholder='Name'
            // autoFocus
            type="name"
            value={fields.name}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="formHorizontalEmail" size="lg">
          <Form.Control
            name='email'
            placeholder='email'
            // autoFocus
            type="email"
            value={fields.email}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="formHorizontalTextarea" size="lg" >
          <Form.Control
            as='textarea'
            name='textarea'
            placeholder='Message...'
            // autoFocus
            type="textarea"
            value={fields.textarea}
            onChange={handleInputChange}
          />
          <LoaderButton
            block
            size="lg"
            type="submit"
            isLoading={isLoading}
            style={{ marginTop: '25px' }}
          >
            Send
        </LoaderButton>
        </Form.Group> */}
      </Form>
      
    </Row>
  );
}

export default Contact;