//required tools for application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const axios = require('axios');


const writeFileAsync = util.promisify(fs.writeFile);

const config = { headers: { accept: 'application/json' } };

//prompt user to get info from user
function promptUser(){
    return inquirer.prompt([
        {
            type:'input',
            name: 'github',
            message: 'What is your GitHub Username?'
        },
        {
            type: 'input',
            name: 'color',
            message: 'What is your favorite color'
        },
    ]);
}

axios
    .get('https://api.github.com' , config);
    .then(function(response){
        const { github } =response.data;
        console.log(github);
    })


const questions = [
    
  
]

function writeToFile(fileName, data) {
 
}

//function to run and get user info and then create file
function init() {
    console.log('hi')
    try {
        const answers = await promptUser();

        const pdfl;

        await writeFile(fileName , data);
        console.log('Successfully wrote PDF');
    } catch(err){
        console.log(err);
    }
}
init();
