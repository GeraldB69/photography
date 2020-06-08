import React, { Component } from "react";
import { MDBBtn, MDBCollapse } from "mdbreact";

class Tags extends Component {
state = {
  collapseID: ""
}

toggleCollapse = collapseID => () => {
  this.setState(prevState => ({
    collapseID: prevState.collapseID !== collapseID ? collapseID : ""
  }));
}

  render() {
    return (
      <>
        {/* <MDBBtn
          color="primary"
          href="!#"
          onClick={this.toggleCollapse("basicCollapse")}
          style={{ marginBottom: "1rem" }}
        >
          COLLAPSE LINK
        </MDBBtn> */}
        <MDBBtn
          color="primary"
          onClick={this.toggleCollapse("basicCollapse")}
          style={{ marginBottom: "1rem" }}
        >
          COLLAPSE BUTTON
        </MDBBtn>
        <MDBCollapse id="basicCollapse" isOpen={this.state.collapseID}>
          <p>
          Les tags seront juste en dessous...
          Les tags seront juste en dessous...
          Les tags seront juste en dessous...
          </p>
        </MDBCollapse>
      </>
    );
  }
}

export default Tags;
