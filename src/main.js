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

const getValidatedInput = async (query, validator) => {
    let input;
    do {
        input = parseInt(await askQuestion(query));
        if (!validator(input)) {
            console.log("Invalid Input");
        }
    } while (!validator(input));
    return input;
};

const createPlayer = async (name) => {
    const health = await getValidatedInput(`Enter health for ${name}: `, (value) => value > 0);
    const strength = await getValidatedInput(`Enter strength for ${name}: `, (value) => value > 0);
    const attack = await getValidatedInput(`Enter attack for ${name}: `, (value) => value > 0);

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
