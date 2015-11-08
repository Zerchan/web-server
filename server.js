var express = require('express');
var app = express();
var PORT = 3000;

var middleware = require('./middleware');

app.use(middleware.logger);
app.use(express.static(__dirname + '/public'));

app.get('/about', middleware.requireAuth, function(req, res){
	res.send('About Us');
});

app.listen(PORT, function(){
	console.log('Server listen to port ' + PORT);
});