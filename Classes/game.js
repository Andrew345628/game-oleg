const Character = require("../Game/stats.js");
playerDamage = 0;
class Game extends Character{
    start(){
        playerDamage = archer.damageStat;
        console.log(playerDamage);
    }
}

module.exports = Game;