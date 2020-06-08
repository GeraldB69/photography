import React from 'react';
import { Link } from "react-router-dom";
import { MDBJumbotron, MDBBtn, MDBContainer, MDBIcon } from "mdbreact";


function Home() {
  return(
    <MDBJumbotron className="d-flex text-center flex-wrap align-content-center h-100 m-0">
      <MDBContainer className="">
        <h2 className="display-4">Photographies.</h2>
        <p className="lead">Voir le monde autrement.</p>
        <Link to="/gallery">
          <MDBBtn outline color="blue" className="mb-5">
            <MDBIcon icon="clone" className="mr-2"></MDBIcon>
            Découvrir
          </MDBBtn>
        </Link>
      </MDBContainer>
    </MDBJumbotron>
  )
}

export default Home;
