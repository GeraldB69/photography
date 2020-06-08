import React, { Component } from 'react';
import { MDBCol } from 'mdbreact';


class Image extends Component {
  constructor(props){
    super(props)
    this.directory = 'http://localhost:5000/uploads/'
    this.file = this.props.file;
    this.state = {

    }
  }

  componentDidMount() {
    const token = localStorage.getItem('token');
    const username = token ? localStorage.getItem('name') : '';
    if (token) this.setState({ name: username, token });
    // checktoken en BDD à faire
  }

  render() {

    let button = '';
    if (this.state.name && this.state.token) {
      button = 
        <button 
          type="button" 
          className="btn btn-sm btn-danger waves-effect waves-light"
          onClick={() => console.log("remove", this.props.file)}
        >
          <i className="far fa-trash-alt"></i>
        </button>
    }

    if (this.state.images) {

    }

    return (
      <MDBCol sm="12" md="12" xl="12" className="mb-4 p-0">        
        <div className="file-upload-wrapper z-depth-3">
          <div className="card card-body view file-upload has-preview">
            { button }
            <div className="file-upload-preview" style={{display: "block"}}>
              <span className="file-upload-render">
                <img 
                  className="img-fluid file-upload-preview-img" 
                  src={`${this.directory}${this.file}`} 
                  alt=""
                />
              </span>
              <div className="file-upload-infos">
                <div className="file-upload-infos-inner">
                  <p className="file-upload-filename">
                    <span className="file-upload-filename-inner">
                      Descriptif
                    </span>
                  </p>
                  <p className="file-upload-infos-message">Données EXIF</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MDBCol>


    )
  }

}

export default Image;
