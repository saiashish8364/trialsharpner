const myform=document.querySelector("#my-form");

myform.addEventListener("submit",onsubmit);
function onsubmit(e){
   // e.preventDefault();
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var mobile=document.getElementById("mobile").value;

    let myobj={
        Name:name,
        Email:email,
        Mobile:mobile
    };
    let myobjser=JSON.stringify(myobj);
    localStorage.setItem("myObj",myobjser)
}
