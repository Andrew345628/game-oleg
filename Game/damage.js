const damageAll = require("../Classes/damageAll.js");
//const choiseCharacter = require("../Classes/choiseCharacter.js");

let damage = new damageAll();
damage.resultDam();

let health = new damageAll();
health.resultHealth();

module.exports = damageAll;
//module.exports = choiseCharacter;