headerJS();
let res;
function sendMail(){
  (function(){
    emailjs.init("mK9b5DB-G4vd1pf2d"); 
    //accountpublickey
  })();
  let params={
    Name:document.getElementById("regName").value,
    Email:document.getElementById("regEmail").value,
    Subject:document.getElementById("regSubject").value,
    mailtextarea:document.getElementById("mailtextarea").value,
  };
  console.log(regName,mailtextarea,regEmail,regSubject,emailjs.init("mK9b5DB-G4vd1pf2d"));
  let service ="service_avlc63z"; 
  // email service ID
  let template="template_l4lpt7g";
  emailjs.send(service,template,params).then(  res =>{alert("Email sent");
}).catch(error => {
  alert("Error sending email" + error);
});}