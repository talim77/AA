
// let i = 0;

// let row = [];

// while (i<5) {
//     i++;
//     row.push(i);
//     console.log(row); 
    
// }


// // let userInput = prompt("Enter a number:");
// let number = 13;
// // let number = parseInt(userInput);
// console.log(number);

// let reversNum = [];

// while (number > 0) {
//     let lastNum = (number % 10);
//     number = Math.floor(number / 10);
//     reversNum.push(lastNum);
// }

// console.log(reversNum);


// for (let i = 0; i <= 10; i = i + 2) {
//     console.log(i);
// }


// let I = 0;

// while (I <= 10) {
//     console.log(i);
//     I = I + 2;
// }



// let num = [1,2,3,4,5,6,7,8,9,10];

// for (even of num) {
//     if (even % 2 === 0) {
//         console.log(even);
//     }
// }

// // let marks = prompt("enter the number");
// let marks = 98;
// // parseInt(marks);

// if (marks >= 90) {
//     console.log(`You are pass\nMarks: ${marks}\nGrade: A+`);
    
// } else if (marks >= 80) {
//     console.log(`You are pass\nMarks: ${marks}\nGrade: B`);
    
// } else if (marks >= 70) {
//     console.log(`You are pass\nMarks: ${marks}\nGrade: C`);
    
// } else if (marks >= 60) {
//     console.log(`You are pass\nMarks: ${marks}\nGrade: D`);
    
// } else {
//     console.log(`you are fail. Your marks is: ${marks}\nPassing marks is: 60`);
// }

// let Num = [1,2,3,4,5,6,7,8,9];
// let oddNum = 0;

// for (odd of Num) {
//     if (odd % 2 !== 0) {
//         oddNum += odd
//     }
// }
// console.log(oddNum);


// let nuM = 5;
// let factorial = 1;

// for (let i = 1; i <= nuM; i++) {
//     factorial *= i;

// }

// console.log(factorial);


// let prime = 13;
// let primeNum = Math.sqrt(prime);

// if (primeNum % 2 == 0) {
//     console.log(`This is not a prime number\n${prime}`)
// } else {
//     console.log(`This is prime number\n${prime}`)
// }


// // sabhi upar ke code perfectly run kar rha hai.
// // sabhi upar ke code perfectly run kar rha hai.



// let userInput = prompt("Press 1 for add a task\nPress 2 for delete last task\nPress 3 for show tasks\nPress 4 for close task App");

// let todoList = [];

// while (1) {
//     if (userInput == 4) {
//         console.log("Closed task app");
//         break;
//     }
//     if (userInput == 1) {
//         let addingTask = prompt('Add task what you want');
//         todoList.push(addingTask);
//         console.log(`Task added: "${addingTask}"`);

//     } else if (userInput == 2) {
//         for (let i = 0; i < todoList.length; i++) {
//             console.log(`No. ${i}: Task:${todoList[i]}`);
//         }
//         let delteIndex = prompt('No. enter kro\njis task ko delete karna hai');
//         let deletedTask = todoList.splice(delteIndex,1);
//         console.log(`Task deleted: ${deletedTask}`);

//     } else if (userInput == 3) {
//         console.log(todoList);
//         userInput = prompt("Press any key for go to main menu");

//     } else {
//         console.log('Wrong Input.\nTry again with valid input.');
        
//     }
//     userInput = prompt("Press 1 for add a task\nPress 2 for delete last task\nPress 3 for show tasks\nPress 4 for close task App\n(ye last se aya h)");
// }


// let num = prompt('Enter the random number');
// parseInt(num);

// console.log("test");

// let random = Math.floor( Math.random() * num) +1;
// console.log(random);

// guss = prompt('Gusse the random number');
//     parseInt(guss);

// while(1) {

//     if(guss == random) {
//         console.log(`Sahi pakade hain...! ${random}`);
//         break;
//     } else if (guss < random) {
//         guss = prompt("Thoda BADA number socho...!");
//         // console.log("Thoda bada number socho...!");
//     } else {
//         guss = prompt("Thoda CHHOTA number socho...!");
//         // console.log("Thoda chhota socho...!");
//     }
// }


// const id1 = setInterval(function() {
//     console.log('Talim');
// }, 1000);

// // clearInterval ko separate line me rakhna
// setTimeout(function() {
//     clearInterval(id1);
//     console.log("Interval stopped after 9 seconds.");
// }, 9000);

document.write("Talim");

// const square = (n) => {
//     return(n*n);
// }

// console.log(square(5));


// let id = setInterval(() => {
//     console.log("Talim");
// }, 2000)

// setTimeout(() => {
//     clearInterval(id);
//     console.log("Talim 5 times jyada print nhi hoga.")
// }, 1000);

// function squareN (n) {
//     console.log(`square of ${n}: ${n*n}`);
// }
// squareN(4);


function rollDice() {
    return(Math.floor(Math.random()*6)+1);
}

console.log(rollDice());

function avgOf3(a, b, c) {
    return(
        ((a*b*c)/3)
    )
}

console.log(avgOf3(4, 5, 5));

function table(n) {
    // let n = 4;
    let totalSum = 0;
    for (let i = 1; i <= n; i++) {
        totalSum = totalSum+i;
        // console.log(totalSum);
    }
    console.log(totalSum);
}

table(7);


let str = ["T", "a", "l", "i", "m"];

function concat (str) {
    let result = "";

    for (let i = 0; i < str.length; i++) {
        result += str[i];
        // console.log(result);
    }
    return result;
}

concat(str);

let calculator = {
    num: 55,
    add: function(a, b) {
        return a+b;
    },
    sub: function(a,b) {
        return a-b;
    },
    mul: function() {
        return a*b;
    },
}


let squareNum = (a, b) => {
    return a*b;
}
console.log(squareNum(6, 7));

// let ID = setInterval(
//     ()=> {
//     console.log("Talim")
// },1000);

// setTimeout(
//     () => {
//     console.log("stop printing 'Talim'");
//     clearInterval(ID);
// },5000);

let random = Math.floor(Math.random()*100)+1;
console.log(random);

let car = {
    brand: "toyota",
    model: 2022,
    color: "red"
};

// car = {
//     ...car,
//     brand: "toyota",
//     year: "2022",
//     color: "red"
// }

for (let i = 0; i<= car.length; i++) {
    console.log(car[brand[i]]);
}

console.log(car.color);

let keys = Object.keys(car);


for (let i = 0; i < keys.length; i++) {
    let key = keys[i];
    console.log(key + ": " + car[key]);
}

let arr = ["talim", "sarfraj", "kaif"];
for (let i=0; i<arr.length; i++) {
    console.log(`Arr ka har ek elements: ${arr[i]}`)
}


