//Requried modules to run the application
const inquirer = require('inquirer');
const axios = require('axios');
const fs = require('fs');

//const writeToFile = util.promisify(fs.writeFile);



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
        axios.get(
            `https://api.github.com/users/${github}`
        )
        .then(
            function(response){
                gitUrl = response.data.url;
                name = response.data.name;
                location = response.data.location;
                stars = response.starred_url.length;
                blog = response.data.blog;
                repos = response.data.public_repos;
                followers = response.data.followers;
                following = response.data.following;
                image = response.data.avatar_url;
                console.log(response);
            }

        ); 
        } catch (err) {
            console.log(err);
        }


}
// function writeToFile(fileName, data) {

    //fs.writefile

    //pdf convert from html
    
// }

// function init() {
//     console.log('hi')
//     try {
//         const answers = await gitRequest();

//         const html = generateHTML(answers);

//         await writeToFile('index.html', html);

//         console.log('wrote the index.hml');
//     } catch (err){
//         console.log(err);
//     }
// }
// init();
gitRequest();