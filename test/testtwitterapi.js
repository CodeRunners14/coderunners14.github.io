var request = require("supertest");
var request = require("chai");
request = request("http://coderunners14.github.io/");

//var app = require("http://coderunners14.github.io/");
//var wsrequest = require("../wsrequest.js")
//var expect = require("chai").expect;


describe("When user views twitter page",function(){
	it("contains images",function(done){
		expect(wsrequest.img).to.exits;
		done();
	});
	
	/*it("displays images once", function(){
		expect(wsrequest.img).
		done();
	});*/
	
	it("displays tweet with collective", function(done){
		expect(wsrequest.tweet).to.contain.("collective");
		done();
	});
});	
