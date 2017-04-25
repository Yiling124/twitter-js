var express = require("express");
var app = express();  // creates an instance of an express application

app.use(function(req, res, next){
	console.log(req.method + req.originalUrl);
	next();
})

app.get('/', function (req, res, next) {
  res.send('Hello World!');
})

app.get('/news', function (req, res, next) {
  res.send('This is the news!')
})


app.use('/special/',function(req, res, next){

	console.log(req.originalUrl.split("/"));
	if (req.originalUrl.split("/").includes("special")){
		console.log("you reached the special area.")
	}
})


app.listen(3000, function () {
  console.log('Server is listening')
})
