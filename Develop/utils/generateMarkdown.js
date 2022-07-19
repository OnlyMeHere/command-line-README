module.exports = generateMarkdown;


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {

    if (answers.license == 'MIT License') {
        license = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://mit-license.org)";
    }
    else if (answers.license == 'Apache License') {
        license = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://apache.org/licenses/LICENSE-2.0)";
    }
    else if (answers.license == 'BSD License') {
        license = "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
    }
    else if (answers.license == 'No License') {
        license = "";
    }
        return console.log(answers.license);
    

}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
 function renderLicenseLink(license) {

    
}

// TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {


// }

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {

    return ` \t
     # ${answers.title}
    
     ## Description:
    
     ${answers.desciption}
    
     ## Table of Contents:
    
     [Installation](## Installation)
     [Usage](## Usage)
     [license](## License)
     [Contributibution](## Contribution)
     [Tests](## Tests)
     [Questions](## Questions)

     ## Instalation:

     ${answers.installation}

     ## Usage:

     ${answers.usage}

     ## License:

     ${answers.license}

     ## Contribution guildlines:

     ${answers.contribution}

     ## Test instructions:

     ${answers.testInst}

     ## Questions:

     ${answers.gitHubLink}

     ${answers.emailAdd}`

    
};




