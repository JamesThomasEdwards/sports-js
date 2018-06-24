const getAllImages = require('./answer_1')
const chai = require('chai');
const should = require('chai').should();
const expect = chai.expect;
const assert = chai.assert;


describe('Question one test', () => {
    it('should return an array of six http', () => {

        let actualResult = getAllImages()

        expect(actualResult).to.be.a('array');
        expect(actualResult).to.have.lengthOf(6);
        expect(actualResult[0]).to.match(/^http/);
    })
})