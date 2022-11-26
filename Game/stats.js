const Character = require("../Classes/character");

let oleg = new Character("Олег");
oleg.healthStat(1000);
oleg.damageStat(25);
oleg.speedStat(20);

let archer = new Character("Лучник");
archer.healthStat(150);
archer.damageStat(10);
archer.speedStat(25);

let swordsman = new Character("Мечник");
swordsman.healthStat(250);
swordsman.damageStat(20);
swordsman.speedStat(10);

let spearman = new Character("Копейщик");
spearman.healthStat(300);
spearman.damageStat(10);
spearman.speedStat(5);

characters.push(archer.name);
characters.push(swordsman.name);
characters.push(spearman.name);
console.log(characters);

module.exports = Character;