import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Wrapper from "../components/Wrapper";

function Contact() {
  return (
    <div>
      <Hero backgroundImage="https://imagery.zoogletools.com/u/126390/55bd88347ecfe72adffa60e6165a61f5c1065428/large/contact-me-png.png">
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
          <Wrapper>
      <div>
        <form>
          <div class="=page-header">
            <h1>Contact Info</h1>
          </div>
          <br/>
          <div class="form-group">
            <label for="exampleInputName1">Name</label>
            <input type="name" class="form-control" id="exampleInputName1" aria-describedby="inputName" placeholder="Enter Name"/>
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Email Address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email"/>
          </div>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">Message</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          <div class="col-auto">
            <button type="submit" class="btn btn-success mb-2">Submit</button>
          </div>
        </form>
      </div>
    </Wrapper>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;