import React from "react";
// import Carousel from "react-bootstrap/Carousel";
import Hero from "../components/Hero";
// import Container from "../components/Container";
import Row from "../components/Row";
// import Col from "../components/Col";
import Img1 from "../assets/DailyPlanner.png";
import Img2 from "../assets/dash2.png";
import Img3 from "../assets/Homework_CodeRefractor_index.html.png";
import Img4 from "../assets/PasswordGenerator2.jpg.png";
import Img5 from "../assets/StartingPage.png";
import Img6 from "../assets/StartofGame.png";
import '../components/FlipCard/style.css';

function Portfolio() {
  return (
    <div>
      <Hero backgroundImage="https://thumbs.dreamstime.com/b/grunge-black-portfolio-word-square-rubber-seal-stamp-white-background-171945189.jpg">
      </Hero>
      {/* <Container style={{ marginTop: 30 }}> */}
        {/* <Row>
          <Col size="md-12">
            <h1>Welcome To My Portfolio!</h1>
          </Col>
        </Row> */}
        <Row>
          {/* <Col size="md-12"> */}
          <div class="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={Img1} alt="Avatar" style={{ width: "400px", height: "400px" }} />
              </div>
              <div className="flip-card-back">
                <h1>John Doe</h1>
                <p>Architect and Engineer</p>
                <p>We love that guy</p>
              </div>
            </div>
          </div>
          
          <div class="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={Img2} alt="Avatar" style={{ width: "400px", height: "400px" }} />
              </div>
              <div className="flip-card-back">
                <h1>John Doe</h1>
                <p>Architect and Engineer</p>
                <p>We love that guy</p>
              </div>
            </div>
          </div>
          
          <div class="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={Img3} alt="Avatar" style={{ width: "400px", height: "400px" }} />
              </div>
              <div className="flip-card-back">
                <h1>John Doe</h1>
                <p>Architect and Engineer</p>
                <p>We love that guy</p>
              </div>
            </div>
          </div>
          
          <div class="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={Img4} alt="Avatar" style={{ width: "400px", height: "400px" }} />
              </div>
              <div className="flip-card-back">
                <h1>John Doe</h1>
                <p>Architect and Engineer</p>
                <p>We love that guy</p>
              </div>
            </div>
          </div>
          <div class="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={Img5} alt="Avatar" style={{ width: "400px", height: "400px" }} />
              </div>
              <div className="flip-card-back">
                <h1>John Doe</h1>
                <p>Architect and Engineer</p>
                <p>We love that guy</p>
              </div>
            </div>
          </div>
          <div class="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={Img6} alt="Avatar" style={{ width: "400px", height: "400px" }} />
              </div>
              <div className="flip-card-back">
                <h1>John Doe</h1>
                <p>Architect and Engineer</p>
                <p>We love that guy</p>
              </div>
            </div>
          </div>
          {/* </Col> */}
        </Row>
      {/* </Container> */}
    </div>
  );
}

export default Portfolio;

{/* <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={Img1}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={Img2}
                  alt="Second slide"
                />

                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={Img3}
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={Img4}
                  alt="Fourth slide"
                />

                <Carousel.Caption>
                  <h3>Fourth slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={Img5}
                  alt="Fifth slide"
                />

                <Carousel.Caption>
                  <h3>Fifth slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={Img6}
                  alt="Sixth slide"
                />

                <Carousel.Caption>
                  <h3>Sixth slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel> */}