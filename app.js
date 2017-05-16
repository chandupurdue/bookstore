var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
Genre = require('./model/genre');
Book = require('./model/book')

//connecting to database
mongoose.connect('mongodb://localhost/bookstore',function(err){
	if(err) console.log(err);
});
var db = mongoose.connection;

//server creation

app.get('/',function(req,res){
	res.send("please use /api/genres");
});
app.get('/api/genres',function(req,res){
	Genre.getGenres(function(err,genres){
		if(err) throw err
		res.json(genres);
	})
});
app.get('/api/books/:_id',function(req,res){
	Book.getBookId(req.params._id,function(err,book){
		if(err) throw err
		res.json(book);
	})
});
app.get('/api/books',function(req,res){
	Book.getBook(function(err,books){
		if(err) throw err
		res.json(books);
	})
});
app.listen(3000);
console.log("app started");