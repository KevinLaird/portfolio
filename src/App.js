import React from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';
import MyLoadable from "./components/loader/MyLoadable";

const Home = MyLoadable({
  loader: () => import('./components/directories/Home')
});
const About = MyLoadable({
  loader: () => import('./components/directories/About')
});
const Introspect = MyLoadable({
  loader: () => import('./components/directories/projects/Introspect')
});
const Wing = MyLoadable({
  loader: () => import('./components/directories/projects/Wing')
})
const DFL = MyLoadable({
  loader: () => import('./components/directories/projects/DFL')
})
const Hostwinds = MyLoadable({
  loader: () => import('./components/directories/projects/Hostwinds')
})
const Contact = MyLoadable({
  loader: () => import('./components/directories/Contact')
})

function App(){
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/introspect" component={ Introspect } />
          <Route exact path="/dfl" component={ DFL } />
          <Route exact path="/wing" component={ Wing } />
          <Route exact path="/hostwinds" component={ Hostwinds } />
          <Route exact path="/contact" component={ Contact } />
          <Route exact path="/about" component={ About } />
        </Switch>
      </div> 
    );
}

export default App;
