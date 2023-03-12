const myform=document.querySelector("#my-form");

myform.addEventListener("submit",onsubmit);

function onsubmit(e){
    e.preventDefault();
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var mobile=document.getElementById("mobile").value;

    let myobj={
        Name:name,
        Email:email,
        Mobile:mobile
    };
    let myobjser=JSON.stringify(myobj);
    localStorage.setItem(myobj.Email,myobjser);
    showonscreen(myobj)
}   
   function showonscreen(myobj){
    e.preventDefault();
    const pe=document.getElementById("ulist")
    const ce=document.createElement("li")
    ce.textContent=myobj.Name+'-'+myobj.Email+'-'+myobj.Mobile
    const db=document.createElement("input")
    db.type="button"
    db.value="delete"
    db.onclick=()=>
    {
        localStorage.removeItem(myobj.Email)
        pe.removeChild(ce)
   }
   ce.appendChild(db)
   pe.appendChild(ce)


   }
