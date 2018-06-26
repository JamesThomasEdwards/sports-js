const usersIdList = [1, 2, 3];

const getUserNamesByIds = () => {
    return new Promise((resolve, reject) => {
        // users from promiseToGetUsers will be stored here
        const promiseUsersArr = [];
        for (let i = 0; i < usersIdList.length; i++) {
            // for every userId create a whole new promise
            let promiseToGetUsers = new Promise((resolve, reject) => {
                // promising to return the data from fetch
                fetch(`https://jsonplaceholder.typicode.com/users/${usersIdList[i]}`)
                    .then(res => res.json())
                    .then(userProfile => resolve(userProfile))
                    .catch(error => reject(error));
            });
            // push each promise on to this array- lenght of 3
            promiseUsersArr.push(promiseToGetUsers);
        };
        // once array of users from fetch is complete
        // filter through the array to get the names
        // this is how it's done concurrently 
        Promise.all(promiseUsersArr).then((usersArr) => {
            let names = usersArr.reduce((accum, user) => {
                accum.push(user.name);
                return accum;
            }, []);
            resolve(names);
        })
            .catch(error => reject(error));
    });
};

async function getNames() {
    let output = await getUserNamesByIds(usersIdList);
    return output;
};

console.log('get names', getNames());

module.exports = getNames;



