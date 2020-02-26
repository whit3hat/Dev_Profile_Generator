//Requried modules to run the application
const inquirer = require('inquirer');
const axios = require('axios');
const fs = require('fs');
// const pdf = require('html-pdf');

//const writeToFile = util.promisify(fs.writeFile);



//Function to ask users questions for the PDF
 function gitRequest() {
     inquirer.prompt([
         {
             type: 'input',
             name: 'github',
             message: 'What is your Github username?',
         },
         {
            type: 'checkbox',
            message: 'Choose a color:',
            choices: [
                'blue',
                'green',
                'red',
                'pink',
                     ],
         },
     ]).then((data) => {
        gitResponse.color = data.color;
        gitResponse.github = data.github;
            //call to the github api with the username
        axios
        .get(`https://api.github.com/users/${github}`)
        .catch(err => {
            console.log(`User not found`);
            process.exit(1);
        })
        .then( //Variables created from gitHub call
            function(response){
               gitResponse.gitUrl = response.data.url;
               gitResponse.name = response.data.name;
               gitResponse.location = response.data.location;
               gitResponse.stars = response.starred_url.length;
               gitResponse.blog = response.data.blog;
               gitReponse.repos = response.data.public_repos;
               gitResponse.followers = response.data.followers;
               gitResponse.following = response.data.following;
               gitResponse.image = response.data.avatar_url;
            }
        ); 
        
});

//Variable object to hold the responses to call in the writeToFile function
const gitResponse = {gitUrl: '', name: '', location: '', stars: '', blog: '',
 repos: '', followers: '', following: '', image: ''};

//Function to write the html from the github variables
function writeToFile(fileName, html) {
    
    
//writes the html file then passes to the init() funciton
    fs.writefile( fileName , html , (err) => { 
        if (err) { 
        return console.log(err);
    }
    });
    
    // pdf convert from html
    
};


// function init() {
//     console.log('hi')
//     // try {
//         const github = gitRequest();

function init() {
    console.log('hi')
    try {

        const gitReponse = await gitRequest();


//         const html = generateHTML(gitResponse);

        await writeToFile(fileName, html);

        const answers = await gitRequest();

        const html = generateHTML(answers);

        await writeToFile('index.html', html);

        console.log('wrote the index.hml');
    } catch (err){
        console.log(err);
    }
}
init();
gitRequest();

