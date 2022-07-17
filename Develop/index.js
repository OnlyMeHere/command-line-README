// TODO: Include packages needed for this application

const fs = require("fs");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
// Those questions are: Title / Description / Table of Contents / Instalation
// -------------------  Usage / License / Contributing / Tests / Questions

inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your App?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Describe your App',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Describe the installation process',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Describe how your App is used',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Choose a License',
            choices: ['MIT License','Apache License','BSD License','GPL License'],
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Contributions guildlines?',
        },
        {
            type: 'input',
            name: 'testInst',
            message: 'Instructions for testing this App',
        },
        {
            type: 'input',
            name: 'gitHubLink',
            message: 'Enter link to your GitHub',
        },
        {
            type: 'input',
            name: 'emailAdd',
            message: 'Enter your e-mail address',
        },
    ])
    .then((answers) => {
        console.log(answers);
        fs.writeFile('readMe.md', JSON.stringify (answers, null, '\t'), function (err) {
            if (err) {
                console.log(`ERROR: ${err}`);
                return;
            }
            console.log("File written");
        });
        
    });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
