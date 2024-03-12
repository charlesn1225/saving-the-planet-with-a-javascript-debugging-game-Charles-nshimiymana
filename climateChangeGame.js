// Import the prompt-sync module to enable reading input from the console.
const prompt = require("prompt-sync")();

console.log('Welcome to the Climate Change Awareness Game!');

// Initialize the score variable to keep track of the player's score throughout the game.
let score = 0;

// Define a function to present decision-making scenarios to the player.
function decisionScenario(question, options, correctAnswerIndex) {
    console.log(question);

    // Corrected loop to iterate over all options and display them to the player.
    for (let i = 0; i < options.length; i++) {
        console.log(`${i + 1}. ${options[i]}`);
    }

    // Ask the player for their choice, convert the input into an integer, and adjust for zero-based index.
    let playerAnswer = parseInt(prompt("Enter your choice (number): ")) - 1;

    // Check if the player's choice matches the correct answer.
    if (playerAnswer === correctAnswerIndex) {
        console.log('Correct! You made an environment-friendly decision. +1 point.');
        score++; // Increment score for correct answer.
    } else {
        // Inform the player about the correct choice when their answer is incorrect.
        console.log(`Incorrect! The better choice would be: ${options[correctAnswerIndex]}`);
    }
}

// Define scenarios for the game, specifying the question, options, and the index of the correct answer.
decisionScenario(
    'You are going to the supermarket. How do you choose to carry your groceries?',
    ['Plastic bags provided by the store', 'Bring your own reusable bags', 'Carry them without any bag'],
    1
);

decisionScenario(
    '\nYou are buying a new car. Which type do you choose?',
    ['A gasoline-powered car', 'A hybrid car', 'An electric car'],
    2
);

decisionScenario(
    '\nYou want to dispose of old electronics. What do you do?',
    ['Throw them in the regular trash', 'Sell or donate them', 'Take them to an e-waste recycling center'],
    2
);

// Removed the duplicate scenario about disposing of old electronics.

decisionScenario(
    '\nHow do you prefer to eat your meals?',
    ['Takeout from restaurants in disposable containers', 'Cooked at home with locally sourced ingredients', 'Processed and packaged meals', 'Home cooked meals with ingredients from your own garden'],
    3 // Correct answer index updated to reflect the most sustainable option.
);

// Display the player's total score at the end of the game.
console.log(`\nGame Over! Your total score is: ${score}. Thank you for playing.\n`);
