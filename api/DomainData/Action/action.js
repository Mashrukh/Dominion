module.exports = class Action {
    constructor(cost, plusCard, plusGold, plusAction, plusBuy) {
        this.cost = cost;
        this.plusCard = plusCard;
        this.plusGold = plusGold;
        this.plusAction = plusAction;
        this.plusBuy = plusBuy;
    }
  }