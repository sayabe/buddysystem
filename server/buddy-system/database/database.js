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
	TaskID			: Schema.ObjectId,
	TaskName		: String,
	StartDate		: Date,
	EndDate		    : Date,
	Rewards			: Number,
	Status			: Boolean
});

var User = new Schema({
	UserID			: Schema.ObjectId,
	Name			: String,
	Buddies			: [ObjectID],
	Pending_Tasks	: [Task],
	Completed_Tasks	: [Task]
});

mongoose.model('User', User);

// Insert a new user:

database.insertNewUser = function(name) {
	// Retrieve my model
	var User = mongoose.model('User');

	// Create a new user
	var new_user = new User();
	new_user.Name = name;
	new_user.save(function (err, nuser) {
		if (err) console.log('Error while inserting new user', err);
		return nuser.id;
	});
};

database.addTask = function(taskNome, startDate, userID) {
	var Task = mongoose.model('Task');
	var newTask = new Task();
	newTask.TaskName = taskNome;
	newTask.StartDate = startDate;
	newTask.Status = 0;
	
	User.findOneAndUpdate(
		{"_id": userID}, {"$push": {Pending_Tasks: newTask}}, function(err, doc) {
			console.log ('Error in adding task to user data');
		}
	);

	newTask.save(function (err, nTask) {
		if (err) console.log('Error while adding new task', err);
		return nTask.id;
	});
};

module.exports = database;


/*
var get_buddy_list

var get_pending_tasks

var get_completed_tasks

var remove_task

var remove_user
*/



















