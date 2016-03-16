/*global describe, it, beforeEach*/
"use strict";
var request = require('supertest');
var expect = require('chai').expect;
var cheerio = require('cheerio');
var rewire = require('rewire');
var app = rewire('../app');



describe("Ngration App", function() {

	it("Loads the home page", function(done) {
		request(app).get("/").expect(200).end(function(err, res) {
			done();
		});
	});

    it("Loads an invalid route get 404 error", function(done) {
      request(app).get("/invalid").expect(404).end(function(err, res) {
        done();
      });
    });

	it("Checks H1 heading", function(done) {
		request(app).get("/").end(function(err, res) {
			var $ = cheerio.load(res.text); // load response text
			var pageHeading = $("body>h1:first-child").text(); // check page heading
			expect(pageHeading).to.equal("Welcome to Ngration");
			done();
		});
	});


	describe("Dictionary Api", function() {

		beforeEach(function () {

    	this.defs = [
        {
            term: "One",
            defined: "Term One Defined"
        },
        {
            term: "Two",
            defined: "Term Two Defined"
        }
      ];
      app.__set__("skierTerms", this.defs);

    });

		it("GETS dictionary-api", function(done) {

        var defs = this.defs; // protect data so it dose'nt fall out of scope
        request(app).get("/dictionary-api").expect(200).end(function(err, res) {
          done();
        });
    });

    it("Checks JSON data values", function(done) {
    	var defs = this.defs;
    	request(app).get("/dictionary-api").end(function(err, res) {
    		var terms = JSON.parse(res.text);
        expect(terms).to.deep.equal(defs);
        done();
    	});
    });

    it("POSTS dictionary-api", function(done) {
    	request(app)
    		.post("/dictionary-api")
    		.send({"term": "Three", "defined": "Term Three defined"})
    		.expect(200)
    		.end(done);
    });

    it ("DELETES dictionary-api", function(done) {
    	request(app)
    		.delete("/dictionary-api/One")
    		.expect(200)
    		.end(done);
    });

	});

});