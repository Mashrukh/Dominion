var VictoryPoint = require('./victoryPoint.js');

module.exports = class Estate extends VictoryPoint {
    constructor() {
        super(2, 1);
        this.imageSource = "http://wiki.dominionstrategy.com/images/9/91/Estate.jpg";
    }
  }