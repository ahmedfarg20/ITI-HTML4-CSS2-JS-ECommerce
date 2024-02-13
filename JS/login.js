
let usersarr = JSON.parse(localStorage.getItem("users"));
let LoginEmail=document.getElementById("LoginEmail");
let LoginPassword=document.getElementById("LoginPassword");
let loginbtn=document.getElementById("loginbtn");
let flag;
loginbtn.addEventListener('click',function(){
  let currentUser={};
for(let i=0;i<usersarr.length;i++){
  console.log(LoginEmail.value,LoginPassword.value,usersarr[i].Email,usersarr[i].Password);
  if(LoginEmail.value ==usersarr[i].Email&& LoginPassword.value==usersarr[i].Password){
    let currentUser = usersarr[i];
    localStorage.setItem('currentUser',JSON.stringify(currentUser));
    location.href='index.html';
    return;
  }
    
  }alert("your Email or password is inncorrect")});
//   if(currentUser==null){
// loginAlerts();
//   }

// function loginAlerts(){
//   for
//   if (LoginEmail.value != usersarr[i].Email) {
//     window.alert("Email not found.");
// } else {
//     window.alert("Incorrect password.");
// }
// }


