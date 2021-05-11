// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generate = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
      },
      {
        type: 'input',
        name: 'title',
        message: "What is your project's title?",
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your project:',
      },
      {
        type: 'input',
        name: 'license',
        message: 'What kind of license should your project have? MIT!!',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What command should be run to install dependencies? (npm i)',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'What command should be run to run tests? (npm test)',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'What does the user need to know about using the repo?',
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'What does the user need to know about contributing to the repo?',
      },

];

function promptUser() {

  inquirer.prompt(questions)
  .then((answers) => {

      readme = generate(answers);
      writeToFile('README.md', readme);

  })
  .catch((err) => {
      console.log(err);
  });
}

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFileSync(`./${fileName}`, data)
}

// function to initialize program
function init() {
  promptUser()
}

// function call to initialize program
init();
