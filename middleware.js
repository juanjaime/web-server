module.exports={
	requireAuthentication: function(req,res,next){
		console.log('private route hit!');
		next();
	},
	test: function(req,res,next){
		console.log(req.method+' '+req.originalUrl);
		next();
	},
}