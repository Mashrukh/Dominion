import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

export default class Hand extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      {
        var hand = this.props.hand;
        var createHand = hand.map(function(card) {
          var result = 
          <MDBCol size="1">
            <img src={card.imageSource} className="img-fluid grow"></img>
          </MDBCol>;
          return result;
        });
      }
      return (
        <div className="background">
          <MDBRow>
            <MDBCol size="3"></MDBCol>
            {createHand}
          </MDBRow>
        </div>
      );
    }
  }