var Treasure = require('../DomainData/Treasure/treasure.js');
var Action = require('../DomainData/Action/action.js');
var Factory = require('../Services/cardFactory.js');

module.exports = class GameService {
    constructor() {};
    
    initialize() {
        var deck = new Array();
        var discard = new Array();
        var factory = new Factory();
        var board = this.initializeBoard(factory);
      
        // initialize treasures
        for (let i = 0; i < 7; i++) {
            deck.push(factory.createCard("Copper"));
        }
        // initialize estates
        for (let i = 0; i < 3; i++) {
            deck.push(factory.createCard("Estate"));
        }
    
        this.shuffle(deck);
        var hand = this.drawHand(deck);
        this.handleTurn(hand, deck, discard);
    
        var result = {
            "board": board,
            "hand": hand,
            "deck": deck
        }
        return result;
    }

    shuffle(deck) {
        // Fisher Yates shuffle
        for (let i = deck.length-1; i > 0; i--) {
            let r = Math.floor(Math.random() * i);
            let temp = deck[i];
            deck[i] = deck[r];
            deck[r] = temp;
        }
    }
      
    drawHand(deck) {
        var hand = new Array(5);
        for (let i = 0; i < hand.length; i++) {
            hand[i] = deck.shift();
        }
        return hand;
    }

    handleTurn(hand, deck, discard) {
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
      }
      
      handleActions(hand, deck) {
        let endActions = false;
        //TODO: get input from front end
        let input = -1;
        if (input !== -1 && hand[input] instanceof Action) {
            performAction(input, hand, deck);
        }
      }
      
      handleBuys(hand, deck) {
        let totalTreasure = 0;
        hand.map(function (card){
            if (card instanceof Treasure) {
                totalTreasure+= card.value;
            }
        });
      }
      
      performAction(input, hand, deck) {
        return;
      }
      
      handleCleanUp(hand, deck, discard) {
        return;
      }
    
      initializeBoard(factory) {
        var board = {};
        var centerActions = {};
        var sideCards = {};
        var addCardToBoard = function (name, count, board) {
            var set = new Array();
            for (let i = 0; i < count; i++) {
                set.push(factory.createCard(name));
            }
            board[name] = set;
        };

        addCardToBoard("Province", 8, sideCards);
        addCardToBoard("Duchy", 8, sideCards);
        addCardToBoard("Estate", 8, sideCards);
        addCardToBoard("Curse", 10, sideCards);
        addCardToBoard("Copper", 46, sideCards);
        addCardToBoard("Silver", 40, sideCards);
        addCardToBoard("Gold", 30, sideCards);

        addCardToBoard("Cellar", 10, centerActions);
        addCardToBoard("Market", 10, centerActions);
        addCardToBoard("Merchant", 10, centerActions);
        addCardToBoard("Militia", 10, centerActions);
        addCardToBoard("Mine", 10, centerActions);
        addCardToBoard("Moat", 10, centerActions);
        addCardToBoard("Remodel", 10, centerActions);
        addCardToBoard("Smithy", 10, centerActions);
        addCardToBoard("Village", 10, centerActions);
        addCardToBoard("Workshop", 10, centerActions);

        board.centerActions = centerActions;
        board.sideCards = sideCards;
        return board;
    }
}