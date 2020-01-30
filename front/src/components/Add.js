import React, { Component } from 'react';
import { MDBBtn } from 'mdbreact';


class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  Add = () => {
    // Post d'une photo en bdd
    
  }

  button =
    <>
      <MDBBtn 
        className="float-right" 
        color="primary" 
        onClick={() => console.log("clicclac")}
      >
        Add
      </MDBBtn>
    </>;
  componentDidMount() {
    const token = localStorage.getItem('token');
    const username = token ? localStorage.getItem('name') : '';
    if (token) this.setState({ username });
    // checktoken en BDD à faire
  }
  render() {
      return (
        <>
          {(this.state.username) && this.button }
        </>
      )
  }
}

export default Add;
