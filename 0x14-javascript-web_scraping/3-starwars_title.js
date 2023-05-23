#!/usr/bin/node
const request = require('request);
const starWarUrl = 'https://swapi-api.alx-tools.com/api/films/'.concat(process.argv[2]);
request(starWarUrl, function (_err, _res, body) {
	body = JSON.parse(body);
	console.log(body.title);
});
