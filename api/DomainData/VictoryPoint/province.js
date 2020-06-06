var VictoryPoint = require('./victoryPoint.js');

module.exports = class Province extends VictoryPoint {
    constructor() {
        super(8, 6);
        this.imageSource = "http://wiki.dominionstrategy.com/images/8/81/Province.jpg";
    }
}