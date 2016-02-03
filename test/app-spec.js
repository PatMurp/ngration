var request = require('supertest');
var expect = require('chai').expect;
var cheerio = require('cheerio');
var rewire = require('rewire');
var app = rewire('../app');

describe("Ngration App", function() {

	it("Loads the home page and checks heading", function(done) {
		request(app).get("/").expect(200).end(function(err, res) {
			var $ = cheerio.load(res.text); // load response text
			var pageHeading = $("body>h1:first-child").text(); // check page heading
			expect(pageHeading).to.equal("Welcome to Ngration");
			done();
		});
	});
});