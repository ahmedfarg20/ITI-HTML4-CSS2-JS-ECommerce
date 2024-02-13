function headerJS(){
  let Dashboardli = document.getElementById("Dashboard");
  let user = JSON.parse(localStorage.getItem("currentUser"));
  let changeheader= document.getElementsByClassName("changeheader")[0];
  let users ;
  if (user && (user.ID == 1 )){
    changeheader.classList.add("header-ml-633px");
  }
  if (user && (user.ID !== 1 || user.ID === null)) {
    Dashboardli.classList.add("d-none");
  }
  
  let registerID = document.getElementById("registerID");
  let loginID = document.getElementById("loginID");
  let loginIDA = loginID.lastChild;
  if(user.ID==null){
    
  }
  else if (user && user.ID.constructor.name === 'Number') {
    registerID.classList.add("d-none");
    loginIDA.innerText = 'Log Out';
    loginIDA.classList.add("fs-20");
  }
  
  loginID.addEventListener('click', function () {
    // Uncomment the next line if you want to clear user information
    if(loginIDA.innerText = 'Log Out'){
      users = JSON.parse(localStorage.getItem("users"));
      for(let i=0;i<users.length;i++){
        if(user.ID==users[i].ID){
          users[i].cart=user.cart;
          localStorage.setItem("users",JSON.stringify(users));
          }

      }
    user = {};
    registerID.classList.remove("d-none");
    loginIDA.innerText = 'Log in';
    loginIDA.classList.remove("fs-20");
    localStorage.setItem("currentUser", JSON.stringify({}));}
  });}