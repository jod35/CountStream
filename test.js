var assert=require('assert');
var CountStream=require('./countstream');

var countstream=new CountStream('example');
var fs =require('fs');

var passed=0;

countstream.on('total',function(count){
    assert.equal(count,1);
    passed++;

});

fs.createReadStream(__filename).pipe(countstream);

process.on('exit',function(){
    console.log('Assert passed: ',passed);
    
})