//Minimum eight characters, at least one uppercase letter, one lowercase letter and one number:
//---------------------------------------------------------------------------------------------
//"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"
//---------------------------------------------------------------------------------------------

//
headerJS();
//get local storage email
let regName=document.getElementById("regName");
let regEmail=document.getElementById("regEmail");
let regPhone=document.getElementById("regPhone");
let regPassword=document.getElementById("regPassword");
let confirmPassword=document.getElementById("regconfirmPassword");
let signup=document.getElementById("signup");
function checkEmptyInputs() {
  let inputs = [regName, regEmail, regPhone, regPassword, confirmPassword];
  let isEmpty = false;

  for (let input of inputs) {
    if (input.value.trim() === '') {
      isEmpty = true;
      break;
    }
  }

  return isEmpty;
}
signup.addEventListener('click', function() {
  if (checkEmptyInputs()) {
    alert("please Fill all inputs my G");
  }
});

      /// check for loop on Emails
// signup.addEventListener('click', function() {
//   if (checkEmptyInputs()) {
//     alert("please Fill all inputs my G");
//   }
// });


let nameErrorMsg = document.getElementsByClassName("errormsg")[0];
let emailErrorMsg = document.getElementsByClassName("errormsg")[1];
let phoneErrorMsg = document.getElementsByClassName("errormsg")[2];
let passwordErrorMsg = document.getElementsByClassName("errormsg")[3];
let confirmPasswordErrorMsg = document.getElementsByClassName("errormsg")[4];
// let emailExistsMsguniqness = document.getElementsByClassName("errormsg")[1];

// for(let i=0; i<4;i++){let errorMessages = document.getElementsByClassName("errormsg")[i];}

// check on every regex this way if nameRegex.test(nameValue)==true
let nameRegex =  /^[A-Z][a-z]{2,12}\s[A-Z][a-z]{2,12}$/;
let emailRegex=/^([\w\.\+]{1,})([^\W])(@)([\w]{4,8})(\.[\w]{2,4})+$/;
let phoneRegex= /^01[0125]\d{8}$/;
let passwordRegex= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,20}$/;

let usersarr;

if (localStorage.getItem("users") != null) {
  
  usersarr = JSON.parse(localStorage.getItem("users"));
} else {
  usersarr=[];
}
let user={ID:"",Name:"",Email:"",Phone:"",Password:"",cart:[] };
let nameValue;let emailValue;let phoneValue;let passwordValue;let confirmPasswordValue;

function adduser(){
  // if (usersarr.length==0) {user.ID='1',user.Name=nameValue,user.Email=emailValue,user.Phone=phoneValue,user.Password=passwordValue,user.cart=[]}
 user={ID:usersarr.length+1,Name:nameValue,Email:emailValue,Phone:phoneValue,Password:passwordValue,cart:[]};
 usersarr.push(user);
 localStorage.setItem("users",JSON.stringify(usersarr));
 console.log(usersarr);

}
signup.addEventListener('click',function(){
if(nameRegex.test(nameValue) &&emailRegex.test(emailValue) &&phoneRegex.test(phoneValue)
 &&passwordRegex.test(passwordValue) && passwordValue === confirmPasswordValue){
 adduser();
 location.href='login.html';
}
})

regName.addEventListener('blur', function checkName(){
   nameValue = regName.value.trim();
  if(!nameRegex.test(nameValue)){
    nameErrorMsg.innerHTML='Please Enter your first and last name <br> Example:Ahmed Farg';
  }
  else{
    nameErrorMsg.innerText='';
  }
  
  


})
regEmail.addEventListener('blur', function checkEmail(){
   emailValue = regEmail.value.trim();
  if(!emailRegex.test(emailValue)){
    emailErrorMsg.innerText='Please Enter a valid Email';
  }
  else{
    emailErrorMsg.innerText='';
  }


})
regPhone.addEventListener('blur', function checkPhone(){
   phoneValue = regPhone.value.trim();
  if(!phoneRegex.test(phoneValue)){
    phoneErrorMsg.innerHTML='Please Enter a valid Phone <br> Example:01012345678';
  }
  else{
    phoneErrorMsg.innerText='';
  }


})
regPassword.addEventListener('blur', function checkPassword(){
   passwordValue = regPassword.value.trim();
  if(! passwordRegex.test(passwordValue)){
    passwordErrorMsg.innerText='Please Enter a valid Password:Minimum eight characters, at least one uppercase letter, one lowercase letter and one number';
  }
  else{
    passwordErrorMsg.innerText='';
  }


})
confirmPassword.addEventListener('blur', function checkconfirmPassword(){
   confirmPasswordValue = confirmPassword.value.trim();
  if(passwordValue != confirmPasswordValue){
    confirmPasswordErrorMsg.innerText='Please re-enter the password';
  }
  else{
    confirmPasswordErrorMsg.innerText='';
  }


})