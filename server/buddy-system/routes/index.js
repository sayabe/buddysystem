var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/home', function(req, res, next) {
	console.log('home route start point');
	var userID = req.query.userID;

	// Fetch profile

	// Fetch pending tasks
	// Fetch buddy tasks

	// Fetch image for graph

	// Render view for homepage
	console.log('home route end point');

});

module.exports = router;
