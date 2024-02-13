headerJS();
let productdesc11 = document.getElementById('productdesc11');

    // Get the Y-coordinate (vertical position) of the table
   

    // Scroll to the Y-coordinate of the table
       let tableOffsetTop = productdesc11.offsetTop;
    window.scrollTo({
        top: tableOffsetTop+20,
        behavior: 'smooth' // You can use 'auto' instead of 'smooth' for instant scrolling
    })
let products = JSON.parse(localStorage.getItem("productData"));
let productadded=[...products];
// ./Images/cartkid.jpg
let objectSent = JSON.parse(localStorage.getItem("objectSent"));
// let imgsrc = JSON.parse(localStorage.getItem("imgsrc"));
let imgsrc = objectSent.imgSrc;
console.log(objectSent);
let addtocart= {objectSent,color:"",size:""};
console.log(addtocart);
// let red= document.getElementsByClassName("bg-red");
// let white= document.getElementsByClassName("bg-white");
// let black= document.getElementsByClassName("bg-red");
// let grey= document.getElementsByClassName("bg-grey");
let colorButtons = document.getElementsByClassName("color-div");
for (let i = 0; i < colorButtons.length; i++) {
  colorButtons[i].addEventListener("click", function () {
    updateColor(colorButtons[i].classList[4]);
  });
}
let sizeButtons = document.getElementsByClassName("size-div");

for (let i = 0; i < sizeButtons.length; i++) {
  sizeButtons[i].addEventListener("click", function () {
    updatesize(sizeButtons[i].value);
  });
}
let colorspantext=document.getElementById("colorspantext");

function updateColor(color) {

  addtocart.color = color;
  colorspantext.innerText=color;
}
let sizespantext=document.getElementById("sizespantext");
function updatesize(size) {
  addtocart.size = size;
  sizespantext.innerText=size;
  console.log(addtocart);
}
// let colorcontainer=document.getElementsByClassName("colorcontainer")[0];
// let red=colorcontainer.getElementsByTagName("input")[0];
// let white= colorcontainer.getElementsByTagName("input")[1];
// let black=colorcontainer.getElementsByTagName("input")[2];
// let grey= colorcontainer.getElementsByTagName("input")[3];
// function red(){
//   addtocart.color="red";
// }
// function white(){
//   addtocart.color="white";
// }
// function black(){
//   addtocart.color="black";
// }
// function grey(){
//   addtocart.color="grey";
// }
// if()


let lastSlashIndex = imgsrc.lastIndexOf("/");
let lastDotIndex = imgsrc.lastIndexOf(".");
let fileNameExtention = imgsrc.substring(lastDotIndex);
let fileName = imgsrc.substring(lastSlashIndex + 1,lastDotIndex);

console.log("File name:",fileName,fileNameExtention);
console.log(productadded);
// ../Images/fileName/fileName[i]/fileNameExtention
let imagesarr=[`../Images/${fileName}${fileNameExtention}`,];
let descriptionImage;
for (let i = 2; i < 5; i++) {

  descriptionImage= `../Images/${fileName}/${fileName}${i}${fileNameExtention}`;
  imagesarr.push(descriptionImage);
} 

let position = 0;
let flag = true;
let t ;
let myimg = document.getElementById("myimg");
if (flag) {
  slideshownext();
   t = setInterval(slideshownext, 2000);
  flag = false;
}

function slideshownext() {
  position++;
  if (position >= imagesarr.length) {position = 0;}
  myimg.src = imagesarr[position];
}
function next() {
  clearInterval(t)
  position++;
  if (position >= imagesarr.length) {position = 0;}
  myimg.src = imagesarr[position];
}

// function slideshowprev() {
//   position++;
//   if (position >= imagesarr.length) {position = 0;}
//   myimg.src = imagesarr[position];
// }
function prev() {
  clearInterval(t)
  position--;
  if (position < 0) position = imagesarr.length-1;
  myimg.src = imagesarr[position];
}

// function slideshowprev(){

// }

// for(let i=0;i<productadded.length;i++){
//   if(productadded.img[i].value==`../Images/${fileName}/${fileNameExtention}`){
//     myobject=productadded[i];
//   }
// }
let myObject = null;
for (let i = 0; i < productadded.length; i++) {
  let imageUrl = productadded[i].img;
  if (imageUrl.includes(`../Images/${fileName}${fileNameExtention}`)) {
    myObject = productadded[i];
    break;
  }
}
addtocart={...myObject,
  color:"",
  size:"",}

//buy and add to cart
let user;
let myCart;
let usertype;
//differntiate between user and anonymous user
if(localStorage.getItem("currentUser") && JSON.parse(localStorage.getItem("currentUser")!={}))
{
user = JSON.parse(localStorage.getItem("currentUser"));
console.log("aaaa");
myCart= user.cart;
usertype='user';
console.log(myCart);
}else{
 myCart  =[];
 usertype='anonymousUser';
}
// end of function
let pdAddBtn= document.getElementsByClassName("pd-add-btn")[0];
let pdBuyBtn= document.getElementsByClassName("pd-buy-btn")[0];

pdAddBtn.addEventListener('click',function(){
  if ((addtocart.color!="" )||(addtocart.size!="") ){
    //addproduct
    myCart.push(addtocart);
    window.alert("product added to cart");
    localStorage.setItem("currentUser",JSON.stringify(user));
    location.href='product-description.html';
  }
})
pdBuyBtn.addEventListener('click',function(){
  if(usertype=='anonymousUser')
  {
    location.href='register.html';
  }
  else{
    //addproduct
    myCart.push(addtocart);
    
    localStorage.setItem("currentUser",JSON.stringify(user));
    location.href='Cart.html';
  }
})
console.log(user);
console.log("Matched object:", myObject);
////////////////////////////////////////
//getting my material except image
let descMaterial= document.getElementById("descMaterial");
descMaterial.innerHTML=` <p class="description-head" id="description-head">${myObject.shirtname}</p>
<p class="description-head" id="description-price">${myObject.price}$</p>
<P class=" description-f-size grey">${myObject.description}
</P>`