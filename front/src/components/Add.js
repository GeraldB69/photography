import React, { Component } from 'react';
import axios from 'axios';
import { MDBBtn, MDBModal, MDBModalHeader, MDBModalBody, MDBInput, MDBModalFooter } from 'mdbreact';
import server from '../helpers/config';


class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      token: null,
      modal: false,
      file: '',

    }
  }
  
  onChange = e => {
    e.preventDefault();
    this.setState({ 
      file: e.target.files[0],
      filename: e.target.files[0].name
    })
  }

  onSubmit = e => {
    e.preventDefault();
    const file = this.state.file
    this.fileUpload(file)
    this.toggle()
  }
  
  fileUpload = file => {
    if (this.state.file) {

      const url = `${server.server}/upload`;
      const formData = new FormData();
      formData.append('file', file)
      const config = {
        headers: {
        'content-type': 'multipart/form-data'
        }
      }
      console.log(file.name)
      axios.post(url, formData, config)
    //    .then(response => console.log(response.data.data.name))
    } else {
      console.log("No file upload !")
    }
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
      filename: null
    });
  }

  button =
    <>
      <MDBBtn className="float-right" color="primary" onClick={() => this.toggle()}>Add</MDBBtn>
    </>;
  
  componentDidMount() {
    const token = localStorage.getItem('token');
    const username = token ? localStorage.getItem('name') : '';
    if (token) this.setState({ username, token });
  }
  render() {
      return (
        <>
          { this.button }
          <MDBModal isOpen={this.state.modal} toggle={() => this.toggle()} centered>
            <MDBModalHeader toggle={() => this.toggle()}>Upload</MDBModalHeader>
            <MDBModalBody>
              <form onSubmit={this.onSubmit}>
                <div className="file-upload-wrapper">
                  <div className="card card-body view file-upload has-preview">
                    <input 
                      type="file" 
                      id="input-file-max-fs" 
                      className="file-upload" 
                      data-height="500" 
                      data-max-file-size="2M"
                      onChange={this.onChange}
                    />
                    <div className="card-text file-upload-message">
                      {(!this.state.filename) && <i className="fas fa-cloud-upload-alt"></i>}
                      {(!this.state.filename) && <p>Drag and drop a file here or click</p>}
                      {(this.state.filename) && <p>{this.state.filename}</p>}
                      <p className="file-upload-error">Ooops, something wrong happended.</p>
                    </div>
                    <div className="mask rgba-stylish-slight" style={{display:"block"}}></div>
                    <div className="file-upload-errors-container"><ul></ul></div>
                  </div>
                </div>
                <hr />
                <div className="text-center">
                  <MDBBtn color="secondary" onClick={() => {
                    this.toggle(); 
                    this.setState({file: null})
                  }}>
                    Close
                  </MDBBtn>
                  <MDBBtn color="primary" type="submit">Add</MDBBtn>
                </div>
              </form>          
            </MDBModalBody>
        </MDBModal>
      </>
    )
  }
}

export default Add;
