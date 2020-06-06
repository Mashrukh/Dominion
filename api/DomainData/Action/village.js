var Action = require('./action.js');

module.exports = class Village extends Action {
    constructor() {
        //cost, plusCard, plusGold, plusAction, plusBuy
        super(3, 1, 0, 2, 0);
        this.imageSource = "http://wiki.dominionstrategy.com/images/5/5a/Village.jpg";
    }
  }