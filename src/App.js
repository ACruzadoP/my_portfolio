import React from 'react';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from './components/Navbar';
import Footer from './components/Footer/Footer';

import Home from "./components/Main/Home";
import Portfolio from "./components/Main/Portfolio";
import About from "./components/Main/About";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/about" component={About} />
        </Switch>
        <Footer />
      </Router>
    )
  }
}

export default App;
