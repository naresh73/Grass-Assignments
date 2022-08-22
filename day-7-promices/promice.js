let msgPromise = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve (console.log("Hello user Promise is resolved"));
        // reject (new Error(console.log("Server down--please wait...")));
    },2000)
})

console.log(msgPromise);