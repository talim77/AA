
import {productsMetaData} from './productsData.js'
import {ProductsInfoAfterDestructure} from './productsData.js'
// import {addToCart} from './addToCart.js'
// // import {currentCarD} from './central.js'


let productTemplate = document.querySelector("#templateSingle");
let cloneTemplate = document.importNode(productTemplate.content, true);

let singleContainer = document.querySelector("#singleContainer");
let orderNow = cloneTemplate.querySelector(".order");
let cart = cloneTemplate.querySelector(".cart");
// console.log(singleContainer, productTemplate);



const {id, name, brand, price, stock, description, image} = "";
productsMetaData.forEach((currentCard) =>{
    const {id, name, brand, price, stock, description, image} = currentCard;

    if(currentCard.id == localStorage.getItem("ID")){
        cloneTemplate.querySelector(".product-img> img").src = image;
        cloneTemplate.querySelector(".productName").textContent = name;
        cloneTemplate.querySelector(".productPrice").textContent = price;
        cloneTemplate.querySelector(".stock").textContent = stock;
        cloneTemplate.querySelector(".description").textContent = description;

        ProductsInfoAfterDestructure.push(id, image, name, price, stock);
        // localStorage.setItem("setProductCart", JSON.stringify(ProductsInfoAfterDestructure));
        // console.log(localStorage.getItem('setProductCart'));
        singleContainer.append(cloneTemplate);
    };
});

// create add to cart function
cart.addEventListener("click", function() {
    // ProductsInfoAfterDestructure.push(id, name, image, price, stock);
    console.log(ProductsInfoAfterDestructure);
    localStorage.setItem('cartProd', JSON.stringify(ProductsInfoAfterDestructure));
    console.log(localStorage.getItem('cartProd'));
    // addToCart()
});

