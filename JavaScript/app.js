
// Question No.1
let students = {
    name: "Talim",
    marks: [99,97,98,96,95]
};
let avg = 0;
students.marks.forEach((el) => {
    avg += el;
});
avg = avg/students.marks.length;
console.log(students.name);
console.log(`Avg: ${avg}`);
//Solve Question No.1 <============>

// Question No.2 <============>
console.log("// Question No.2");
let str = "talim";
let reversed = ""; //string ko revers nhi kar paa rha tha to array ka use kiya
for (let i=str.length-1; i>-1; i--) {
    reversed += str[i];
    if (i == 0) { // ye str reverse puri tarah se huaa h ki nhi check karne k liye
        if (str === reversed) { // ye Palindrome check karne ka condition hai
            console.log("Palindrome hai");
        }else {
            console.log('Palindrome nhi hai');
        };
    };
};


// Question No.3 <============>
console.log("// Question No.3");
let arr = [2,4,6,8,9,7,5,3];
let object = {
    smallest: "",
    largest: ""
};

let largeNum = 0;
let smallNum = 0;

for (el of arr) {
    if (largeNum < el) { // largest number
        largeNum = el;
        smallNum = largeNum;
        object.largest = `largeNum: ${largeNum}`;
    };
    for (let i=0; i<arr.length; i++) {
        if (smallNum > arr[i]) { // smallest number
            smallNum = arr[i];
            object.smallest = `Smallest: ${smallNum}`;
        };
    };
};
console.log(object.smallest);
console.log(object.largest);


// Question No.4 <============>
console.log("// Question No.4");
let Str = "hello";
let ASCII = [];
let ASCIIsum = 0;
for (let i=0; i<Str.length; i++) {
    ASCII.push(Str.charCodeAt(i));
};
for (let i=0; i<ASCII.length; i++) {
    ASCIIsum += ASCII[i];
};
console.log(ASCIIsum);


// Question No.5 <============>
console.log("// Question No.5");

let obj = {
    a: 10,
    b: 20,
    c: 30,
    d: 40
};
let sumOfKeys = 0;
let sumOf = () => {
    for (key in obj) {
        sumOfKeys += obj[key];
    };
    console.log(sumOfKeys);
};


// Question No.6 <============>
console.log("// Question No.6");
let obj2 = {
    a: [1,2,3,4],
    b: [5,6,7],
    c: [8,9,0]
};
let arrOfAll = [];
for (key in obj2) {
    for (arr of obj2[key]) {
        arrOfAll.push(arr);
    };
};
console.log(arrOfAll);


// Question No.7 <============>
console.log("// Question No.7");

let fruits = ["apple", "banana", "cherry", "dates"];
let sumOfFruits = 0;
for (let el of fruits) {
    sumOfFruits += el.length;
};
console.log(sumOfFruits);


// Question No.8 <============>
console.log("// Question No.8");

let arr3 = [1,2,3,4,5,6,7,8,9,10];

arr3.forEach((e) => {
    if( e % 2 == 0) {
        evn.push(e);
         
    }
});





