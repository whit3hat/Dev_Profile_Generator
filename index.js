//Requried modules to run the application
const inquirer = require('inquirer');
const axios = require('axios');
const fs = require('fs');
const generateHTML = require('./generateHTML');

//const writeToFile = util.promisify(fs.writeFile);
//Variable object to hold the responses to call in the writeToFile function
// let gitResponse = {gitUrl: '', name: '', location: '', stars: '', blog: '',
//  repos: '', followers: '', following: '', image: ''};


//Function to ask users questions for the PDF
async function gitRequest() {
    return new Promise(async (resolve, reject) => {
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
            //         //call to the github api with the username
            axios.get(
                `https://api.github.com/users/${github}`
            )
            .then( //Variables created from gitHub call
                (response) => {
                    resolve({
                        gitUrl: response.data.url,
                        name: response.data.name,
                        location: response.data.location,
                        stars: response.data.starred_url.length,
                        blog: response.data.blog,
                        repos: response.data.public_repos,
                        followers: response.data.followers,
                        following: response.data.following,
                        image: response.data.avatar_url
                    })
                } 
            ); console.log('color: ',color);
            } catch (err) {
                console.log(err);
            }
        });
}



//Function to write the html from the github variables
function writeToFile(fileName, html) {
    
    //HTML info to pass to fs.write function
    
    
    
//writes the html file then passes to the init() funciton
    fs.writeFileSync( fileName , html ,function (err) { 
        if (err) throw err;
        console.log('wrote html file');
    }

    )

    // pdf convert from html
    
}

function init() {
    console.log('hi')
    try {
        let answers;
        let html;
        gitRequest()
        .then(async (result) => {
            answers = result;
            console.log(answers)
            html= generateHTML.generateHTML(answers, color);

            writeToFile('index.html', html);
        })
        .catch(err => {
            console.log(err);
        });

        
    } catch (err){
        console.log(err);
    }
}
init();
// gitRequest()