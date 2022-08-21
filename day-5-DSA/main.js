//import all functions from files using module
const { removeDuplicate } = require('./duplicate');
const { EvenOdd } = require('./evenodd');
const { checkFirstchar } = require('./firstchar');
const { smallCapitalLatter } = require('./smallcapital');

const id = [10,23,45,67,10,67,455,231];
removeDuplicate(id)

const digits = [23,34,56,78,90,1,12,234];
EvenOdd(digits)

let latter = ['A','y','Z','a','B','b','r','u'];
smallCapitalLatter(latter)

const languages = ['JavaScript','python','c','C++','java','SQL'];
checkFirstchar(languages);