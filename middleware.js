module.exports = {
	requireAuth: function(req, res, next){
		console.log('private route hit');
		next();
	},
	logger: function(req, res, next){
		console.log('Request: ' + req.method + ' ' + req.originalUrl + ' on ' + new Date().toString());
		next();
	}
};