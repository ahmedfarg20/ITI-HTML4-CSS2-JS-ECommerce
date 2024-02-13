headerJS();

let products;

if (localStorage.getItem("productData") != null) {
  
  products = JSON.parse(localStorage.getItem("productData"));
  displayproducts(products);
} else {
  products = [];
}
let searchProducts=[];
// products=[];
// function addProduct() {
//   products.push(product);
//   console.log(product);
//   console.log(products);

// }
let addButton=document.getElementById("addProduct");
let shirtname=document.getElementById("shirtname");
let price=document.getElementById("price");
let description=document.getElementById("description");
let img=document.getElementById("img");
function add(){
    // if(flag=0){
      let imagePath = `../Images/${img.value}`;
      if (!isValidImagePath(imagePath)) {
        alert("Invalid image path. Please enter a valid image path.");
        return;}
        else{
      // products.push(e.target.value);
      let product=
      {shirtname:shirtname.value,
        price:price.value,
        description:description.value,
        img:`../Images/${img.value}`
      };
      console.log(product);
      products.push(product);
      
      clearform();
      displayproducts(products);
      
      localStorage.setItem("productData", JSON.stringify(products));}
    // displayproducts(searchProducts);
      //}
      // flag=1;
}
addButton.addEventListener("click",function addProduct(){

if (addButton.value=="add product") {
  add();
}
else if(addButton.value="Update Product"){
update();


  addButton.value="add product";
}
});
function deleteProduct(x) {
  products.splice(x, 1);
  localStorage.setItem("productData", JSON.stringify(products));
  displayproducts(products);
}

// function retriveData(x) {
//   shirtname.value = products[x].shirtname;
//   price.value = products[x].price;
//   description.value = products[x].description;
//   img.value = products[x].img;
//   addButton.innerHTML = "update product";

//   addButton.onclick = function () {
//     products[x].shirtname = shirtname.value;
//     products[x].price = price.value;
//     products[x].description = description.value;
//     products[x].img = img.value;

//     localStorage.setItem("productData", JSON.stringify(products));

//   displayproducts(products);
//     addButton.innerHTML = "add product";

//     addButton.onclick = addProduct;

//   };

function clearform(){
  shirtname.value="";
    price.value="";
    description.value="";
    img.value="";
}
function isValidImagePath(path) {

  return path.startsWith("../Images/") && (path.endsWith(".jpg") || path.endsWith(".webp"));
}


function displayproducts (productsDisplayed){
let trs=``;
for (let i = 0; i < productsDisplayed.length; i++) {
  trs+=`<tr>
  <td>${i+1}</td>
  <td>${productsDisplayed[i].shirtname}</td>
  <td><img src="../Images/${productsDisplayed[i].img}" width="50px" height="50px" alt=""></td>
  <td>${productsDisplayed[i].price}$</td>
  <td>${productsDisplayed[i].description}</td>
  <td><input type="button" class="btn btn-delete" onclick="deleteProduct(${i})" value="delete"></td>
  <td> <input  type="button" class="btn btn-update" onclick="retriveData(${i})" value="update"></td>
  </tr>`
  
}
document.getElementById("tbody").innerHTML = trs;

}
 let gindex=0;
 function retriveData(index) {
  // if(flag==1){
    gindex=index;
  shirtname.value = products[index].shirtname;
  price.value = products[index].price;
  description.value = products[index].description;
  img.value = products[index].img;
  addButton.value = "Update Product";
  // addButton.innerHTML = "Add Product";
  // addButton.onclick = addProduct;

  // clearform();
//}
};
function update(){
  products[gindex].shirtname=shirtname.value;
  products[gindex].price=price.value ;
  products[gindex].description=description.value;
  products[gindex].img=img.value;
  localStorage.setItem("productData",JSON.stringify(products));
  location.href="Crud.html";  
  displayproducts();
}
// Sample CRUD functions

// Create
// function addProduct(product) {
//   products.push(product);
// }

// // Read
// function getProductById(id) {
//   return products.find(product => product.id === id);
// }

// function getAllProducts() {
//   return products;
// }

// // Update
// function updateProduct(id, updatedProduct) {
//   shirtname.value = products[index].shirtname;
//   price.value = products[index].price;
//   description.value = products[index].description;
//   img.value = products[index].img;
 
// }

// // Delete
// function deleteProduct(id) {
//   products = products.filter(product => product.id !== id);
// }

// // Example usage
// addProduct({
//   id: 3,
//   shirtname: "Product 3",
//   price: "$25",
//   description: "Description for Product 3",
//   img: "product3.jpg",
// });

// console.log(getAllProducts());

// updateProduct(1, { price: "$22" });

// console.log(getAllProducts());

// deleteProduct(2);

// console.log(getAllProducts());

// if(products.id!=0){

// }else{

// }
















// let names=[];
// let prices=[];
// let descriptions=[];
// let images =[];

// // destructing my  array of objects
// if(products!=[])
// for (let i = 0; i < products.length; i++) { 
//    names [i]  = products[i].shirtname;
//    prices[i]=products[i].price;
//    descriptions[i]=products[i].description;
//    images[i]=products[i].image;
// }
