headerJS();

// var products = [
//   {
//     id:'',
//     shirtname: 'Curvedtee',
//     price: '100',
//     description: 'With its elegant appearance and unique look! We present to you the Stabraq Polo T-shirt.',
//     image: 'productsm-1.webp',
//     color:"",
//     size:"",
//   },
//   {
//     id:'',
//     shirtname: 'sssssssssstwin-tipped-Polossssssssss',
//     price: '150',
//     description: 'With its elegant appearance and unique look! We present to you the Stabraq Polo T-shirt.',
//     image: 'productsm-2.webp',
//     color:"",
//     size:"",
//   },
// ];
let products = JSON.parse(localStorage.getItem("productData"));

let names=[];
let prices=[];
let descriptions=[];
let images =[];
let readMorearr;

// destructing my  array of objects
for (let i = 0; i < products.length; i++) { 
   names [i]  = products[i].shirtname;
   prices[i]=`${products[i].price}$`;
   descriptions[i]=products[i].description;
   images[i]=`../Images/${products[i].img}`;
}
 function showgallery(){
//creating the element like a G
 for (let i = 0; i < products.length; i++) { 
 let gallerycontainerjs= document.getElementsByClassName('home-container')[0];
 let productDiv = document.createElement('div');
 productDiv.className = 'inline-block home-p-1  p-relative';

 let productlabel=document.createElement('div');
 productlabel.className='p-absolute New';
 productlabel.innerText='NEW';
 
 let productImg=document.createElement('img');
 productImg.className='pointer';
 productImg.width='550';
 productImg.height='550';
 productImg.src=`${images[i]}`

 let producthead=document.createElement('p');
 producthead.className='center grey';
 producthead.innerText=`${names[i]}`;

 let productPrice=document.createElement('p');
 productPrice.className='center';
 productPrice.innerText=`${prices[i]}`;

 let productDescription = document.createElement('p');
 productDescription.className='grey w-30 products-description';
 productDescription.innerHTML=`${descriptions[i]} <br> <span class="readMore" onclick="opendes(event,${i})">Read More</span>`;
 productDiv.appendChild(productlabel);
 productDiv.appendChild(productImg);
 productDiv.appendChild(producthead);
 productDiv.appendChild(productPrice);
 productDiv.appendChild(productDescription);
 gallerycontainerjs.appendChild(productDiv);
}
readMorearr = document.getElementsByClassName("readMore");
// localStorage.setItem("readMoreArray", JSON.stringify(readMorearr));
}
 showgallery();
// let readMorearr=[];
// setTimeout(function() {
   readMorearr = document.getElementsByClassName("readMore");
// }, 2000);

function opendes(event,i) {
  event.preventDefault();
  let parentElement = readMorearr[i].parentElement.parentElement;

  // Accessing child nodes
  let imgSrc = parentElement.childNodes[1].src;
  let shirtName = parentElement.childNodes[2].textContent;
  let price = parentElement.childNodes[3].textContent;
  let description = parentElement.childNodes[4].childNodes[0].textContent;
  
  // Creating an object for easy access
  let objectSent = { shirtName, price, description, imgSrc };
  
  // Logging the information
  console.log(shirtName, price, description, imgSrc, objectSent);
  
  // Storing in local storage
  localStorage.setItem("imgSrc", JSON.stringify(imgSrc));
  localStorage.setItem("objectSent", JSON.stringify(objectSent));
 console.log(imgSrc);
 console.log(objectSent);

  window.open("product-description.html", '_self');

  // window.location.href = "product-description.html";
}

 
// var productContainer = document.getElementById('productContainer');

// products.forEach(function (product) {
//   var productDiv = document.createElement('div');
//   productDiv.classList.add("home-p-1 inline-block p-relative");

//   var newLabel = document.createElement('div');
//   newLabel.className = 'p-absolute';
//   newLabel.style = 'width: 50px; height: 30px; background-color: aqua; text-align: center; padding-top: 5px;font-weight: 600; font-family: Poppins, sans-serif ; font-size: 20px; color: rgb(34, 37, 32); margin-left: 490px;';
//   newLabel.innerText = 'NEW';

//   var img = document.createElement('img');
//   img.src = product.image;
//   img.className = 'pointer';
//   img.width = '550';
//   img.height = '550';
//   img.alt = '';

//   var productName = document.createElement('p');
//   productName.className = 'center grey';
//   productName.innerText = product.name;

//   var productPrice = document.createElement('p');
//   productPrice.className = 'center';
//   productPrice.innerText = product.price;

//   var productDescription = document.createElement('p');
//   productDescription.className = 'grey w-30 products-description';
//   productDescription.innerText = product.description;

//   var readMore = document.createElement('span');
//   readMore.className = 'readMore';
//   readMore.innerText = 'Read More';

//   productDescription.appendChild(readMore);

//   productDiv.appendChild(newLabel);
//   productDiv.appendChild(img);
//   productDiv.appendChild(productName);
//   productDiv.appendChild(productPrice);
//   productDiv.appendChild(productDescription);

//   productContainer.appendChild(productDiv);
// });