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
charactersDam.push(archer.damage);
charactersDam.push(swordsman.damage);
charactersDam.push(spearman.damage);
charactersHealth.push(archer.health);
charactersHealth.push(swordsman.health);
charactersHealth.push(spearman.health);
bossHealth.push(oleg.health);
bossDamage.push(oleg.speed);

module.exports = Character;