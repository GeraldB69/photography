import React, { Component } from 'react';
import axios from 'axios';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import Tags from './Tags';
import Add from './Add';
import Image from './Image';
import server from '../helpers/config';


class Gallery extends Component {
  constructor(props){
    super(props)
    this.state = {
      username: null,
      token: null,
      images: []
    }
  }

  AllImages = () => {
    axios.get(`${server.server}/gallery`)
      .then(response => {
        this.setState({ images: response.data})
        console.log(response.data)
      })
  }

  componentDidMount() {
    const token = localStorage.getItem('token');
    const username = token ? localStorage.getItem('name') : '';
    if (token) this.setState({ username, token });
    // checktoken en BDD à faire
    this.AllImages();
  }

  render() {
    return (
      <MDBContainer className="p-5">
        <h3>Galerie</h3>
        { (this.state.username) && <Add /> }
        <MDBRow>
          <Tags />
        </MDBRow>
        <MDBRow>
          { 
              (this.state.images) && this.state.images.map((item, i) => (
                <MDBCol key={`img-${i}`} lg="4" md="12" className="mb-2">
                  <Image 
                   file={item.name} 
                  />
                </MDBCol>
              ))
          }
        </MDBRow>
      </MDBContainer>
    )
  }
}

export default Gallery

