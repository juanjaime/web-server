var express = require('express');
var app = express();
var middleware={
	requireAuthentication: function(req,res,next){
		console.log('private route hit!');
		next();
	},
	test: function(req,res,next){
		console.log(req.method+' '+req.originalUrl);
		next();
	},
}
//app.use(middleware.logger);
app.use(middleware.requireAuthentication);
app.use(middleware.test);
app.get ('/about',function(req,res){
	res.send('This is about Express!');
});
app.use(express.static(__dirname+'/public'));
app.listen(3000, function(){
	console.log('Express Server Started');
});
