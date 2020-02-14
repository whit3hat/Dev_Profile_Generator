const inquirer = require('inquirer');
const axios = require('axios');

// let output = [];
// console.log(output.keys(0));

// const questions = [
//   {
//       name: 'color',
//       type: 'input',
//       message: 'What is your favorite color? (Red, Blue, Green or Pink)'
//   },
//   {
//       name: 'github',
//       type: 'input',
//       message: ' What is your Github username?'
//   },
// ];

// function ask(){
//     inquirer.prompt(questions).then(answers => {
//         output.push(answers);
        
//         gitRequest();
//     })
// };
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
                `https://api.github.com/user/${github}`
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
