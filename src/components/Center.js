import React from 'react';
import { MDBRow, MDBCol, MDBBtn } from "mdbreact";

import GameSerivce from '../controllers/gameController';
/* var GameSerivce = require('../controllers/gameController.js'); */

export default class Center extends React.Component {
    constructor(props) {
      super(props);
      this.gameService = new GameSerivce();
    }

    state = {
      cellar: this.props.center.Cellar.length,
      market: this.props.center.Market.length,
      merchant: this.props.center.Merchant.length,
      militia: this.props.center.Militia.length,
      mine: this.props.center.Mine.length,
      moat: this.props.center.Moat.length,
      remodel: this.props.center.Remodel.length,
      smithy: this.props.center.Smithy.length,
      village: this.props.center.Village.length,
      workshop: this.props.center.Workshop.length
    }

    handleBuy(card, name) {
      let val = this.state[name]
      if (val > 0 && this.gameService.handleBuys(this.props.hand, card.cost) >= 0) {
        val--;
        this.setState({[name]: val});
      }
    }

    render() {
      return (
        <div className="background">
          <MDBRow>
            <MDBCol size="1">
              <img src={this.props.center.Cellar[0].imageSource} className="resize grow" alt="" />
              <MDBBtn color="deep-purple" size="sm" rounded onClick={() => this.handleBuy(this.props.center.Cellar[0], "cellar")}>Buy:{this.state.cellar}</MDBBtn>
            </MDBCol>
            <MDBCol size="1">
              <img src={this.props.center.Market[0].imageSource} className="resize grow" alt="" />
              <MDBBtn color="deep-purple" size="sm" rounded onClick={() => this.handleBuy(this.props.center.Market[0], "market")}>Buy:{this.state.market}</MDBBtn>
            </MDBCol>
            <MDBCol size="1">
              <img src={this.props.center.Merchant[0].imageSource} className="resize grow" alt="" />
              <MDBBtn color="deep-purple" size="sm" rounded onClick={() => this.handleBuy(this.props.center.Merchant[0], "merchant")}>Buy:{this.state.merchant}</MDBBtn>
            </MDBCol>
            <MDBCol size="1">
              <img src={this.props.center.Militia[0].imageSource} className="resize grow" alt="" />
              <MDBBtn color="deep-purple" size="sm" rounded onClick={() => this.handleBuy(this.props.center.Militia[0], "militia")}>Buy:{this.state.militia}</MDBBtn>
            </MDBCol>
            <MDBCol size="1">
              <img src={this.props.center.Mine[0].imageSource} className="resize grow" alt="" />
              <MDBBtn color="deep-purple" size="sm" rounded onClick={() => this.handleBuy(this.props.center.Mine[0], "mine")}>Buy:{this.state.mine}</MDBBtn>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol size="1">
              <img src={this.props.center.Moat[0].imageSource} className="resize grow" alt="" />
              <MDBBtn color="deep-purple" size="sm" rounded onClick={() => this.handleBuy("moat")}>Buy:{this.state.moat}</MDBBtn>
            </MDBCol>
            <MDBCol size="1">
              <img src={this.props.center.Remodel[0].imageSource} className="resize grow" alt="" />
              <MDBBtn color="deep-purple" size="sm" rounded onClick={() => this.handleBuy("remodel")}>Buy:{this.state.remodel}</MDBBtn>
            </MDBCol>
            <MDBCol size="1">
              <img src={this.props.center.Smithy[0].imageSource} className="resize grow" alt="" />
              <MDBBtn color="deep-purple" size="sm" rounded onClick={() => this.handleBuy("smithy")}>Buy:{this.state.smithy}</MDBBtn>
            </MDBCol>
            <MDBCol size="1">
              <img src={this.props.center.Village[0].imageSource} className="resize grow" alt="" />
              <MDBBtn color="deep-purple" size="sm" rounded onClick={() => this.handleBuy("village")}>Buy:{this.state.village}</MDBBtn>
            </MDBCol>
            <MDBCol size="1">
              <img src={this.props.center.Workshop[0].imageSource} className="resize grow" alt="" />
              <MDBBtn color="deep-purple" size="sm" rounded onClick={() => this.handleBuy("workshop")}>Buy:{this.state.workshop}</MDBBtn>
            </MDBCol>
          </MDBRow>
        </div>
      );
    }
  }