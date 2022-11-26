const Character = require("../Classes/character.js");
playerDamage = 0;
class Game{
    start(){
        playerDamage = this.damage;
        console.log(playerDamage);
    }
}

module.exports = Game;