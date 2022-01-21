document.querySelector("#center").addEventListener("click", signIn);
  var regUsers = JSON.parse(localStorage.getItem("userData"));
  console.log("regUsers:", regUsers);

  function signIn() {
    var email = document.querySelector("#email").value;
    var pass = document.querySelector("#pass").value;

    for (var i = 0; i < regUsers.length; i++) {
      if (regUsers[i].emailAddress == email && regUsers[i].passWord == pass) {
        window.location.href = "index.html";
      }
    }
  }
  document.getElementById("center1").addEventListener("click",function(){
    window.location.href = "signup.html";
  })