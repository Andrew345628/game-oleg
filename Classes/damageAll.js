//const choiseCharacter = require("../Classes/choiseCharacter.js");
//const Character = require('./character');

//playerCharacters = [];
//playerCharactersId = [];
//a = 0;

class damageAll {
    resultDam() {
        var x = 0;
        console.log('\x1b[35mВаши бойцы ' + playerCharacters.join (' '));
        var damageAllPlayers = 0;
        for(x = 0; x < 5 ; x++){
            //console.log('Урон бойцы ' + );
            damageAllPlayers = damageAllPlayers + charactersDam[playerCharactersId[x]];
            
        }
        console.log('\x1b[34mОбщий урон:' + damageAllPlayers);
    }

    resultHealth() {
        var l = 0;
        //console.log('Ваши бойцы ' + playerCharacters.join (' '));
        var healthAllPlayers = 0;
        for(l = 0; l < 5 ; l++){
            //console.log('Урон бойцы ' + );
            healthAllPlayers = healthAllPlayers + charactersHealth[playerCharactersId[l]];
            
        }
        console.log('\x1b[31mОбщее здоровье:' + healthAllPlayers);
        console.log('\x1b[33m===================================================');
    }
}

module.exports = damageAll;
//module.exports = choiseCharacter;