//this function will separate latters in capital & small
function smallCapitalLatter(arr) {
    let capiatlLatter = [];
    let smallLatter = [];
    for (let i=0 ; i<arr.length ; i++){
        if (arr[i] == arr[i].toUpperCase()){
            capiatlLatter.push(arr[i]);
        }
        else {
            smallLatter.push(arr[i]);
        }
    }
    console.log(capiatlLatter);
    console.log(smallLatter);
}

module.exports = {smallCapitalLatter};