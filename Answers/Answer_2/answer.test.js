const getNames = require('./answer')
const chai = require('chai');
const expect = chai.expect;
const chaiFetchMock = require('chai-fetch-mock');
const fetchMock = require('fetch-mock');



// describe('Question one test', () => {
//     it('should return an array of six http', () => {

//         let actualResult = getNames()

//         return actualResult.to.eventually.equal(["Leanne Graham", "Ervin Howell", "Clementine Bauch"])

//     })

// })
chai.use(chaiFetchMock);

describe('Question two test', () => {
    before(() => fetchMock.get('https://jsonplaceholder.typicode.com/users/', {}))

    it('calls fetch', () => {
        return fetch('https://jsonplaceholder.typicode.com/users/').then(() => {
            expect(fetchMock)
                .route('https://jsonplaceholder.typicode.com/users/')
                .to.have.been.called;
        });
    });

    after(() => fetchMock.restore());
});