const readline = require('readline');
const Player = require('./Player');
const Arena = require('./Arena');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const askQuestion = (query) => {
    return new Promise(resolve => rl.question(query, resolve));
};

const createPlayer = async (name) => {
    const health = parseInt(await askQuestion(`Enter health for ${name}: `));
    const strength = parseInt(await askQuestion(`Enter strength for ${name}: `));
    const attack = parseInt(await askQuestion(`Enter attack for ${name}: `));

    return new Player(name, health, strength, attack);
};

const startGame = async () => {
    console.log("Welcome to the Magical Arena!");

    const playerA = await createPlayer('Player A');
    const playerB = await createPlayer('Player B');

    const arena = new Arena(playerA, playerB);
    arena.startMatch();

    rl.close();
};

module.exports = {
    createPlayer,
    startGame
};

startGame();

