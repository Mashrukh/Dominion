var Action = require('./action.js');

module.exports = class Workshop extends Action {
    constructor() {
        //cost, plusCard, plusGold, plusAction, plusBuy
        super(3, 0, 0, 0, 0);
        this.imageSource = "http://wiki.dominionstrategy.com/images/5/50/Workshop.jpg";
    }
  }