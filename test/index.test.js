const expect = require('chai').expect;
const boilerplate = require('../src/index');

describe('Main boilerplate package', function() {
    it('should return a complete list of frameworks', function() {
        expect(boilerplate.all.length).to.be.eq(7);
    });
});