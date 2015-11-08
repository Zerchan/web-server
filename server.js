var express = require('express');
var app = express();
var PORT = 3000;

var middleware = {
	requireAuth: function(req, res, next){
		console.log('private route hit');
		next();
	},
	logger: function(req, res, next){
		console.log('Request: ' + req.method + ' ' + req.originalUrl + ' on ' + new Date().toString());
		next();
	}
}

app.use(middleware.logger);
app.use(express.static(__dirname + '/public'));

app.get('/about', middleware.requireAuth, function(req, res){
	res.send('About Us!');
});

app.listen(PORT, function(){
	console.log('Server listen to port ' + PORT);
});