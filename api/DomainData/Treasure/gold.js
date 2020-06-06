var Treasure = require('./treasure.js');

module.exports = class Gold extends Treasure {
    constructor() {
        super(6, 3);
        this.imageSource = "http://wiki.dominionstrategy.com/images/5/50/Gold.jpg";
    }
}