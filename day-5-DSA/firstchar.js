const languages = ['JavaScript','python','c','C++','java','SQL'];

//this function will separate array's element's first char
function checkFirstchar(arr) {
    let capitalChar = [];
    let smallChar = [];
    for (let i=0 ; i<arr.length ; i++){
        if (arr[i][0] == arr[i][0].toUpperCase()) {
            capitalChar.push(arr[i]);
        }
        else {
            smallChar.push(arr[i]);
        }
    }
    console.log(capitalChar);
    console.log(smallChar);

    for (let i=0 ; i<arr.length ; i++){
       if (arr[i][0] == arr[i][0].toLowerCase()) {
            arr[i] = arr[i][0].toUpperCase() + arr[i].substr(1); //substr(1) - add array element from index number 1
            console.log(arr[i]);
       }
    }
}

checkFirstchar(languages)