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
    
    const pe=document.getElementById("ulist")
    const ce=document.createElement("li")
    ce.textContent=myobj.Name+'-'+myobj.Email+'-'+myobj.Mobile
    const db=document.createElement("input")
    const eb=document.createElement("input")
    db.type="button"
    db.value="delete"
    eb.type="button"
    eb.value="Edit"
    db.onclick=()=>
    {
        localStorage.removeItem(myobj.Email)
        pe.removeChild(ce)
   }
   eb.onclick=()=>
    {
        var name1=myobj.Name
        var email1=myobj.Email
        var mobile1=myobj.Mobile
        document.getElementById("name").value=name1
        document.getElementById("email").value=email1
        document.getElementById("mobile").value=mobile1

        localStorage.removeItem(myobj.Email)
        pe.removeChild(ce)
   }
   ce.appendChild(db)
   ce.appendChild(eb)
   pe.appendChild(ce)


   }
