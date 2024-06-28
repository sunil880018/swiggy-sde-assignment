# Magical Arena

## Description
A simple simulation of a magical arena where two players fight in turns until one of them dies. The player with lower health attacks first at the start of a match.

## How to Run

1. Clone the repository.
2. Navigate to the project directory.
3. Install dependencies (Jest for testing):
    ```
    npm install
    ```
4. Run the simulation:
    ```
    node src/main.js
    ```
5. Run the tests:
    ```
    npm test
    ```

## Code Structure

- `src/Player.js`: Defines the Player class.
- `src/Arena.js`: Defines the Arena class where the match takes place.
- `src/main.js`: Main script to run the simulation.
- `test/Player.test.js`: Unit tests for the Player class.
- `test/Arena.test.js`: Unit tests for the Arena class.

## Notes
- The simulation uses a 6-sided die for both attacking and defending rolls.
- Players attack in turns until one of them dies.
- The player with lower health attacks first.
