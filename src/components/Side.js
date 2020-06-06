import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

export default class Side extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div className="background">
            <MDBRow>
                <MDBCol md="2">
					<img src={this.props.side.Province[0].imageSource} className="resize grow" alt="" />
				</MDBCol>
				<MDBCol md="2">
					<img src={this.props.side.Gold[0].imageSource} className="resize grow" alt="" />
				</MDBCol>
            </MDBRow>
            <MDBRow>
                <MDBCol md="2">
					<img src={this.props.side.Duchy[0].imageSource} className="resize grow" alt="" />
				</MDBCol>
				<MDBCol md="2">
					<img src={this.props.side.Silver[0].imageSource} className="resize grow" alt="" />
				</MDBCol>
            </MDBRow>
            <MDBRow>
				<MDBCol md="2">
					<img src={this.props.side.Estate[0].imageSource} className="resize grow" alt="" />
				</MDBCol>
				<MDBCol md="2">
					<img src={this.props.side.Copper[0].imageSource} className="resize grow" alt="" />
				</MDBCol>
			</MDBRow>
			<MDBRow>
				<MDBCol md="2">
					<img src={this.props.side.Curse[0].imageSource} className="resize grow" alt="" />
				</MDBCol>
			</MDBRow>
        </div>
      );
    }
  }