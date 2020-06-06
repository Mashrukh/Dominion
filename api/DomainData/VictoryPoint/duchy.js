var VictoryPoint = require('./victoryPoint.js');

module.exports = class Duchy extends VictoryPoint {
    constructor() {
        super(5, 3);
        this.imageSource = "http://wiki.dominionstrategy.com/images/4/4a/Duchy.jpg";
    }
}