const axios = require('axios');

// let msgPromise = new Promise(function (resolve, reject) {
    // setTimeout(() => {
        // resolve (console.log("Hello user Promise is resolved"));
        // reject (new Error(console.log("Server down--please wait...")));
    // },2000)
// })

// console.log(msgPromise);
// async function fetchData() {
//     const result = await axios.get('http://jsonplaceholder.typicode.com/users');
//     console.log(result);
// }

async function fetchData() {
    try {
        const result = await axios.get('http://jsonplaceholder.typicode.com/users');
        console.log(result);
    } catch (error) {
                console.log('error');
                setTimeout(() => {
                    console.log(error);
                }, 3000)

    }
}

fetchData()