var Countstream=require('./countstream');
var countstream=new Countstream('book');

var http =require('http');

http.get('http://manning.com',function(res){
   res.pipe(countstream);
});

countstream.on('total',function(count){
 console.log('Total matches: ',count);
 
});