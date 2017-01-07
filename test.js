var http =require('http');

var data= {key: 'value', hello: 'world'};

var srv =http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type': 'application/json'});
	res.end(JSON.stringify(data));
});


srv.listen(8088, function(){
	console.log('listening AAA on localhost:8088');
});