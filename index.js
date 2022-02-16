// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const Choices = require("inquirer/lib/objects/choices");
const generateMarkdown = require("./README-generator/generateMarkdown");
const markdown = require("./README-generator/generateMarkdown");
const fs = require ("fs")
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "Enter your project title",
  },
  {
    type: "input",
    name: "description",
    message: "Enter a description of your project",
  },
  {
    type: "input",
    name: "installation",
    message: "What steps are required to install your project?",
  },
  {
    type: "input",
    name: "installation",
    message: "What are the instructions on how to install project?",
  },
  {
    type: "list",
    name: "license",
    message: "choose your license",
    choices: ["MIT", "Apache", "GPL", "Mozilla", "None"],
  },
  {
    type: "input",
    name: "contribute",
    message: "who collaborated on this project?",
  },
  {
    type: "input",
    name: "tests",
    message: "enter examples of how to run tests",
  },
  {
    type: "input",
    name: "github",
    message: "enter github username",
  },
  {
    type: "input",
    name: "email",
    message: "enter your email",
  },
];

// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("README succesfuuly made")
  );
};

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    var documentData = generateMarkdown(data);
    writeToFile("README.md", documentData);
  });
};

// Function call to initialize app
init();
