const Player = require('./Player');

class Arena {
    constructor(playerA, playerB) {
        this.playerA = playerA;
        this.playerB = playerB;
    }

    startMatch() {
        while (!this.playerA.isDead() && !this.playerB.isDead()) {
            if (this.playerA.health < this.playerB.health) {
                this.playerA.performAttack(this.playerB);
                if (!this.playerB.isDead()) {
                    this.playerB.performAttack(this.playerA);
                }
            } else {
                this.playerB.performAttack(this.playerA);
                if (!this.playerA.isDead()) {
                    this.playerA.performAttack(this.playerB);
                }
            }
        }

        const winner = this.playerA.isDead() ? this.playerB : this.playerA;
        console.log(`${winner.name} wins the match!`);
    }
}

module.exports = Arena;
