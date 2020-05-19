import React, { Component } from 'react';
import './App.scss';
import Home from "./components/directories/Home";
import Contact from "./components/directories/Contact";
import About from "./components/directories/About";
import Introspect from "./components/directories/projects/Introspect";
import { Switch, Route } from 'react-router-dom';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/introspect" component={Introspect} />
          <Route exact path="/about" component={About} />
        </Switch>
      </div> 
    );
  }
  
}

export default App;
