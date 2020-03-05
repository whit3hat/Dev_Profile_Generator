//Requried modules to run the application
const inquirer = require('inquirer');
const axios = require('axios');
const fs = require('fs');
const pdf = require('html-pdf');

const generateHTML = require('./generateHTML');


//const writeToFile = util.promisify(fs.writeFile);




//Function to ask users questions for the PDF

async function gitRequest() {
    //Variable object to hold the responses to call in the writeToFile function
    let gitResponse = {gitUrl: '', name: '', location: '', stars: '', blog: '',
    repos: '', followers: '', following: '', image: '', color: ''};

    return new Promise(async (resolve, reject) => {
        try { //asking Github username
            const { github } = await inquirer.prompt({
                message: 'What is your Github username?',
                name: 'github'
            })
                //asking color for the pdf
            const { color } = await inquirer.prompt({
                message: 'What is your favorite color? (Red, Blue, Green or Pink)',
                name: 'color'

             });
            //         //call to the github api with the username
           axios.get(
               `https://api.github.com/users/${github}`
            )
            .then((response) => { //Variables created from gitHub call 
                        gitResponse.gitUrl = response.data.url,
                        gitResponse.name = response.data.name,
                        gitResponse.bio = response.data.bio,
                        gitResponse.location = response.data.location,
                        gitResponse.stars = response.data.starred_url.length,
                        gitResponse.blog = response.data.blog,
                        gitResponse.repos = response.data.public_repos,
                        gitResponse.followers = response.data.followers,
                        gitResponse.following = response.data.following,
                        gitResponse.image = response.data.avatar_url,
                        gitResponse.company = response.data.company,
                        gitResponse.color = color;

                        
                        resolve(gitResponse);
                        console.log(gitResponse);
            }); 
            } catch (err) {
                console.log(err);
            }
        });
}




//Function to write the html from the github variables
function writeToFile(fileName, html) {
    console.log("inside writeToFile")
    
//writes the html file then passes to the init() funciton
    fs.writeFileSync( fileName , html ,function (err) { 
        if (err) throw err;
        console.log('wrote html file');
    })

// pdf convert from html

// const options = {
//     format: 'Letter',
// };
//     pdf.create(html, options).toFile(`./${gitResponse.name}.pdf`, (err) => {
//         if (err) return console.log(err);
//         console.log('PDF Created!');
//     });
};


function init() {
    console.log('hi')
    // try {

        console.log("second hi")
        gitRequest()
        .then((result) => {
            
            html= generateHTML.generateHTML(result);


            writeToFile('index.html', html);
        },
         reason => {
            console.log(reason);
        });
    }
init();

// gitRequest()

