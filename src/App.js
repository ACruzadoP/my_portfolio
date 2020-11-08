import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './components/Header/Navbar';
import Footer from './components/Footer/Footer';
import Home from "./components/Main/Home/Home";
import Works from "./components/Main/Portfolio/Works";
import About from "./components/Main/About/About";
import './App.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/works" component={Works} />
          <Route path="/about" component={About} />
        </Switch>
        <Footer />
      </Router>
    )
  }
}

export default App;
