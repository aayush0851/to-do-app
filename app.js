//this is gonna be the express file for the app
//this is an express app

//requiring express

var express = require('express');

//requiring todoController in the main file
var todoController = require('./controllers/todoController');

//since express is a function it has to be stored in a variable for multiple uses

var app = express();

//setting app for ejs purpose

app.set('view engine', 'ejs');

// setting app for the use of middleware

app.use(express.static('./public'));

//firing the todoController in the main file and passing the app paramenter enable the function to be executed in the controller
todoController(app);

// listen to port to get the output

app.listen(3000);

//consoling an output to see if the app is working
console.log("you are listening to the port 3000");