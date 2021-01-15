import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";

function About() {
  return (
    <div>
      <div className="jumbotron jumbotron-fluid bg-dark text-white">
        <div className="container">
          <h1 className="display-4">About Me <FontAwesomeIcon icon={faUserSecret}/></h1>
          <p className="lead">Here's a little bit about myself and how I got here!!</p>
        </div>
      </div>
      <Container style={{ marginTop: 30 }}>
      <Card className="bg-dark text-white" style={{padding: "50px 50px 50px 50px"}}>
        <Row>
          <Col size="md-12">
            <h1>Welcome To My Portfolio!</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
          <p>
                  My name is Dimitar Micevski and I'm currently working on completing a Full Stack Coding Bootcamp 
                  through Rutgers Univeristy. Rutgers University also happens to be the institution from which I received my Bachelor's 
                  Degree in 2011. I graduated with a BS in Exercise Science along with a Minor in economics. Upon graduation I started a 
                  career in banking in which I gained valuable skills and knowledge. You might ask how and why make the move to tech? Tech 
                  has always been of great interest to me ever since I took my first computer class but I never acted on that interest until now. 
                  As they say, "Better Late Than Never!!". So here I am now!! By taking this Bootcamp I hope that I could use the skills and 
                  knowledge that I have acquired to get my foot in the door of the world of technology!! Stay tuned!!!
                </p>
                <p>Check out my <a href="https://github.com/dspark8916">GitHub</a> and track my progress!!</p>
                <div className="container text-center">
                <Image src="https://www.vippng.com/png/detail/109-1091109_developer-cartoon-programmer.png" fluid/>
                </div>
          </Col>
        </Row>
        </Card>
      </Container>
    </div>
  );
}

export default About;
