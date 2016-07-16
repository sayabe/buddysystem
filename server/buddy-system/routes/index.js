var express = require('express');
var router = express.Router();


var database = require('../database/database');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/home', function(req, res, next) {
	console.log('home route start point');
	var userID = req.query.userID;
	database.addTask('run', 0, 0, 0);

	// Fetch profile

	// Fetch pending tasks
	// Fetch buddy tasks

	// Fetch random buddies

	// Render view for homepage
	console.log('home route end point');
	res.sendFile('dummy_page.html');

});

module.exports = router;
