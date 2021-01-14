import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Wrapper from "../components/Wrapper";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Contact() {
  return (
    <div>
      <Hero backgroundImage="https://imagery.zoogletools.com/u/126390/55bd88347ecfe72adffa60e6165a61f5c1065428/large/contact-me-png.png">
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
          <Wrapper>
          <Form>
          <Form.Group controlId="formBasicName">
    <Form.Label>Name</Form.Label>
    <Form.Control type="name" placeholder="Enter name" />
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>

  <Form.Group controlId="formBasicMessage">
    <Form.Label>Message</Form.Label>
    <Form.Control type="message" placeholder="Enter message" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
      {/* <div>
        <form>
          <div className="=page-header">
            <h1>Contact Info</h1>
          </div>
          <br/>
          <div className="form-group">
            <label for="exampleInputName1">Name</label>
            <input type="name" class="form-control" id="exampleInputName1" aria-describedby="inputName" placeholder="Enter Name"/>
          </div>
          <div className="form-group">
            <label for="exampleInputEmail1">Email Address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email"/>
          </div>
          <div className="form-group">
            <label for="exampleFormControlTextarea1">Message</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          <div className="col-auto">
            <button type="submit" class="btn btn-success mb-2">Submit</button>
          </div>
        </form>
      </div> */}
    </Wrapper>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;