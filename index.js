//import {CallculaterImpl} from "./CalcImpl.js";

const functions=require('./CalcImpl.js')
const Hapi = require('hapi');
const server = new Hapi.Server({port: 3000,host:'localhost'}); 
//let obj=new CallculaterImpl();
//obj.add();


server.route({
	method: 'GET',        
	path: '/{name*}',//*is an optional param
	handler: function(request, response) { 
		return 'Hello ' + request.params.name; 
	}
});

server.route({
	method: 'GET',        
	path: '/add', 
	handler: function(request, response) {
		var x=functions.CallculaterImpl.add(20,30);
		console.log(x)
		
					
			//return 'add is called'

		

		
		//return 'i am trying to add something'; 
	}
});




server.start();
console.log('server started');
