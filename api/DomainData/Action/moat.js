var Action = require('./action.js');

module.exports = class Moat extends Action {
    constructor() {
        //cost, plusCard, plusGold, plusAction, plusBuy
        super(2, 2, 0, 0, 0);
        this.imageSource = "http://wiki.dominionstrategy.com/images/f/fe/Moat.jpg";
    }
  }