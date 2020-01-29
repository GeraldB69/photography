import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import Tags from './Tags';


const Gallery = () => {
  return (
    <MDBContainer className="p-5">
      <h3>Gallerie</h3>
      <MDBRow>
        <Tags />
      </MDBRow>
      <MDBRow>
        <MDBCol lg="4" md="12" className="mb-4">
          <img src="https://mdbootstrap.com/img/Others/documentation/img%20(55)-mini.jpg" className="img-fluid z-depth-1" alt="" />
        </MDBCol>
        <MDBCol lg="4" md="6" className="mb-4">
          <img src="https://mdbootstrap.com/img/Others/documentation/img%20(55)-mini.jpg" className="img-fluid z-depth-1-half"
            alt="" />
        </MDBCol>
        <MDBCol lg="4" md="6" className="mb-4">
          <img src="https://mdbootstrap.com/img/Others/documentation/img%20(55)-mini.jpg" className="img-fluid z-depth-2" alt="" />
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol lg="4" md="12" className="mb-4">
          <img src="https://mdbootstrap.com/img/Others/documentation/img%20(55)-mini.jpg" className="img-fluid z-depth-3" alt="" />
        </MDBCol>
        <MDBCol lg="4" md="6" className="mb-4">
          <img src="https://mdbootstrap.com/img/Others/documentation/img%20(55)-mini.jpg" className="img-fluid z-depth-4" alt="" />
        </MDBCol>
        <MDBCol lg="4" md="6" className="mb-4">
          <img src="https://mdbootstrap.com/img/Others/documentation/img%20(55)-mini.jpg" className="img-fluid z-depth-5" alt="" />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}

export default Gallery

