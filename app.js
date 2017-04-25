var nunjucks = require("nunjucks");
var express = require("express");
var tweetBank = require('./tweetBank');
var routes = require("./routes");
//var router = require("index")
var app = express();  // creates an instance of an express application


app.use("/", routes);

app.set("view engine", "html");
app.engine("html", nunjucks.render);
nunjucks.configure("views", {nocache: true});


// var locals = {
// 	title: "An example",
// 	people: [
// 		{ name: 'Gandalf'},
//         { name: 'Frodo' },
//         { name: 'Hermione'}
// 	]
// }

// nunjucks.render("index.html", locals, function(err, output){
// 	console.log(output);
// })

const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];

app.get('/', function (req, res, next) {
  	res.render("index",{title: "HALL OF FAME",people: people}, function(err, html){
		res.send(html);
	})
})

// res.render("index",{title: "HALL OF FAME",people: people}, function(err, html){
// 	res.send(html);
// })


// static routing 
app.use(express.static('public'));
app.use(express.static('views'));
app.get("/", function(req, res, next){
	res.sendFile("/public/stylesheets/style.css")
})


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


// app.use('/special/',function(req, res, next){

// 	console.log(req.originalUrl.split("/"));
// 	if (req.originalUrl.split("/").includes("special")){
// 		console.log("you reached the special area.")
// 	}
// })


app.listen(3000, function () {
  console.log('Server is listening')
})



