const fs = require("fs");
const readline = require("readline");
const greetings = require("./greeting");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What is your name?", (name) => {
  const greeting = greetings.generateGreeting(name);
  fs.appendFile("output.txt", greeting, (err) => {
    if (err) {
      console.error("Error writing to file:", err);
    } else {
      console.log("Greeting saved to output.txt");
    }
    rl.close();
  });
});
