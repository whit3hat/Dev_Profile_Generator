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
        .then( //Variables created from gitHub call
            function(response){
               gitResponse.gitUrl = response.data.url;
               gitResponse.name = response.data.name;
               gitResponse.bio = response.data.bio;
               gitResponse.company = response.data.company;
               gitResponse.location = response.data.location;
               gitResponse.stars = response.starred_url.length;
               gitResponse.blog = response.data.blog;
               gitReponse.repos = response.data.public_repos;
               gitResponse.followers = response.data.followers;
               gitResponse.following = response.data.following;
               gitResponse.image = response.data.avatar_url;
            }
        ); 
        } catch (err) {
            console.log(err);
        }
}

//Variable object to hold the responses to call in the writeToFile function
const gitResponse = {gitUrl: '', name: '', location: '', stars: '', blog: '',
 repos: '', followers: '', following: '', image: '', bio: '', company: ''};

//Function to write the html from the github variables
function writeToFile(fileName, html) {
    
    
//writes the html file then passes to the init() funciton
    fs.writefile( fileName , html , (err) => { 
        if (err) { 
        return console.log(err);
    }
    });

    // pdf convert from html
    
}

function init() {
    console.log('hi')
    try {
        const github = gitRequest();

        const html = generateHTML(gitResponse);

        writeToFile(fileName, html);

        console.log('wrote the index.hml');
    } catch (err){
        console.log(err);
    }
}
init();
//gitRequest();