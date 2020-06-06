var Copper = require('../DomainData/Treasure/copper.js');
var Silver = require('../DomainData/Treasure/silver.js');
var Gold = require('../DomainData/Treasure/gold.js');

var Estate = require('../DomainData/VictoryPoint/estate.js');
var Curse = require('../DomainData/VictoryPoint/curse.js');
var Duchy = require('../DomainData/VictoryPoint/duchy.js');
var Province = require('../DomainData/VictoryPoint/province.js');

var Cellar = require('../DomainData/Action/cellar.js');
var Market = require('../DomainData/Action/market.js');
var Merchant = require('../DomainData/Action/merchant.js');
var Militia = require('../DomainData/Action/militia.js');
var Mine = require('../DomainData/Action/mine.js');
var Moat = require('../DomainData/Action/moat.js');
var Remodel = require('../DomainData/Action/remodel.js');
var Smithy = require('../DomainData/Action/smithy.js');
var Village = require('../DomainData/Action/village.js');
var Workshop = require('../DomainData/Action/workshop.js');

module.exports = class Factory {
    constructor() {
        this.createCard = function (cardName) {
            var card;
            if (cardName === "Copper") {
                card = new Copper();
            } else if (cardName === "Silver") {
                card = new Silver();
            }  else if (cardName === "Gold") {
                card = new Gold();
            } else if (cardName === "Estate") {
                card = new Estate();
            } else if (cardName === "Duchy") {
                card = new Duchy();
            } else if (cardName === "Province") {
                card = new Province();
            } else if (cardName === "Curse") {
                card = new Curse();
            } else if (cardName === "Cellar") {
                card = new Cellar();
            } else if (cardName === "Moat") {
                card = new Moat();
            } else if (cardName === "Village") {
                card = new Village();
            } else if (cardName === "Workshop") {
                card = new Workshop();
            } else if (cardName === "Merchant") {
                card = new Merchant();
            } else if (cardName === "Smithy") {
                card = new Smithy();
            } else if (cardName === "Militia") {
                card = new Militia();
            } else if (cardName === "Remodel") {
                card = new Remodel();
            } else if (cardName === "Mine") {
                card = new Mine();
            } else if (cardName === "Market") {
                card = new Market();
            }
            return card;
        };
    }
}