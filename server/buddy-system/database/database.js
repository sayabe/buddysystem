/* var mongo = require('mongo');

var controller = {};

var myFunction = function() {

}
function myOtherFunction() {

}

controller.addTask = function(taskNome, startTime, endTime, reward) {
    console.log(taskNome);
    myFunction();
    myOtherFunction();
};

module.exports = controller;
*/

var database = {};
var mongoose = require('mongoose');
//Mongodb interface to connect to a Mongodb
//var MongoClient = mongodb.MongoClient;


//TODO: Check this URL
//Connection URL. This is where mongodb server is running
database.establishConnection = function() {
    var url = 'mongodb://localhost:27017/buddy_system';
    mongoose.connect(url, function(err) {
        if (err) throw err;
        else console.log('Established Connection');
});
    var conn = mongoose.connection;
};
//Connect to the server
/*MongoClient.connect(url, function(err,db) {
    if (err) {
        console.log('Unable to connect to the mongodb server: ', err);
    }
    else {
        console.log('Connection established to ',url);
    }
});*/

var Schema = mongoose.Schema;
var ObjectID = Schema.ObjectId;

var Task = new Schema({
    TaskID            : Schema.ObjectId,
    TaskName        : String,
    StartDate        : Date,
    EndDate            : Date,
    Rewards            : Number,
    Status            : Boolean
});

var User = new Schema({
    UserID            : Schema.ObjectId,
    Name            : String,
    Buddies            : [ObjectID],
    Pending_Tasks    : [ObjectID],
    Completed_Tasks    : [ObjectID]
});

mongoose.model('User', User);
mongoose.model('Task', Task);

// Insert a new user:

database.insertNewUser = function(name, cb) {
    // Retrieve my model
    var User = mongoose.model('User');

    // Create a new user
    var new_user = new User();
    new_user.Name = name;
    new_user.save(function (err, nuser) {
        if (err) console.log('Error while inserting new user', err);
        console.log("Inside insert");
        console.log(nuser.id);
        console.log(JSON.stringify(nuser.id));
        console.log("Leaving insert ....");
        cb(nuser.id);
    });
};

database.addTask = function(taskName, startDate, userID) {
    console.log("Inside add task");
    var task = mongoose.model('Task');
    var user = mongoose.model('User');
    var newTask = new task();
    newTask.TaskName = taskName;
    newTask.StartDate = startDate;
    newTask.Status = 0;
    var task_id;
    
    console.log(JSON.stringify(newTask));

    newTask.save(function (err, nTask) {
        if (err) console.log('Error while adding new task', err);
        console.log(nTask.id);
        task_id = nTask.id;
        console.log(task_id);
        /*var conditions = { _id : userID};
        var update = {$push: {Pending_Tasks: task_id}};
        var options = {new: true};
        user.update(conditions, update, options, function(err) {
            if (err) console.log('Error while updating', err);
        });*/
    });

    user.findOne({_id: userID}, function(err, doc) {
            if(!err) {
                doc.Pending_Tasks.push(newTask._id);
                doc.save(function (err,  nuser) {
                    if (err) console.log("Error");
                });
            }
    });
};

database.getNameFromID = function(userID) {
    var user = mongoose.model('User');
    user.findOne({_id: userID}, function(err, doc) {
        if (!err) {
            console.log(doc.Name);
            console.log(JSON.stringify(doc));
        }
        else console.log("Error in getting name from id")
    });
    return user.Name;
};


/* database.addBuddy = function(buddy_user_id, user_id) {
    var user = mongoose.model('User');
    user.findOneAndUpdate({_})

}*/

module.exports = database;


/*
var get_buddy_list

var get_pending_tasks

var get_completed_tasks

var remove_task

var remove_user
*/




















