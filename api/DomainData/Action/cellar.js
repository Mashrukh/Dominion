var Action = require('./action.js');

module.exports = class Cellar extends Action {
    constructor() {
        //cost, plusCard, plusGold, plusAction, plusBuy
        super(2, 0, 0, 1, 0);
        this.imageSource = "http://wiki.dominionstrategy.com/images/1/1c/Cellar.jpg";
    }
  }