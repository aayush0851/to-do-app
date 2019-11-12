//this will export modules into the main file that is app.js


//this function takes app as a parameter so that it can use all the function of express that are defined into the app variable in the main file 
module.exports = function(app){

    //now since the app parameter is passed now all the app methods like get put post delete can be hereby used by the handlers that are listed below

    //this handler will show us the page when asked for
    app.get('/todo', function(req, res){
        res.render('todo');
    });

    //this handler will help us to post stuff like the todo items on the server
    app.post('/todo', function(req, res){


    });

    //this handler will delete a todo item from the list
    app.delete('/todo', function(req, res){


    });


};