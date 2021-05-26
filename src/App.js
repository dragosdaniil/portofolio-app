import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AllProjects from "./pages/AllProjects";
import ScrollToTop from "./components/ScrollToTop";

import "./index.css";

/* TODO List:
  Create Navbar => done

  Create Footer => done

  Create Home Page => done
  Create Projects Page => done
  Create Contact Page => 
  Create About Page => 

  Arrange Service Component for data display => 
  Arrange Project Component for data display =>

  Gather Images for Project/About/Service displays =>

  Create Contact Form => connect form to 3rd party?

  Gather data =>
  Create data api => post on screen =>

  Test website for BUGS
  *KNOWN BUGS*
  - When the window is enlarged with dropdown open, the height is that
  of the dropdown, not the nav
*/

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/allprojects">
          <AllProjects />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
