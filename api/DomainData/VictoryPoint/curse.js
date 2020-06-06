var VictoryPoint = require('./victoryPoint.js');

module.exports = class Curse extends VictoryPoint {
    constructor() {
        super(0, -1);
        this.imageSource = "http://wiki.dominionstrategy.com/images/9/97/Curse.jpg";
    }
}