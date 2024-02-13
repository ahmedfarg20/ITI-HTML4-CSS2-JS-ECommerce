// import { headerJS } from '../JS/index.js';
headerJS();
let user = JSON.parse(localStorage.getItem("currentUser"));
let cart;
if(user=={}){
  cart=[];
}
/*  <tr>
          <td class="pb-2" colspan="2"> <img src="../Images/T-shirt.jpg" alt=""></td>
          <td>t-shirt</td>
          <td class="mute">30$</td>
          <td><i class="fa fa-plus brdr-raduis"></i> <span class="mh-2">1</span>
            <i class="fa fa-minus brdr-raduis"></i>
          </td>
          <td>30$</td>
          <td><i class="fa fa-trash mute"></i></td>
        </tr> */
        // headerJS();
let total=0;
let totalPrice=document.getElementsByClassName("Total")[0];
 cart=user.cart;
  let tbody=document.getElementsByTagName("tbody")[0];
  addEventListener('load',function showmycart(){
    for(let i=0;i<cart.length;i++){
      let tr =document.createElement("tr");
      let td1= document.createElement("td");
      let td2= document.createElement("td");
      let td3= document.createElement("td");
      let td4= document.createElement("td");
      let td5= document.createElement("td");
      let td6= document.createElement("td");

      td1.className="pb-2";
      td1.setAttribute("colspan", 2);
      let PIMG=document.createElement("img");
      PIMG.src=cart[i].img;
      td1.appendChild(PIMG);
      let itemColor = cart[i].color;
      td2.style.color = itemColor;

      td2.innerText=`${cart[i].shirtname}(${cart[i].size})`;

      td3.innerText=`${cart[i].price}$`;
      td3.className="mute";
   
       total += Number(cart[i].price);
      let plusIcon = document.createElement("i");
      plusIcon.className = "fa fa-plus brdr-raduis";
      let quantitySpan = document.createElement("span");
      quantitySpan.className = "mh-2";
      quantitySpan.innerText = '1';
      let minusIcon = document.createElement("i");
      minusIcon.className = "fa fa-minus brdr-raduis";
      td4.appendChild(minusIcon);
      td4.appendChild(quantitySpan);
      td4.appendChild(plusIcon);
    
      let subTotal=(cart[i].price)*quantitySpan.innerText;
      td5.innerText=`${subTotal}$ `;
      console.log(subTotal);
      let deleteIcon = document.createElement("i");
      deleteIcon.className = "fa fa-trash mute";
      td6.appendChild(deleteIcon);    
      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);
      tr.appendChild(td4);
      tr.appendChild(td5);
      tr.appendChild(td6);
      tbody.appendChild(tr);

      
    } 
    trashCan1();
    localStorage.setItem("total",JSON.stringify(total));

  })
  // setTimeout()
  // let trashCan= document.getElementsByClassName("fa-trash");
  // for(let i=0;i<cart.length;i++){
  // trashCan[i].addEventListener('click',function handleDeleteClick(deleteIcon) {
  //   let tr = deleteIcon.parentElement.parentElement;
  //   tbody.removeChild(tr);}  )};

 let tableremove =document.getElementsByTagName("table")[0];
  function trashCan1 () {
    let trashCan = document.getElementsByClassName("fa-trash");
    for (let i = 0; i < cart.length; i++) {
      
      trashCan[i].addEventListener('click', function handleDeleteClick() {
        // if(i!=0){
            let tr = trashCan[i].parentElement.parentElement;
            tbody.removeChild(tr);
            console.log(i);
            user.cart.splice(i,1);
            localStorage.setItem("currentUser",JSON.stringify(user));
            let firstTable = document.getElementById('firstTable');
            if (firstTable) {
                // Get the Y-coordinate (vertical position) of the table
               
          
                // Scroll to the Y-coordinate of the table
                   let tableOffsetTop = firstTable.offsetTop;
                location.href="Cart.html"
                window.scrollTo({
                    top: tableOffsetTop,
                    behavior: 'smooth' // You can use 'auto' instead of 'smooth' for instant scrolling
                })}
        //}
        // else{
        //   tableremove.innerText=""
        //   user.cart=[];
        //   localStorage.setItem("currentUser",JSON.stringify(user));
        // }
        });
    
      }
      
}; 
let checkout =document.getElementsByClassName("Checkout")[0];
checkout.addEventListener("click",function(){
  location.href="checkout.html";
})

  // document.addEventListener('DOMContentLoaded', function () {
  // let trashCan;
  // trashCan= document.querySelectorAll(".fa-trash");

  // for(let i=0;i<cart.length;i++){
  //   trashCan[i].addEventListener('click',function(){
  //     let tr = trashCan[i].closest('tr');
  //     tbody.removeChild(tr);
  //   })
  // }});



  // for(let i=0;i<cart.length;i++){
  // let faMinus =document.getElementsByClassName("fa-minus")[i];
  // let faPlus= document.getElementsByClassName("fa-plus")[i];
  // }
  // document.addEventListener('click', function (event) {
  //   if (event.target.classList.contains('fa-plus')) {
  //     handlePlusClick(event.target);
  //   } else if (event.target.classList.contains('fa-minus')) {
  //     handleMinusClick(event.target);
  //   } else if (event.target.classList.contains('fa-trash')) {
  //     handleDeleteClick(event.target);
  //   }
  // });
  // function handlePlusClick(plusIcon) {
  //   let quantitySpan = plusIcon.nextElementSibling;
  //   let currentQuantity = parseInt(quantitySpan.innerText);
  //   quantitySpan.innerText = currentQuantity + 1;
  
  //   updateSubTotal(plusIcon);
  // }

  

  // function updateSubTotal(icon) {
  //   let tr = icon.parentElement.parentElement;
  //   let price = parseFloat(tr.children[2].innerText.replace('$', ''));
  //   let quantity = parseInt(tr.children[3].children[1].innerText);
  //   let subTotal = price * quantity;
  //   tr.children[4].innerText = `${subTotal.toFixed(2)} $`;
  // }

// function handleDeleteClick(deleteIcon) {
//   let tr = deleteIcon.parentElement.parentElement;
//   tbody.removeChild(tr);}
