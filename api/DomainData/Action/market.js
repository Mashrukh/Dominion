var Action = require('./action.js');

module.exports = class Market extends Action {
    constructor() {
        //cost, plusCard, plusGold, plusAction, plusBuy
        super(5, 1, 1, 1, 1);
        this.imageSource = "http://wiki.dominionstrategy.com/images/7/7e/Market.jpg";
    }
  }