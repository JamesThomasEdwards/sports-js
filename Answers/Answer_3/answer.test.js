const PubSub = require('./answer');
const chai = require('chai');
const expect = chai.expect;

describe('Question three test', () => {
    const p = new PubSub
    let log1 = (x) => `Log 1: ${x}`
    let log2 = (y) => `Log 2: ${y}`
    it('should subscribe', () => {
        // subscrible
        p.subscribe('x', log1);
        p.subscribe('x', log2);
        expect(p.topics).to.be.a('object');
        expect(p.topics).to.have.deep.property('x'[0], [log1, log2]);
        expect(p.topics).to.have.any.keys('x');
    });
    it('should unsubscribe', () => {
        // unsubscribe
        p.unsubscribe('x', log2);
        expect(p.topics).to.have.deep.property('x'[0], [log1]);
    });
    it('should publish', () => {
        // publish
        p.publish('x', 'article');
        expect(log1('article')).to.equal(`Log 1: article`);
    });
});