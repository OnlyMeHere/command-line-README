// TODO: Include packages needed for this application

const fs = require('fs');
const inquirer = require('inquirer');
// const module.exports = require('module.exports');
const generateMarkdown = require('./utils/generateMarkdown');
const README = ""
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
            choices: ['No License', 'MIT License','Apache 2.0 License','BSD License'],
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
        // TODO: Create a function to write README file
       
        fs.writeFile('README.md', generateMarkdown(answers),
        function (err) {
            if (err) {
                console.log(`error; ${err}`);
                return;
            }
            console.log("file written");
        });
    });


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
