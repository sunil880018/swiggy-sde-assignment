class Player {
    constructor(name, health, strength, attack) {
        this.name = name;
        this.health = health;
        this.strength = strength;
        this.attack = attack;
    }

    rollDice() {
        return Math.floor(Math.random() * 6) + 1;
    }

    performAttack(defender) {
        const attackRoll = this.rollDice();
        const attackDamage = this.attack * attackRoll;

        const defenseRoll = defender.rollDice();
        const defenseStrength = defender.strength * defenseRoll;

        const netDamage = Math.max(0, attackDamage - defenseStrength);
        defender.health -= netDamage;

        console.log(`${this.name} attacks ${defender.name}: Attack roll = ${attackRoll}, Attack damage = ${attackDamage}, Defense roll = ${defenseRoll}, Defense strength = ${defenseStrength}, Net damage = ${netDamage}, ${defender.name} health = ${defender.health}`);
    }

    isDead() {
        return this.health <= 0;
    }
}

module.exports = Player;
