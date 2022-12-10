const readlineSync = require('readline-sync');
//const Character = require('./character');

playerCharacters = [];
playerCharactersId = [];
a = 0;

class choiseCharacter {
    choise() {
        for(a = 0; a < 5; a++){
            const userName = readlineSync.keyInSelect(characters, 'Choise players ');
            playerCharacters.push(characters[userName]);
            playerCharactersId.push(userName);
        }
        //console.log(playerCharacters);
        //console.log(playerCharactersId);
    }
}

module.exports = choiseCharacter;