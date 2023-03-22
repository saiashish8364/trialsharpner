const myform = document.querySelector("#my-form");

myform.addEventListener("submit", onsubmit);

function onsubmit(e) {
  e.preventDefault();
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var mobile = document.getElementById("mobile").value;

  let myobj = {
    Name: name,
    Email: email,
    Mobile: mobile,
  };
  axios
    .post(
      "https://crudcrud.com/api/ec68fbc80b9944609a9b73cd65d9881b/appointments",
      myobj
    )
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
  let myobjser = JSON.stringify(myobj);
  localStorage.setItem(myobj.Email, myobjser); //saving in local storage too for checking
  showonscreen(myobj);
}
document.addEventListener("DOMContentLoaded", () => {
  axios
    .get(
      "https://crudcrud.com/api/ec68fbc80b9944609a9b73cd65d9881b/appointments"
    )
    .then((r) => {
      for (var i = 0; i < r.data.length; i++) {
        showonscreen(r.data[i]);
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

function showonscreen(myobj) {
  const pe = document.getElementById("ulist");
  const ce = document.createElement("li");
  ce.textContent = myobj.Name + "-" + myobj.Email + "-" + myobj.Mobile;
  const db = document.createElement("input");
  const eb = document.createElement("input");
  db.type = "button";
  db.value = "delete";
  eb.type = "button";
  eb.value = "Edit";
  db.onclick = () => {
    localStorage.removeItem(myobj.Email);
    axios
      .delete(
        `https://crudcrud.com/api/ec68fbc80b9944609a9b73cd65d9881b/appointments/${myobj["_id"]}`
      )
      .catch((err) => console.log(err));
    pe.removeChild(ce);
  };
  eb.onclick = () => {
    var name1 = myobj.Name;
    var email1 = myobj.Email;
    var mobile1 = myobj.Mobile;
    document.getElementById("name").value = name1;
    document.getElementById("email").value = email1;
    document.getElementById("mobile").value = mobile1;

    localStorage.removeItem(myobj.Email);
    pe.removeChild(ce);
  };
  ce.appendChild(db);
  ce.appendChild(eb);
  pe.appendChild(ce);
}
