console.log("This To Do app build by Talim");

let AddElement = document.querySelector(".addElement");
let input = document.querySelector("input");
let submit = document.querySelector("#add");
let remove = document.querySelector(".delt");

submit.addEventListener("click", function(){
    if (input.value === "") {
        alert("Enter a task !");
    }else{
        let Div = document.createElement("div");
        let createElement = document.createElement("li"); // creating the task element
        let btn = document.createElement("span"); // creating button for delete the task

        Div.classList.add("boxForTask"); //uses of this class go to HTML line "51"
        createElement.textContent = input.value // storing the value of user input
        btn.textContent = "Delete"; // 

        AddElement.insertAdjacentElement("AfterBegin", Div); // adding a div for "p" and "btn"
        Div.insertAdjacentElement("AfterBegin", createElement); // adding p tag in div
        Div.appendChild(btn);
        input.value = ""; // reset the input value
    }    
});

remove.addEventListener("click", function(e){
    e.target.parentElement.remove();
});









