var Action = require('./action.js');

module.exports = class Militia extends Action {
    constructor() {
        //cost, plusCard, plusGold, plusAction, plusBuy
        super(4, 0, 2, 0, 0);
        this.imageSource = "http://wiki.dominionstrategy.com/images/a/a0/Militia.jpg";
    }
  }