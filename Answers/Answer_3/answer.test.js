const PubSub = require('./answer_3')
const chai = require('chai');
const should = require('chai').should();
const expect = chai.expect;
const assert = chai.assert;

describe('Question three test', () => {
    it('should PubSub', () => {

        const p = new PubSub
        let log1 = (x) => `Log 1: ${x}`
        let log2 = (y) => `Log 2: ${y}`
        // subscrible
        p.subscribe('x', log1);
        p.subscribe('x', log2);
        expect(p.topics).to.be.a('object');
        expect(p.topics).to.have.deep.property('x'[0], [log1, log2]);
        expect(p.topics).to.have.any.keys('x');
        // unsubscribe
        p.unsubscribe('x', log2);
        expect(p.topics).to.have.deep.property('x'[0], [log1]);
        // publish
        p.publish('x', 'article');
        expect(log1('article')).to.equal(`Log 1: article`)
    })
})