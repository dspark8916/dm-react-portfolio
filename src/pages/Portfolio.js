import React from "react";
// import Carousel from "react-bootstrap/Carousel";
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
import Image from "react-bootstrap/Image";

function Portfolio() {
  return (
    <div>
      <div className="jumbotron jumbotron-fluid bg-dark text-white">
        <div className="container">
          <h1 className="display-4">My Projects</h1>
          <p className="lead">Below you will see the projects I have worked on with links on the back of each card to their github repo.</p>
        </div>
      </div>
      <Row>
        {/* <Col size="md-12"> */}
        <div class="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front bg-dark text-white">
              <Image src={Img1} alt="Avatar" style={{ width: "400px", height: "400px", marginTop: "40px" }} fluid/>
              <h5 style={{ marginTop: "15px" }}>Work Day Scheduler</h5>
            </div>
            <div className="flip-card-back bg-dark text-white">
              <br />
              <br />
              <br />
              <h1>Work Day Scheduler</h1>
              <br />
              <p>Easy to use planner allowing the user to map out their work day in order to increase productivity!!</p>
            </div>
          </div>
        </div>

        <div class="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front bg-dark text-white">
              <Image src={Img2} alt="Avatar" style={{ width: "400px", height: "400px", marginTop: "40px" }} fluid/>
              <h5 style={{ marginTop: "15px" }}>Weather Dashboard</h5>
            </div>
            <div className="flip-card-back bg-dark text-white">
              <br />
              <br />
              <br />
              <h1>Weather Dashboard</h1>
              <p>Type in your city in the search box and get the current weather, a 5-day forecast, the UV index, and windspeed.</p>
            </div>
          </div>
        </div>

        <div class="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front bg-dark text-white">
              <Image src={Img3} alt="Avatar" style={{ width: "400px", height: "400px", marginTop: "40px" }} fluid/>
              <h5 style={{ marginTop: "15px" }}>Code Refactor</h5>
            </div>
            <div className="flip-card-back bg-dark text-white">
              <br />
              <br />
              <br />
              <h1>Code Refactor</h1>
              <p>Refactored code in order to improve the accessibility of the given website and optimize it for search engines.</p>
              <br/>
              <br/>
              <br/>
              <a rel="alternate, noreferrer" target="_blank" href="https://github.com/dspark8916/CodeRefractor">Click here</a>
            </div>
          </div>
        </div>

        <div class="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front bg-dark text-white">
              <Image src={Img4} alt="Avatar" style={{ width: "400px", height: "400px", marginTop: "40px" }} fluid/>
              <h5 style={{ marginTop: "15px" }}>Password Generator</h5>
            </div>
            <div className="flip-card-back bg-dark text-white">
              <br />
              <br />
              <br />
              <h1>Password Generator</h1>
              <p>Having trouble figuring out a password?? You're in luck!! With my random password generator you won't have to worry about coming up with a password anymore!! </p>
            </div>
          </div>
        </div>
        <div class="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front bg-dark text-white">
              <Image src={Img5} alt="Avatar" style={{ width: "400px", height: "400px", marginTop: "40px" }} fluid/>
              <h5 style={{ marginTop: "15px" }}>Spice It Up!!</h5>
            </div>
            <div className="flip-card-back bg-dark text-white">
              <br />
              <br />
              <br />
              <h1>Spice It Up!!</h1>
              <p>Bored?? Having trouble coming up with something to do?? Check out the Spice It Up app where we randomly generate a activity for you to do based on the category you select!!</p>
            </div>
          </div>
        </div>
        <div class="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front bg-dark text-white">
              <Image src={Img6} alt="Avatar" style={{ width: "400px", height: "400px", marginTop: "40px" }} fluid/>
              <h5 style={{ marginTop: "15px" }}>Timed Quiz</h5>
            </div>
            <div className="flip-card-back bg-dark text-white">
              <br />
              <br />
              <br />
              <h1>Timed Quiz</h1>
              <p>Looking for a quick challenge?? With my timed quiz you get 60 seconds to answer 5 questions and see how you rank on the scoreboard.</p>
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