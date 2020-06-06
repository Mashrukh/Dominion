var Action = require('./action.js');

module.exports = class Merchant extends Action {
    constructor() {
        //cost, plusCard, plusGold, plusAction, plusBuy
        super(3, 1, 0, 1, 0);
        this.imageSource = "http://wiki.dominionstrategy.com/images/7/78/Merchant.jpg";
    }
  }