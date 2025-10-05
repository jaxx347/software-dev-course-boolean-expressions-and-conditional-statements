/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

const readline = require('readline-sync');

const hasTorch = true;
const hasMap = false;
var hasSword = false

console.log("You see two paths: one leads to the mountains, the other to the village.");
const choice = readline.question("Do you go to the 'mountains' or the 'village'?");

if (choice === "mountains" && hasTorch) {
  console.log("You safely navigate through the dark mountains.");
  mountChoice = readline.question("Your path through the mountain comes to an abandoned camp next to a cave, do you 'search' the camp, enter the 'cave' or go 'back'?")
    if (mountChoice === "back") {
      console.log("You make your way back to the village.");
    
    } else if (mountChoice === "search") {
      hasSword = true
      console.log("You search the camp and find a sword!");
    }
      else if (mountChoice === "cave" && hasTorch) {
      console.log("You navigate through the cave with your torch and find a sleeping dragon.");
    }
  
} else if (choice === "mountains" && !hasTorch) {
  console.log("It's too dark to proceed. You decide to turn back.");
} else if (choice === "village" || hasMap) {
  console.log("You find your way to the village.");
  villageChoice = readline.question("You enter the village and see a tavern and blacksmith, do you go to the 'tavern' or go to the 'blacksmith'?")
  if (villageChoice === "tavern") {
    console.log("You enter the tavern, there is a lone tavern keeper polishing a tankard.")
  }
  else if (villageChoice === "blacksmith") {
    console.log("You approach the blacksmith, he is working a piece of iron on an anvil.");
  }
} else {
  console.log("You get lost and wander aimlessly.");
}

/* 

Add Customization and expand the game:
  - Add more choices and scenarios.
  - Include additional items (e.g., a sword, a compass).
  - Use nested conditionals and logical operators to create complex outcomes.

*/