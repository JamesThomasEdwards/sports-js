const getNames = require('./answer_2')
const chai = require('chai');
// const should = require('chai').should();
const should = chai.should
const expect = chai.expect;
const assert = chai.assert;



describe('Question one test', () => {
    it('should return an array of six http', () => {

        let actualResult = getNames()

        return getNames().to.eventually.equal(["Leanne Graham", "Ervin Howell", "Clementine Bauch"])

    })
})