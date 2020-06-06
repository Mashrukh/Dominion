var Action = require('./action.js');

module.exports = class Remodel extends Action {
    constructor() {
        //cost, plusCard, plusGold, plusAction, plusBuy
        super(4, 0, 0, 0, 0);
        this.imageSource = "http://wiki.dominionstrategy.com/images/2/2e/Remodel.jpg";
    }
}