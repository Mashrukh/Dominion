module.exports = class GameService {
    constructor() {};
    /* handleTurn(hand, deck, discard) {
        let actions = 1;
        let buys = 1;
        while (actions > 0) {
            this.handleActions(hand, deck);
            actions--;
        }
        while (buys > 0) {
            this.handleBuys(hand, deck);
            buys--;
        }
        this.handleCleanUp(hand, deck, discard);
    } */

    //returns amount of money left or -1 if no purchase made
    handleBuys(hand, cost) {
        let totalTreasure = 0;
        hand.map(function (card){
            if (card.treasureValue) {
                totalTreasure+= card.treasureValue;
            }
        });
        let remainder = totalTreasure - cost
        if (remainder < 0) {
            return -1;
        }
        // remove the number of used treasures from hand
        for (let i = 0; i < hand.length; i++) {
            if (hand[i].treasureValue) {
                hand.pop();
            }
        }
        return remainder;
    }
    
}