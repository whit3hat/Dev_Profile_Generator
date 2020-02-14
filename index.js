//Requried modules to run the application
const inquirer = require('inquirer');
const axios = require('axios');



gitRequest();
//Function to ask users questions for the PDF
async function gitRequest() {
    try { //asking Github username
        const { github } = await inquirer.prompt({
            message: 'What is your Github username?',
            name: 'github'
        });
              //asking color for the pdf
        const { color } = await inquirer.prompt({
            message: 'What is your favorite color? (Red, Blue, Green or Pink)',
            name: 'color'
        });
                //call to the github api with the username
        const { data } = await axios.get(
            `https://api.github.com/users/${github}`
        );

            console.log(data);
            
                   

        } catch (err) {
            console.log(err);
        }


}
// function writeToFile(fileName, data) {
 
// }

// function init() {

// init();
