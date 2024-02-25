const fs = require('fs');
const inquirer = require('inquirer');
const generateSvg = require('./generat svg');

// Array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'text',
    message: 'Enter svg text:',
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Enter svg text color :',
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Enter svg shape color :',
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Choose a shape:',
    choices: ["cirle","triangle","square"],
  },
  
];

// Function to write README file
function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, data);
}

// Function to initialize application
function init() {
  inquirer.prompt(questions).then((answers) => {
    const svg = generateSvg(answers);
    writeToFile('shape.svg', svg);
    console.log('shape svg generated successfully!');
  });
}

// Function call to initialize application
init();
