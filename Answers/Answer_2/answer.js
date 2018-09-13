const fetch = require('node-fetch')
//meeeee hererere
const usersIdList = [1, 2, 3];

const getUserNamesByIds = (usersIdList) => {
    let arr = [];
    for (let i = 0; i < usersIdList.length; i++) {
        arr.push(fetch(`https://jsonplaceholder.typicode.com/users/${usersIdList[i]}`)
            .then(res => res.json())
            .then(userProfile => userProfile)
            .catch(error => error));

    }
    return Promise.all(arr).then(values => {
        return values.reduce((accu, ele) => {
            accu.push(ele.name);
            return accu
        }, [])
    })
};

async function getNames() {
    let output = await getUserNamesByIds(usersIdList).catch(err => err)
    // console.log used for testing
    console.log(output);
    return output;

};

getNames();

module.exports = getNames;



