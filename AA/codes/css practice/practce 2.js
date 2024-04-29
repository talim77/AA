let num = 2000;

if (num/4 == 0) {
	console.log ('This is a leap Year');

} else if (num/4 != 0) {
	console.log ('This is not leap Year')

} else (
	console.log ('Somthing wrong')
);


let temperature = 60;

if (temperature <= 5) {
	console.log ('Temperature is too low (Freezing)');

} else if (temperature <= 20) {
	console.log (' Temperature is "cold" ');

} else if ( temperature <= 30) {
	console.log ('temperature is meadium jaise ki naa garmi na sardi');

} else if (temperature <= 60) {
	console.log ('temperature is too high jaise ki "garmi"');
} else {
	console.log ('Temperature 60c se jyada hai bahot bahot jyada garmi h AC me rhe');
}
 

// let nume = prompt('Add number to check even or odd number');

// if (isNaN (nume)) {
// 		console.log (`${nume} is invalid number`);
// 	} else {
// 		if (nume % 2 == 0) {
// 			console.log (`${nume} is an Even number`);
		
// 		} else {
// 			console.log (`${nume} is an odd number`);
// 	}
// }


// simple Shopping Cart JS Code creating 


// let shoppingCart = [];

// while (true) {
// 	let userInput = prompt('Enter task');	
// 	if (userInput === 'done') {
// 		console.log (`Closing the Loop "shoppingCart"`);
// 		break;
// 	} if (userInput === 'show') {
// 		console.log (`Item list: ${shoppingCart}`);
// 		break;
// 	} else if (userInput === 'clear') {
// 		console.log (shoppingCart.splice(0, shoppingCart.length),'Item was deleted');
// 	} else if (userInput === 'add') {
// 		userInput = prompt('Add the task you want to add')
// 		shoppingCart.push(userInput);
// 		console.log(`${shoppingCart} Item added`);
// 	} else {
// 		userInput = prompt('Enter Task 2');
// 	}
	
// }


// let quizQuestions = [
//     {
//         question: "What is the capital of France?",
//         options: ["Berlin", "Paris", "London", "Madrid"],
//         correctAnswer: "Paris"
//     },
//     {
//         question: "Which programming language is known for building dynamic web pages?",
//         options: ["Java", "Python", "JavaScript", "C++"],
//         correctAnswer: "JavaScript"
//     },
// 	{
//         question: "Talim's programming languagename?",
//         options: ["Java", "Python", "JavaScript", "C++"],
//         correctAnswer: "JavaScript"
//     },
//     // Add more questions as needed
// ];

// let userScore = 0;

// for (let i = 0; i < quizQuestions.length; i++) {
//     let userAnswer = prompt(quizQuestions[i].question + "\nOptions: " + quizQuestions[i].options.join(", "));

//     if (userAnswer.toLowerCase() === quizQuestions[i].correctAnswer.toLowerCase()) {
//         console.log("Correct!");
//         userScore++;
//     } else {
//         console.log("Incorrect. The correct answer is: " + quizQuestions[i].correctAnswer);
//     }
// }

// console.log("Your final score is: " + userScore + " out of " + quizQuestions.length);


// let todoList = [];

// while (true) {
//     let userChoice = prompt("Choose an option:\n1. Add a new to-do item\n2. View current to-do list\n3. Mark an item as completed\n4. Exit");

//     if (userChoice === "1") {
//         let newItem = prompt("Enter a new to-do item:");
//         todoList.push({ task: newItem, completed: false });
//         console.log("New item added:", newItem);
//     } else if (userChoice === "2") {
//         console.log("Current To-Do List:");
//         for (let i = 0; i < todoList.length; i++) {
//             console.log(`${i + 1}. [${todoList[i].completed ? 'X' : ' '}] ${todoList[i].task}`);
//         }
//     } else if (userChoice === "3") {
//         let index = prompt("Enter the index of the item to mark as completed:");
//         if (index >= 1 && index <= todoList.length) {
//             todoList[index - 1].completed = true;
//             console.log("Item marked as completed.");
//         } else {
//             console.log("Invalid index. Please enter a valid index.");
//         }
//     } else if (userChoice === "4") {
//         break;
//     } else {
//         console.log("Invalid choice. Please choose a valid option.");
//     }
// }

// console.log("Final To-Do List:");
// for (let i = 0; i < todoList.length; i++) {
//     console.log(`${i + 1}. [${todoList[i].completed ? 'X' : ' '}] ${todoList[i].task}`);
// }


// function nameDice() {
// 	let dice = Math.floor(Math.random()*6)+1;
// 	console.log(dice);
// }

// nameDice();


function poem() {
	console.log('Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et, voluptatum accusamus. Cupiditate expedita laborum et, consequuntur libero quam explicabo ut. Cumque, voluptas consectetur ipsum totam veniam consequuntur quia id corrupti!')
	console.log('ye dusara "CONSOLE.LOG" hai')
}

poem();


function rollDice() {
	let ludo = Math.floor((Math.random()*6)+1);
	console.log(ludo);
}

rollDice();

function userName (Name) {
	console.log(Name);
}

userName("Abirun");


function avrg (a, b, c) {
	let sum = (a + b + c) / 3;
	console.log(sum);
}

avrg(1,2,9);

function table (n) {
	for (let i=n; i<=n*10; i+=n) {
		console.log(i);
	}	
}

table(2);


function nmbrsum (n) {
	let sum = 0;

	for (let i=1; i<=n; i=i+1) {
		sum += i;
	}
	return sum;
}

console.log(nmbrsum (100));



for (let i = 0; i < 5; i = i+1) {
	console.log(i);
}


