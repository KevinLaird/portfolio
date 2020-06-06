import React from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';
import MyLoadable from "./components/loader/MyLoadable";

const Home = MyLoadable({
  loader: () => import('./components/directories/Home')
});
const Introspect = MyLoadable({
  loader: () => import('./components/directories/projects/Introspect')
});
const About = MyLoadable({
  loader: () => import('./components/directories/About')
});

function App(){
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/introspect" component={ Introspect } />
          <Route exact path="/about" component={ About } />
        </Switch>
      </div> 
    );
}

export default App;
