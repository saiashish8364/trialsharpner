const myform=document.querySelector("#my-form");

myform.addEventListener("submit",onsubmit);
function onsubmit(e){
   // e.preventDefault();
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var mobile=document.getElementById("mobile").value;

    localStorage.setItem("Name",name);
    localStorage.setItem("Email",email);
    localStorage.setItem("Mobile",mobile);
}
