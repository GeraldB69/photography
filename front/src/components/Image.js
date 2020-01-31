import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';


class Image extends Component {
  constructor(props) {
    super(props)
    this.name = this.props.name;
    this.state = {}
  }

  render() {
    return (
      <MDBCol md="12" xl="12" className="mb-4">        
        <div className="file-upload-wrapper">
          <div className="card card-body view file-upload has-preview">
            <div className="card-text file-upload-message">
              <i className="fas fa-cloud-upload-alt"></i>
              <p>Drag and drop a file here or click</p>
              <p className="file-upload-error">Ooops, something wrong happended.</p>
            </div>
            <div className="mask rgba-stylish-slight" style={{display:"none"}}></div>
            <div className="file-upload-errors-container"><ul></ul></div>
            <button type="button" className="btn btn-sm btn-danger waves-effect waves-light">
              <i className="far fa-trash-alt ml-1"></i>
            </button>
            <div className="file-upload-preview" style={{display: "block"}}>
              <span className="file-upload-render">
                <img 
                  className="img-fluid z-depth-3 file-upload-preview-img" 
                  src={this.name} 
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
                  <p className="file-upload-infos-message">Infos secondaires</p>
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
