characters = [];
charactersDam = [];
charactersHealth = [];
bossHealth = [];
bossDamage = [];
class Character {
    constructor(name) {
      this.health = 0;
      this.damage = 0;
      this.speed = 0;
      this.name = name;
    }
    healthStat(health) {
      this.health = health;
    }
    damageStat(damage) {
      this.damage = damage;
    }
    speedStat(speed) {
      this.speed = speed;
    }
  }

  module.exports = Character;