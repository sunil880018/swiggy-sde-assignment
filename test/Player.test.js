const Player = require('../src/Player');

test('Player initializes correctly', () => {
    const player = new Player('Test Player', 50, 5, 10);
    expect(player.name).toBe('Test Player');
    expect(player.health).toBe(50);
    expect(player.strength).toBe(5);
    expect(player.attack).toBe(10);
});

test('Player takes damage correctly', () => {
    const attacker = new Player('Attacker', 50, 5, 10);
    const defender = new Player('Defender', 50, 5, 10);

    attacker.performAttack(defender);
    expect(defender.health).toBeLessThan(50);
});

test('Player dies correctly', () => {
    const player = new Player('Test Player', 0, 5, 10);
    expect(player.isDead()).toBe(true);
});
