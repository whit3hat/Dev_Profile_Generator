const inquirer = require('inquirer');
const axios = require('axios');

gitRequest();

async function gitRequest() {
    try {
        const { github } = await inquirer.prompt({
            message: 'What is your Github username?',
            name: 'github'
        });
              
        const { color } = await inquirer.prompt({
            message: 'What is your favorite color? (Red, Blue, Green or Pink)',
            name: 'color'
        });

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
