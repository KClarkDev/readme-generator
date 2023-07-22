// Import packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
// Title, Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
const questions = [
  {
    type: "input",
    name: "projectTitle",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "projectDescription",
    message:
      "Provide a short description explaining the what, why, and how of your project. Some details you could include are the motivation for the project, what problem it solves, and what you learned.",
  },
  {
    type: "input",
    name: "installation",
    message:
      "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
  },
  {
    type: "input",
    name: "usage",
    message: "Provide instructions and examples for use.",
  },
  {
    type: "list",
    name: "license",
    message:
      "Which type of Open Source License to you want to add to your project?",
    choices: [
      "Apache License 2.0",
      "MIT License",
      "BSD License",
      "GNU GPLv3 License",
    ],
  },
  {
    type: "input",
    name: "contributing",
    message:
      "If you would like other developers to contribute to your application or package, include guidelines for how to do so.",
  },
  {
    type: "input",
    name: "tests",
    message:
      "If you wrote tests for your application, provide examples and explain how to run them.",
  },
  {
    type: "input",
    name: "github",
    message: "What is your Github username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email?",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, markdown, (err) =>
    err ? console.log(err) : console.log("Successfully created README file!")
  );
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
