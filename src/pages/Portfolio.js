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
import Img7 from "../assets/FrontPage.png";
import Img8 from "../assets/VacationBudget.png";
import Img9 from "../assets/FinalOutput.png";
import Img10 from "../assets/AddExercise.png";
import Img11 from "../assets/InitialPage.png";
import Img12 from "../assets/FirstPrompt.png";
import '../components/FlipCard/style.css';
import Image from "react-bootstrap/Image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Portfolio() {
  return (
    <div>
      <div className="jumbotron jumbotron-fluid bg-dark text-white">
        <div className="container">
          <h1 className="display-4">My Projects <FontAwesomeIcon icon={faFolderOpen}/></h1>
          <p className="lead">Below you will see the projects I have worked on with links on the back of each card to their github repo.</p>
        </div>
      </div>
      <Row>
        {/* <Col size="md-12"> */}

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
              <p>Bored?? Having trouble coming up with something to do?? Check out the Spice It Up!! app where we randomly generate an activity for you to do based on the category you select!!</p>
              <br/>
              <br/>
              <br/>
              <a rel="alternate, noreferrer" target="_blank" href="https://github.com/dspark8916/Project1Group2"><FontAwesomeIcon icon={faGithub} size="5x" color="white"/></a>
            </div>
          </div>
        </div>

        <div class="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front bg-dark text-white">
              <Image src={Img7} alt="Avatar" style={{ width: "400px", height: "400px", marginTop: "40px" }} fluid/>
              <h5 style={{ marginTop: "15px" }}>Burger App</h5>
            </div>
            <div className="flip-card-back bg-dark text-white">
              <br />
              <br />
              <br />
              <h1>Burger App</h1>
              <br />
              <p>Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat. Whenever a user submits a burger's name, the app will display the burger waiting to be devoured.</p>
              <br/>
              <br/>
              <br/>
              <a rel="alternate, noreferrer" target="_blank" href="https://github.com/dspark8916/Burger"><FontAwesomeIcon icon={faGithub} size="5x" color="white"/></a>
            </div>
          </div>
        </div>

        <div class="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front bg-dark text-white">
              <Image src={Img8} alt="Avatar" style={{ width: "400px", height: "400px", marginTop: "40px" }} fluid/>
              <h5 style={{ marginTop: "15px" }}>Progressive Budget</h5>
            </div>
            <div className="flip-card-back bg-dark text-white">
              <br />
              <br />
              <br />
              <h1>Progressive Budget</h1>
              <br />
              <p>A fast and easy way to track your money and access your information at any time. This app will allow you to add expenses and deposits to your budget with or without an internet connection and make sure your balance is accurate. </p>
              <br/>
              <br/>
              <br/>
              <a rel="alternate, noreferrer" target="_blank" href="https://github.com/dspark8916/ProgressiveBudget"><FontAwesomeIcon icon={faGithub} size="5x" color="white"/></a>
            </div>
          </div>
        </div>

        <div class="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front bg-dark text-white">
              <Image src={Img9} alt="Avatar" style={{ width: "400px", height: "400px", marginTop: "40px" }} fluid/>
              <h5 style={{ marginTop: "15px" }}>Team Profile Generator</h5>
            </div>
            <div className="flip-card-back bg-dark text-white">
              <br />
              <br />
              <br />
              <h1>Team Profile Generator</h1>
              <br />
              <p>This app allows managers to generate a webpage displaying their team's basic info and allowing team quick access to their emails and GitHub profiles.</p>
              <br/>
              <br/>
              <br/>
              <a rel="alternate, noreferrer" target="_blank" href="https://github.com/dspark8916/TeamProfileGenerator"><FontAwesomeIcon icon={faGithub} size="5x" color="white"/></a>
            </div>
          </div>
        </div>

        <div class="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front bg-dark text-white">
              <Image src={Img10} alt="Avatar" style={{ width: "400px", height: "400px", marginTop: "40px" }} fluid/>
              <h5 style={{ marginTop: "15px" }}>Fitness Tracker</h5>
            </div>
            <div className="flip-card-back bg-dark text-white">
              <br />
              <br />
              <br />
              <h1>Fitness Tracker</h1>
              <br />
              <p>Easy to use to view, create, and track daily workouts. You can log mulitple exercises and can track them by name, type, weight, sets, reps, and duration of the exercise. Upon loading the page you will have the option to create new workout or continue with your last one. Keeping track of your workouts is sure to make life easier for you!!</p>
              <br/>
              <br/>
              <br/>
              <a rel="alternate, noreferrer" target="_blank" href="https://github.com/dspark8916/FitnessTracker"><FontAwesomeIcon icon={faGithub} size="5x" color="white"/></a>
            </div>
          </div>
        </div>

        <div class="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front bg-dark text-white">
              <Image src={Img11} alt="Avatar" style={{ width: "400px", height: "400px", marginTop: "40px" }} fluid/>
              <h5 style={{ marginTop: "15px" }}>Note Taker</h5>
            </div>
            <div className="flip-card-back bg-dark text-white">
              <br />
              <br />
              <br />
              <h1>Note Taker</h1>
              <br />
              <p>Having trouble remembering things and keeping track of information?? This app is perfect for you!! You can take persistent notes and have access to that information whenever you need it!!</p>
              <br/>
              <br/>
              <br/>
              <a rel="alternate, noreferrer" target="_blank" href="https://github.com/dspark8916/NoteTaker"><FontAwesomeIcon icon={faGithub} size="5x" color="white"/></a>
            </div>
          </div>
        </div>

        <div class="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front bg-dark text-white">
              <Image src={Img12} alt="Avatar" style={{ width: "400px", height: "400px", marginTop: "40px" }} fluid/>
              <h5 style={{ marginTop: "15px" }}>Employee Management System</h5>
            </div>
            <div className="flip-card-back bg-dark text-white">
              <br />
              <br />
              <br />
              <h1>Employee Management System</h1>
              <br />
              <p>This app is for business owners and managers who want to be able to view and manage their departments, roles, and employees in their company so that they can organize and plan their business better!!</p>
              <br/>
              <br/>
              <br/>
              <a rel="alternate, noreferrer" target="_blank" href="https://github.com/dspark8916/EMS"><FontAwesomeIcon icon={faGithub} size="5x" color="white"/></a>
            </div>
          </div>
        </div>

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
              <br/>
              <br/>
              <br/>
              <a rel="alternate, noreferrer" target="_blank" href="https://github.com/dspark8916/Daily-Planner"><FontAwesomeIcon icon={faGithub} size="5x" color="white"/></a>
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
              <br/>
              <br/>
              <br/>
              <a rel="alternate, noreferrer" target="_blank" href="https://github.com/dspark8916/Weather-Dashboard"><FontAwesomeIcon icon={faGithub} size="5x" color="white"/></a>
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
              <a rel="alternate, noreferrer" target="_blank" href="https://github.com/dspark8916/CodeRefractor"><FontAwesomeIcon icon={faGithub} size="5x" color="white"/></a>
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
              <br/>
              <br/>
              <br/>
              <a rel="alternate, noreferrer" target="_blank" href="https://github.com/dspark8916/Password-Generator"><FontAwesomeIcon icon={faGithub} size="5x" color="white"/></a>
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
              <br/>
              <br/>
              <br/>
              <a rel="alternate, noreferrer" target="_blank" href="https://github.com/dspark8916/Guessing-Game"><FontAwesomeIcon icon={faGithub} size="5x" color="white"/></a>
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