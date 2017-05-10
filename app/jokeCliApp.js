#! /usr/bin/env node

let argv = require('yargs').argv;
let request = require('request');

if (argv.joke){
	const options = {
		url: 'http://api.icndb.com/jokes/random'
	};
	const callback = (error, response, body)=>{
		if(!error && response.statusCode == 200){
			let joke = JSON.parse(body);
			console.log(joke.value.joke);
		}
	}

	request(options, callback);
}