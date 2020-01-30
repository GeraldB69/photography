import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import Tags from './Tags';
import Add from './Add';


class Gallery extends Component {
  constructor(props){
    super(props)
    this.state = {
      username: '',
    }
  }

  componentDidMount() {
    const token = localStorage.getItem('token');
    const username = token ? localStorage.getItem('name') : '';
    if (token) this.setState({ username });
    // checktoken en BDD à faire
  }

  render() {
// BOUTON AJOUTER
// BOUTON SUPPRIMER
// CONDITION SUR STATE
    return (
      <MDBContainer className="p-5">
        <h3>Gallerie</h3>
        <Add />
        <MDBRow>
          <Tags />
        </MDBRow>
        <MDBRow>
          <MDBCol lg="4" md="12" className="mb-4">
            <img src="https://mdbootstrap.com/img/Others/documentation/img%20(55)-mini.jpg" className="img-fluid z-depth-3" alt="" />
          </MDBCol>
          <MDBCol lg="4" md="6" className="mb-4">
            <img src="https://mdbootstrap.com/img/Others/documentation/img%20(55)-mini.jpg" className="img-fluid z-depth-3"
              alt="" />
          </MDBCol>
          <MDBCol lg="4" md="6" className="mb-4">
            <img src="https://mdbootstrap.com/img/Others/documentation/img%20(55)-mini.jpg" className="img-fluid z-depth-3" alt="" />
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol lg="4" md="12" className="mb-4">
            <img src="https://mdbootstrap.com/img/Others/documentation/img%20(55)-mini.jpg" className="img-fluid z-depth-3" alt="" />
          </MDBCol>
          <MDBCol lg="4" md="6" className="mb-4">
            <img src="https://mdbootstrap.com/img/Others/documentation/img%20(55)-mini.jpg" className="img-fluid z-depth-3" alt="" />
          </MDBCol>
          <MDBCol lg="4" md="6" className="mb-4">
            <img src="https://mdbootstrap.com/img/Others/documentation/img%20(55)-mini.jpg" className="img-fluid z-depth-3" alt="" />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    )
  }
}

export default Gallery

