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
                <div className="=page-header">
                  <h1>Contact Info</h1>
                </div>
                <br />
                <Form.Group controlId="formBasicName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="name" placeholder="Enter name" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="ControlTextarea1">
                  <Form.Label>Message</Form.Label>
                  <Form.Control placeholder="Enter message" as="textarea" rows={3} />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Wrapper>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;