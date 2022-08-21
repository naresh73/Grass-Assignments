const digits = [23,34,56,78,90,1,12,234];

//this function will separate an Array in even and odd
function EvenOdd(arr) {
    let even = [];
    let odd = [];
    for (let i=0 ; i<arr.length ; i++) {
        if (arr[i] % 2 == 0) {
            even.push(arr[i]);
        }
        else {
            odd.push(arr[i]);
        }
    }
    console.log("Even digits = ",even);
    console.log("Odd digits = ",odd);
}

EvenOdd(digits);
module.exports = {EvenOdd};