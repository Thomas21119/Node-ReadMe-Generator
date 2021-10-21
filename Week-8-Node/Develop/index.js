// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')

const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is your Project Title?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe your Project'
    },
    {
        type: 'input',
        name: 'installationInstructions',
        message: 'What are your Installation Instructions?'
    },
    {
        type: 'input',
        name: 'usageInformation',
        message: 'What is your Projects Usage Information?'
    },
    {
        type: 'input',
        name: 'contributionGuidelines',
        message: 'What is your Projects Contribution Guidelines?'
    },
    {
        type: 'input',
        name: 'testInstructions',
        message: 'What is your Projects Test Instructions?'
    },
    {
        type: 'input',
        name: 'githubUser',
        message: 'Please Enter Your Github Username'
    },    {
        type: 'input',
        name: 'emailAddress',
        message: 'What is your Email Address?'
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
            'GNU General Public License v2.0',
            'GNU Lesser General Public License v2.1',
            'Mozilla Public License 2.0',
            'The Unlicense',
        ]
    }
]).then((data) => {
    let markdown = generateMarkdown(data)
    writeToFile(markdown, 'sample.md')
})
function writeToFile(markdown, fileName) {
    fs.writeFile(fileName, markdown, (err) =>
    err ? console.log(err) : console.log('Successfully created sample.md!')
  );
}

// TODO: Create a function to initialize app
function init() {
    questions
}

// Function call to initialize app
init();
