import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home';
import Gallery from './components/Gallery'
import './App.css';


const App = () => {
  return (
    <Router>
      <Switch>
        {/* <Route path="/admin">
          <Admin />
        </Route> */}
        <Route path="/gallery">
          <Gallery />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
  </Router>
  )
}


export default App;
