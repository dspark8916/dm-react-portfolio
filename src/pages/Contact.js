import React from "react";
import Card from "react-bootstrap/Card";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Wrapper from "../components/Wrapper";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";

function Contact() {
  return (
    <div>
      <div className="jumbotron jumbotron-fluid bg-dark text-white">
        <div className="container">
          <h1 className="display-4">Contact Me <FontAwesomeIcon icon={faAddressBook}/></h1>
          <p className="lead">Please fill out the form below with your information if you'd like to connect and collaborate!!</p>
        </div>
      </div>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-6">
          <Card className="bg-dark text-white" style={{padding: "50px 50px 0px 50px"}}>
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

                <Form.Group controlId="ControlTextarea1">
                  <Form.Label>Message</Form.Label>
                  <Form.Control placeholder="Enter message" as="textarea" rows={3} />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Wrapper>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;