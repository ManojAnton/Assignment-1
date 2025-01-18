/*********************************************************************************
*  WEB700 – Assignment 1
*  I declare that this assignment is my own work in accordance with Seneca Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Manoj Anton Manorathan Student ID: 146165238 Date:18|01|2025
********************************************************************************/

// Step 1: Define routes
const serverVerbs = ["GET", "GET", "GET", "POST", "GET", "POST"];
const serverPaths = ["/", "/about", "/contact", "/login", "/panel", "/logout"];
const serverResponses = [
    "Welcome to WEB700 Assignment 1",
    "This assignment was prepared by Manoj Anton Manorathan",
    "Student Name: Manoj Anton Manorathan Student Email: manton-manorathan@myseneca.ca",
    "User Logged In",
    "Main Panel",
    "Logout Complete"
];

// Step 2: Create the httpRequest function
function httpRequest(httpVerb, path) {
    for (let i = 0; i < serverPaths.length; i++) {
        if (serverVerbs[i] === httpVerb && serverPaths[i] === path) {
            return `200: ${serverResponses[i]}`;
        }
    }
    return `404: Unable to process ${httpVerb} request for ${path}`;
}

// Step 3: Manually test the httpRequest function
console.log(httpRequest("GET", "/")); 
console.log(httpRequest("GET", "/about")); 
console.log(httpRequest("POST", "/login")); 
console.log(httpRequest("GET", "/randomPath")); 

// Step 4: Create getRandomInt utility function
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// Step 5: Create the automateTests function
function automateTests() {
    const testVerbs = ["GET", "POST"];
    const testPaths = ["/", "/about", "/contact", "/login", "/panel", "/logout", "/randomPath1", "/randomPath2"];

    function randomRequest() {
        const randVerb = testVerbs[getRandomInt(testVerbs.length)];
        const randPath = testPaths[getRandomInt(testPaths.length)];
        console.log(httpRequest(randVerb, randPath));
    }

    setInterval(randomRequest, 1000); 
}

// Step 6: Start automated testing
automateTests();
