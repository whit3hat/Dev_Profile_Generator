const inquirer = require('inquirer');
const axios = require('axios');

let output = [];

const questions = [
  {
      name: 'color',
      type: 'input',
      message: 'What is your favorite color? (Red, Blue, Green or Pink)'
  },
  {
      name: 'github',
      type: 'input',
      message: ' What is your Github username?'
  },
];

function ask(){
    inquirer.prompt(questions).then(answers => {
        output.push(answers);
        console.log(output);
        gitRequest();
    })
};

 async function gitRequest() {
            let res = await axios.get('https://api.github.com');
            const data = res.data;
            console.log(data);
    };

ask();

// function writeToFile(fileName, data) {
 
// }

// function init() {

// init();
