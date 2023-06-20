// TODO: Include packages needed for this application
const fs = require("fs");

//inquirer variable
const inquirer = require("inquirer");

// markdown js file here
const generateMarkdown = require("./utils/generateMarkdown");


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of this project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe this project:'
    },
    {
        type: 'input',
        name: 'table of contents',
        message: 'What is contents of this project?'
    },
    {
        type: 'input',
        name: 'usage', 
        message: 'How can users download this?'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Where is it contributing?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Will there be a test included?'
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Any trouleshooting issues?'
    },
    {
        type: 'input',
        name: 'license',
        message: 'What type of license does this project have?',
        choices: ["MIT", "GPLv3","GPL"],
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log("Creating READMe....");
    fs.writeFileSync(fileName, data);
    console.log ("READMe is Ready to Preview.");
}
  

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(answer => {
        const markdownText = generateMarkdown(answers);
        writeToFile("ReadMe.md", markdownText);
    });
}

// Function call to initialize app
init();
