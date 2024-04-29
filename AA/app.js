
const allChars = 'QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm1234567890~!@#$%^&*()_+=-,.<>/?;:[{]}';

const passBox = document.querySelector('#box-of-pass');
const generateBTN = document.querySelector("#generate");
const password = document.querySelector('#pass');

generateBTN.addEventListener("click", () =>{
    generate();
});

// apple 
passBox.addEventListener('keyup', (e) => {
    if(e.key == 'Enter') {
        generate();
    }
});

function generate () {
    let pass = '';

    passLength = parseInt(passBox.value)
    if (passLength <= 16 && passLength >= 4) {
    while (pass.length < passLength) {
        pass += allChars[Math.floor(Math.random()*allChars.length)];
    };
    password.innerText = pass;
    password.style.color = 'green';
    passBox.value = '';
    }else{
    message = 'Please enter a valid number between 4 to 16'
    password.innerText = message;
    passBox.value = '';
    password.style.color = 'red'
    };
};


// <===========================================================>
// <===========================================================>
// <===========================================================>
// <===========================================================>

// slider

const images = document.querySelectorAll('#slider-img');
const next = document.querySelector('#next');
const previews = document.querySelector('#previews');
const dots = document.querySelectorAll('#dot');
let counter = 0;

images.forEach((img, index) => {
    img.style.left = `${100*index}%`;
});

next.addEventListener('click', () => {
    nextImg();
    dotFunc();
});
previews.addEventListener('click', () => {
    previewsImg();
    dotFunc();
});

let nextImg = () => {
    if((images.length)-2 >= counter){
        counter++;
        images.forEach((image, index) => {
            image.style.transform = `translateX(${counter * -100}%)`;
        });
    }
};

let previewsImg = () => {
    if(counter >= 1){
        counter--
        images.forEach((image, index) => {
            image.style.transform = `translateX(${counter * -100}%)`
        });
    }

};

let dotFunc = () => {
    dots.forEach((dot, index) => {
        if(dot.classList == 'active' || dot.classList == 'inactive active' || dot.classList == 'inactive'){
            dot.classList.remove('active');
            if(index == counter){
                dot.classList.toggle('active');
            }
        }else{
            console.log('dot wala case match nhi huaa');
        }
    });
}



// <===========================================================>
// <===========================================================>
// <===========================================================>
// <===========================================================>





const userInput = document.querySelector('#Input-number');
const userOutput = document.querySelector('#output-roman');
const btnConvert = document.querySelector('#convert');

let convert = () => {
    console.log('tesddt')
}

btnConvert.addEventListener('click', (e) => {
    showRoman();
    console.log(e);
    // userOutput.value = 'test'
});

userInput.addEventListener('keyup', (e) => {
    if(e.key == 'Enter') {
        showRoman();
    }
});

// const reference = [
    
//     ['M', 1000],
//     ['CM', 900],
//     ['D', 500],
//     ['CD', 400],
//     ['C', 100],
//     ['XC', 90],
//     ['L', 50],
//     ['XL', 40],
//     ['X', 10],
//     ['IX', 9],
//     ['V', 5],
//     ['IV', 4],
//     ['I', 1],
    
// ];

//     reference.forEach((e, i) => {
//         console.log(reference[i]);
//         // console.log(e);
//     });

// console.log(reference[0].M);



const funcRoman = (num) => {
    const roman = [
        ['M', 1000],
        ['CM', 900],
        ['D', 500],
        ['CD', 400],
        ['C', 100],
        ['XC', 90],
        ['L', 50],
        ['XL', 40],
        ['X', 10],
        ['IX', 9],
        ['V', 5],
        ['IV', 4],
        ['I', 1]
    ];
    const result = [];

    roman.forEach((arr) => {
        while (num >= arr[1]) {
            result.push(arr[0]);
            num -= arr[1];
        }
    });
    return result.join('');
};

const showRoman = () => {
    const int = parseInt(userInput.value);
    userOutput.value = '';
    
    if(int <= 3999 && int >= 1) {
        userOutput.style.color = 'green';
        userOutput.value = funcRoman(int);
    }else{
        userOutput.value = 'please enter the digits between 1 to 3999'
        userOutput.style.color = 'red';
    };
};




