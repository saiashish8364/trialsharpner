const myform=document.querySelector("#my-form");

myform.addEventListener("submit",onsubmit);

function onsubmit(e){
    e.preventDefault();
    var ammount=document.getElementById("ammount").value;
    var description=document.getElementById("description").value;
    var reason=document.getElementById("reason").value;

    let myobj={
        Ammount:ammount,
        Description:description,
        Reason:reason
    };
    let myobjser=JSON.stringify(myobj);
    localStorage.setItem(myobj.Ammount,myobjser);
    showonscreen(myobj)
}   
   function showonscreen(myobj){
    
    const pe=document.getElementById("ulist")
    const ce=document.createElement("li")
    ce.textContent=myobj.Ammount+'-'+myobj.Description+'-'+myobj.Reason
    const db=document.createElement("input")
    const eb=document.createElement("input")
    db.type="button"
    db.value="Delete Expense"
    eb.type="button"
    eb.value="Edit Expense"
    db.onclick=()=>
    {
        localStorage.removeItem(myobj.Ammount)
        pe.removeChild(ce)
   }
   eb.onclick=()=>
    {
        var ammount1=myobj.Ammount
        var description1=myobj.Description
        var reason1=myobj.Reason
        document.getElementById("ammount").value=ammount1
        document.getElementById("description").value=description1
        document.getElementById("reason").value=reason1

        localStorage.removeItem(myobj.Ammount)
        pe.removeChild(ce)
   }
   ce.appendChild(db)
   ce.appendChild(eb)
   pe.appendChild(ce)
   }
