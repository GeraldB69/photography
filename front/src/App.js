import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { MDBInput, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import Home from './components/Home';
import Gallery from './components/Gallery';
import server from './helpers/config';
import './App.css';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      modal: false,
      username: '',
      pswd: ''
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log("name:", this.state.name)
    axios.post(`${server.server}/login`, { 
      name: this.state.name,
      password: this.state.pswd
    })
      .then(response => {
        const { username, token } = response.data;
        console.log(username, token)
        localStorage.setItem('token', token);
        localStorage.setItem('name', token ? username : '');
      })
    this.toggle()
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }
  
  componentDidMount() {
    const token = localStorage.getItem('token') === 'true';
    const username = token ? localStorage.getItem('name') : '';
    if (token) this.setState({ username, token });
    // checktoken en BDD à faire
  }

  render() {
    
    return (
      <Router>
        <Switch>
          <Route exact path="/">
        <MDBBtn className="position-absolute" color="primary" onClick={() => this.toggle()}>Login</MDBBtn>
        <MDBModal isOpen={this.state.modal} toggle={() => this.toggle()} centered>
          <MDBModalHeader toggle={() => this.toggle()}>Login</MDBModalHeader>
          <MDBModalBody>
            <form onSubmit={this.handleSubmit}>
              <div className="grey-text">
                <MDBInput
                  label="Login"
                  icon="user-alt"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                  id="name"
                  value={this.state.name} 
                  onChange={this.handleChange}
                />
                <MDBInput
                  label="Password"
                  icon="lock"
                  group
                  type="password"
                  validate
                  id="pswd"
                  value={this.state.pswd} 
                  onChange={this.handleChange}
                />
              </div>
              <div className="text-center">
                <MDBBtn color="secondary" onClick={() => this.toggle()}>Close</MDBBtn>
                <MDBBtn color="primary" type="submit">Login</MDBBtn>
              </div>
            </form>          
          </MDBModalBody>
          <MDBModalFooter></MDBModalFooter>
        </MDBModal>
            <Home />
          </Route>
          <Route path="/gallery">
            <Gallery />
          </Route>
          <Route path="/login">
            { () => this.modal() }
          </Route>
        </Switch>
      </Router>
    )
  }

}

export default App;
