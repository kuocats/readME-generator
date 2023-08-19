// TODO: Include packages needed for this application
const fs = require("fs");

//inquirer variable
const inquirer = require("inquirer");

// markdown js file here
const generateMarkdown = require("./Develop/utils/generateMarkdown");


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
        message: 'What does the application include?'
    },
    {
        type: 'input',
        name: 'usage', 
        message: 'Where can users download this?'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What do users contribue to this project?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How do you test this application?'
    },
    {
        type: 'input',
        name: 'questions',
        message: 'How do you troubleshoot this application?'
    },
    {
        type: 'input',
        name: 'license',
        message: 'What type of license does this project have?',
        choices: ["MIT"],
    },
    {
        name: 'username',
        message: 'What is your GitHub username?',
        type: 'input',
    },
    {
        name: 'email',
        message: 'What is your email?',
        type: 'input',
    }, {
        name: 'fileName',
        message: 'What would you like to name this file?',
        type: 'input',
        // validate: requires user to input text/file name before building README
        validate: (answer) => {
            if (answer === "") {
                return console.log("\n Try again");
            }
            return true;
        }
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.appendFile(`${fileName}.md`, generateMarkdown(data), (err) =>
        err ? console.log(err) : console.log(`${fileName}.md has been generated.`)
        )};

  

// TODO: Create a function to initialize app
function init() {
    inquirer 
    .prompt(questions)
    .then((response) => {
        writeToFile(response.fileName, response);
    })
    .catch(err => {
        console.log(err)
    });
}

// Function call to initialize app
init();
