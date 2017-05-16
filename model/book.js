var mongoose = require('mongoose');

var bookSchema = mongoose.Schema({
	title : {
		type : String,
		required : true
	},
	description : {
		type : String,
		required : true
	},
     author : {
		type : String,
		required : true
	},
	
	create_date : {
		type : Date,
		default : Date.now
	}
});
var Book = module.exports = mongoose.model('Book',bookSchema);
module.exports.getBook = function(callback,limit){
	Book.find(callback).limit(limit);
}
module.exports.getBookId = function(id,callback){
	Book.findById(id,callback);
}
