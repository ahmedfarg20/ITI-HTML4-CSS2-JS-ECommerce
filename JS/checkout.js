let totalPrice = JSON.parse(localStorage.getItem("total"));
let user = JSON.parse(localStorage.getItem("currentUser"));

let regCreditCard = /^\d{16}$/;
let regeExpiryDate =/^(0[1-9]|1[0-2])\/\d{2}$/;
let regCVV = /^\d{3}$/;

let userName = document.getElementById("UserName");
let userEmail = document.getElementById("UserEmail");
let creditCard = document.getElementById("creditCard");
let expiryDate = document.getElementById("expiryDate");
let cvv = document.getElementById("cvv");
let price=document.getElementById("Price");
price.value=totalPrice;
userName.value=user.Name;
userEmail.value=user.Email;

let creditCardErrorMsg = document.getElementsByClassName("errormsg")[0];
let expiryDateErrorMsg = document.getElementsByClassName("errormsg")[1];
let cvvErrorMsg = document.getElementsByClassName("errormsg")[2];

let creditCard1;let expiryDate1;let cvv1;

creditCard.addEventListener('blur', function () {
  creditCard1 = creditCard.value.trim();
  if (!regCreditCard.test(creditCard1)) {
    creditCardErrorMsg.innerHTML = 'Please Enter a valid credit card number';
  } else {
    creditCardErrorMsg.innerText = '';
  }
});

expiryDate.addEventListener('blur', function () {
  expiryDate1 = expiryDate.value.trim();
  if (!regeExpiryDate.test(expiryDate1)) {
    expiryDateErrorMsg.innerHTML = 'Please Enter a valid expiry Date like 12/24';
  } else {
    expiryDateErrorMsg.innerText = '';
  }
});
cvv.addEventListener('blur', function () {
  cvv1 = cvv.value.trim();
  if (!regCVV.test(cvv1)) {
    cvvErrorMsg.innerHTML = 'Please Enter a valid ccv of three numbers like 379';
  } else {
    cvvErrorMsg.innerText = '';
  }
});

function checkEmptyInputs() {
  let inputs = [creditCard, expiryDate, cvv];
  let isEmpty = false;

  for (let input of inputs) {
    if (input.value.trim() === '') {
      isEmpty = true;
      break;
    }
  }

  return isEmpty;
}
let placeOrder= document.getElementById("placeOrder");
placeOrder.addEventListener('click', function() {
  if (checkEmptyInputs()) {
    alert("please Fill all inputs my G");
  }
});
let ordersarr;let orderobj;
let placeOrderbtn= document.getElementById("placeOrder");
placeOrderbtn.addEventListener("click",function(){
  console.log(regeExpiryDate.test(expiryDate1));
  if(regCreditCard.test(creditCard1) &&regeExpiryDate.test(expiryDate1) &regCVV.test(cvv1)){
 adduser();
 alert("purschased succesful");
}
else
alert("purschased Unsuccesful");


})
function adduser(){
    orderobj={
    Name:userName.value,
    Email:userEmail.value,
    CreditCard:creditCard.value,
    expiryDate:expiryDate.value,
    cvv:cvv.value,
    Price:price.value
  }
  if(JSON.parse(localStorage.getItem("Orderdetails"))!=null){
    ordersarr=JSON.parse(localStorage.getItem("Orderdetails"));
  }
  else{
ordersarr=[];
  }
  ordersarr.push(orderobj);
  localStorage.setItem("Orderdetails",JSON.stringify(ordersarr));

}