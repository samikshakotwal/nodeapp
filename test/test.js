var request = require('supertest');

var app = require('../index.js');describe('GET /', function() {

 it('hello world', function(done) { //navigate to root and check the the response is "hello world"

 request(app).get('/').expect('hello all of you', done);

 });

});