import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

import Side from './Side';
import Center from './Center';
import Hand from './Hand';

export default class Board extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div className="background">
          <MDBContainer fluid>
            <MDBRow>
                <MDBCol md="4">
                    <Side side={this.props.data.board.sideCards}></Side>
                </MDBCol>
                <MDBCol md="8">
                    <Center center={this.props.data.board.centerActions} hand={this.props.data.hand}></Center>
                </MDBCol>
            </MDBRow>
            <MDBRow>
                <MDBCol md="12">
                    <Hand hand={this.props.data.hand}></Hand>
                </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
      );
    }
  }