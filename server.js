var express = require('express');
var app = express();
var middleware=require('./middleware');

app.use(middleware.requireAuthentication);
app.use(middleware.test);
app.get ('/about',function(req,res){
	res.send('This is about Express!!!');
});
app.use(express.static(__dirname+'/public'));
app.listen(3000, function(){
	console.log('Express Server Started');
});
