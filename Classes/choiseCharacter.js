const readlineSync = require('readline-sync');
//const Character = require('./character');

playerCharacters = [];
a = 0;

class choiseCharacter {
    choise() {
        for(a = 0; a < 0; a++){
            const userName = readlineSync.keyInSelect(characters, 'Choise players ');
            playerCharacters.push(userName);
        }
        console.log(playerCharacters);
    }
}

module.exports = choiseCharacter;