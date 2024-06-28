const Player = require('../src/Player');
const Arena = require('../src/Arena');

test('Arena initializes correctly', () => {
    const playerA = new Player('Player A', 50, 5, 10);
    const playerB = new Player('Player B', 100, 10, 5);
    const arena = new Arena(playerA, playerB);

    expect(arena.playerA).toBe(playerA);
    expect(arena.playerB).toBe(playerB);
});

test('Arena match runs and declares a winner', () => {
    const playerA = new Player('Player A', 50, 5, 10);
    const playerB = new Player('Player B', 100, 10, 5);
    const arena = new Arena(playerA, playerB);

    arena.startMatch();
    const winner = playerA.isDead() ? playerB : playerA;
    expect(winner.health).toBeGreaterThan(0);
});
