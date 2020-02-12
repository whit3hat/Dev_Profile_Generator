//required tools for application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const axios = require('axios');


const writeFileAsync = util.promisify(fs.writeFile);

// const config = { headers: { accept: 'application/json' } };

//prompt user to get info from user
function promptUser(answers){
    console.log(answers);
}
//Questions to ask user and pass to answers       
var questions = [
    {
        message: 'What is your Github Username?',
        type: 'input',
        name: 'github'
    },
    {
        message: 'What is your favorite color?',
        type: 'checkbox',
        name: 'color',
        choices: ['Red', 'Blue', 'Green', 'Pink']
    }
]

    
//pass questions into prompt
inquirer.prompt(questions, promptUser);

// //API Call to GitHub
// axios
//     .get('https://api.github.com')
//     .then(function(response) {
//         const { github } = response.data;
//         console.log(github);

//     })
//     .catch( function(err) { 
//         console.log(err);
//     });


// Info we want from github
//     Profile image
//     * User name
//     * Links to the following:
//       * User location via Google Maps
//       * User GitHub profile
//       * User blog
//     * User bio
//     * Number of public repositories
//     * Number of followers
//     * Number of GitHub stars
//     * Number of users following
// function writeToFile(fileName, data) {

// }

//function to run and get user info and then create file
// function init() {
//     console.log('hi')
//     try {
//         const answers = await promptUser();
//         const html = generateHTML(answers);
//         const pdf;

//         await writeFileAsync(fileName , data);
//         console.log('Successfully wrote PDF');
//     } catch(err){
//         console.log(err);
//     }
// }
// init();

// promptUser()
//     .then(function(data){
//         const html = generateHTML(data);

//         return writeFileAsync(fileName, data);
//     })
//     .then(function(){
//         console.log('Successfully wrote PDF');
//     })
//     .catch(function(err){
//         console.log(err);
//     });