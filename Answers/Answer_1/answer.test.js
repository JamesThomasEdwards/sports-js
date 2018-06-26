const getAllImages = require('./answer')
const chai = require('chai');
const expect = chai.expect;


describe('Question one test', () => {
    it('should return an array of six http', () => {

        let actualResult = getAllImages()

        expect(actualResult).to.be.a('array');
        expect(actualResult).to.have.lengthOf(6);
        expect(actualResult[0]).to.match(/^http/);
    })
})