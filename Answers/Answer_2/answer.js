// const fetch = require('node-fetch')

// const usersIdList = [1, 2, 3];
// const getUserNamesById = async (usersIdList) => {
//     let users = []
//     usersIdList.forEach(ele => {
//         fetch(`https://jsonplaceholder.typicode.com/users/${ele}`)
//             .then(res => res.json())
//             .then(result => users.push(result.name))
//     })
//     return users
// }

// // console.log(getUserNamesById(usersIdList))
// const output = await getUserNamesById(usersIdList);
// console.log(output)
//xavyr needs help version
// //Write a function that takes a list of user Ids and returns a promise/callback with their names.
// const usersIdList = [1, 2, 3];

// const getUserNamesByIds = async (ids) => {
//   return new Promise((resolve, reject) => {
//     const promiseArr = [];
//     for (let i = 0; i < ids.length; i++) {
//       let promise = new Promise((resolve, reject) => {
//         fetch('https://jsonplaceholder.typicode.com/users/' + ids[i])
//         .then(res => res.json())
//         .then(res => resolve(res));
//       });
//       promiseArr.push(promise);
//     }
//     return Promise.all(promiseArr).then((values) =>{
//       console.log(values);
//       let names = values.reduce((accum, value) => {
//         accum.push(value.name);
//         return accum;
//       }, []);
//       console.log(names);
//       return names;
//     });
//   });
// }

// const output = getUserNamesByIds(usersIdList);
// console.log('output', output); // ['Leanne Graham', 'Ervin Howell']
// //Note: Extra points if you can do all the request concurrently, rather than sequentially.



//async await version
//Write a function that takes a list of user Ids and returns a promise/callback with their names.
const usersIdList = [1, 2, 3];

const getUserNamesByIds = () => {
    // resolve is a success 
    // reject is failure
    return new Promise((resolve, reject) => {
        const promiseArr = [];
        for (let i = 0; i < usersIdList.length; i++) {
            // for every id you create a whole new promise
            let promise = new Promise((resolve, reject) => {
                // we are promising to return the data from fetch
                fetch('https://jsonplaceholder.typicode.com/users/' + ids[i])
                    .then(res => res.json())
                    // we call resolve on the data we want
                    .then(res => resolve(res))
                // .catch(error => reject(error))
            });
            // we push each promise on to this array of 3 JSON objects
            // this is how we do it concurrently 
            promiseArr.push(promise);
        }
        // Promise.all that takes an array (only)
        // each element can only be a promise
        // values is the whole array
        Promise.all(promiseArr).then((values) => {
            console.log(values);
            let names = values.reduce((accum, value) => {
                accum.push(value.name);
                return accum;
            }, [])
            //console.log(names);
            // resolve is like the return for a promise if successful
            resolve(names);
        })
        // .catch(error => error)
    });
}

async function getNames() {
    // won't move on to console.log untill await is resolved
    let output = await getUserNamesByIds(usersIdList);
    console.log('final out', output);
    return output
}

// getNames();

module.exports = getNames
//no async await version
// const usersIdList = [1, 2, 3];

// const getUserNamesByIds = (ids) => {
//     return new Promise((resolve, reject) => {
//         const promiseArr = [];
//         for (let i = 0; i < ids.length; i++) {
//             let promise = new Promise((resolve, reject) => {
//                 fetch('https://jsonplaceholder.typicode.com/users/' + ids[i])
//                     .then(res => res.json())
//                     .then(res => resolve(res));
//             });
//             promiseArr.push(promise);
//         }
//         Promise.all(promiseArr).then((values) => {
//             console.log(values);
//             let names = values.reduce((accum, value) => {
//                 accum.push(value.name);
//                 return accum;
//             }, []);
//             //console.log(names);
//             resolve(names);
//         });
//     });
// }

// getUserNamesByIds(usersIdList).then(names => names);
// console.log('final out', output);



//console.log('output', output); // ['Leanne Graham', 'Ervin Howell']
//Note: Extra points if you can do all the request concurrently, rather than sequentially.

