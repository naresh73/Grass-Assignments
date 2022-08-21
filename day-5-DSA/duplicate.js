//this fuction will remove repeat element from array
function removeDuplicate(arr) {
    const result = [];
    for (let i=0 ; i<arr.length ; i++) {
        if (!result.includes(arr[i])) {
            result.push(arr[i]);
        }
    }
    console.log(result);
}

module.exports = {removeDuplicate};