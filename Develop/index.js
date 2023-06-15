// TODO: Include packages needed for this application

//inquirer variable
const inquirer = require("inquirer");

// markdown js file here
const generateMarkdown = require("./utils/generateMarkdown");


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the Title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the Description of the repository?',
    },
    {
        type: 'input',
        name: 'table of contents',
        message: 'Any Table of Contents for this repository?',
    },
    {
        type: 'input',
        name: 'usage', 
        message: 'What is the Usage?',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What is it Contributing?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What Tests?',
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Any Questions?',
    },
    {
        type: 'input',
        name: 'license',
        choices: ["MIT", "GPLv3","GPL"],
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log("Creating READMe....");
    // TODO add fs code here to save file
    fs.writeFile(fileName,data);
    console.log ("READMe is Ready to Preview.");
};
  

// TODO: Create a function to initialize app
function init() {
    inquirer.createPromptModule(questions).then(function(answers){
        const markdownText = generateMarkdown(answer);
        writeToFile('ReadMe.md', markdownText);
    });
}

// Function call to initialize app
init();
