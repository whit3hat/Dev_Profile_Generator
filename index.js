//required tools for application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const axios = require('axios');


const writeFileAsync = util.promisify(fs.writeFile);

const config = { headers: { accept: 'application/json' } };

axios
    .get('https://api.github.com' , config);
    .then(function(response){
        const { github } =response.data;
        console.log(github);
    })

const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub Username?'
    },
    {
        type: 'input',
        name: 'color',
        message: 'What is your favoriate color?'
    }
  
];

function writeToFile(fileName, data) {
 
}

function init() {

init();
