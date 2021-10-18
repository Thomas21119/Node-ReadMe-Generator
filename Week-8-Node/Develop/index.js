// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')
// TODO: Create an array of questions for user input
    inquirer.prompt([
        {
            type: 'input',
            name: 'ProjectTitle',
            message: 'What is your Project Title?'
        },
        {
            type: 'input',
            name: 'Description',
            message: 'Describe your Project'
        },
        {
            type: 'input',
            name: 'InstallationInstructions',
            message: 'What are your Installation Instructions?'
        },
        {
            type: 'input',
            name: 'UsageInformation',
            message: 'What is your Projects Usage Information?'
        },
        {
            type: 'input',
            name: 'ContributionGuidelines',
            message: 'What is your Projects Contribution Guidelines?'
        },
        {
            type: 'input',
            name: 'TestInstructions',
            message: 'What is your Projects Test Instructions?'
        },
        {
            type: 'list',
            name: 'license',
            message: 'Choose the Licence used for this Project',
            choices: [
                'Apache License 2.0',
                'GNU General Public License v3.0',
                'MIT License',
                'BSD 2-Clause "Simplified" License',
                'BSD 3-Clause "New" or "Revised" License',
                'Boost Software License 1.0',
                'Creative Commons Zero v1.0 Universal',
                'Eclipse Public License 2.0',
                'GNU Affero General Public License v3.0',
                'GNU General Public License v2.0',
                'GNU Lesser General Public License v2.1',
                'Mozilla Public License 2.0',
                'The Unlicense',
            ]
        }
    ]).then((data) => {
       writeToFile(data)
    })

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log(data)
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
