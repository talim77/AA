

// import {accessID} from './central.js';
// import {singleProductData} from './singleProductPage.js';
import {productsMetaData} from './productsData.js';
// import {singleProductData} from './central.js';


let productTemplate = document.querySelector("#productsTemplate");
let productContainer = document.querySelector("#productsContainer");


function showProduct (productsMetaData){
    if(productsMetaData.length < 1){
        console.log("Talim");
    };

    productsMetaData.forEach((currentElement) =>{
        const {id, name, brand, price, stock, description, image} = currentElement;
        const cloneTemplate = document.importNode(productTemplate.content, true);

        cloneTemplate.querySelector("#setID").setAttribute("id", `card${id}`);

        cloneTemplate.querySelector(".productName").textContent = name;
        cloneTemplate.querySelector(".productPrice").textContent = `Rs. ${price}`;
        cloneTemplate.querySelector(".description").textContent = description;
        cloneTemplate.querySelector(".stock").textContent = `Stock : ${stock}`;
        cloneTemplate.querySelector("img").src = image;



        cloneTemplate.querySelector(".left-box").addEventListener("click", function () {
            localStorage.setItem("ID", id);
            window.open("singleProductPage.html", "Talim");
        });
        productContainer.append(cloneTemplate); 
    });
};
showProduct(productsMetaData);



