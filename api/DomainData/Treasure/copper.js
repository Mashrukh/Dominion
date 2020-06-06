var Treasure = require('./treasure.js');

module.exports = class Copper extends Treasure {
    constructor() {
        super(0, 1);
        this.imageSource = "http://wiki.dominionstrategy.com/images/f/fb/Copper.jpg";
    }
  }