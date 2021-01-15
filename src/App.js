import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";

// testing to deploy to gh pages

function App() {
  return (
    <Router basename="/dm-react-portfolio">
      <div style={{backgroundImage: `url("https://www.netpremacy.com/wp-content/uploads/2018/09/Background-website-01.jpg")`}}>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
