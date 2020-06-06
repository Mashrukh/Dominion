var Action = require('./action.js');

module.exports = class Smithy extends Action {
    constructor() {
        //cost, plusCard, plusGold, plusAction, plusBuy
        super(4, 3, 0, 0, 0);
        this.imageSource = "http://wiki.dominionstrategy.com/images/3/36/Smithy.jpg";
    }
  }