var Action = require('./action.js');

module.exports = class Mine extends Action {
    constructor() {
        //cost, plusCard, plusGold, plusAction, plusBuy
        super(5, 0, 0, 0, 0);
        this.imageSource = "http://wiki.dominionstrategy.com/images/8/8e/Mine.jpg";
    }
  }