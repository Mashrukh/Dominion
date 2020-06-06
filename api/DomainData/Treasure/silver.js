var Treasure = require('./treasure.js');

module.exports = class Silver extends Treasure {
    constructor() {
        super(3, 2);
        this.imageSource = "http://wiki.dominionstrategy.com/images/5/5d/Silver.jpg";
    }
}