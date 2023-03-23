var form = document.getElementById("addForm");
var itemList = document.getElementById("items");
var filter = document.getElementById("filter");

// Form submit event
form.addEventListener("submit", addItem);
// Delete event
//itemList.addEventListener("click", removeItem);
// Filter event
filter.addEventListener("keyup", filterItems);

// Add item
function addItem(e) {
  e.preventDefault();

  var newItem = document.getElementById("itemname").value;
  var newDescription = document.getElementById("itemdescription").value;
  var newPrice = document.getElementById("itemprice").value;
  var newquantity = document.getElementById("itemquantity").value;
  var ul = document.createElement("ul");
  var li = document.createElement("li");
  let myobj = {
    newItem,
    newDescription,
    newPrice,
    newquantity,
  };
  axios
    .post(
      "https://crudcrud.com/api/a4feff11db244c898f04cb95dfc8e356/Generalstores",
      myobj
    )
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
  ul.id = "subul";
  li.className = "list-group-item";

  li.appendChild(document.createTextNode(newItem));
  li.appendChild(document.createTextNode("            "));
  li.appendChild(document.createTextNode(newDescription));
  li.appendChild(document.createTextNode("            "));
  li.appendChild(document.createTextNode(newPrice));
  li.appendChild(document.createTextNode("            "));
  li.appendChild(document.createTextNode(newquantity));
  li.appendChild(document.createTextNode("            Buy 1"));
  li.appendChild(document.createTextNode("            Buy 2"));
  li.appendChild(document.createTextNode("            Buy 3"));

  ul.appendChild(li);
  itemList.appendChild(ul);
}

document.addEventListener("DOMContentLoaded", () => {
  axios
    .get(
      "https://crudcrud.com/api/a4feff11db244c898f04cb95dfc8e356/Generalstores"
    )
    .then((r) => {
      for (var i = 0; i < r.data.length; i++) {
        show(r.data[i]);
      }
    })
    .catch((err) => {
      console.log(err);
    });
  function show(obj) {
    var ul = document.createElement("ul");
    var li = document.createElement("li");
    ul.id = "subul";
    li.className = "list-group-item";
    var ide = obj["_id"];
    axios
      .get(
        `https://crudcrud.com/api/a4feff11db244c898f04cb95dfc8e356/Generalstores/${ide}`
      )
      .then((r) => {
        var Item = r.data["newItem"];
        var Description = r.data["newDescription"];
        var Price = r.data["newPrice"];
        var quantity = r.data["newquantity"];
        li.appendChild(document.createTextNode(Item));
        li.appendChild(document.createTextNode("            "));
        li.appendChild(document.createTextNode(Description));
        li.appendChild(document.createTextNode("            "));
        li.appendChild(document.createTextNode(Price));
        li.appendChild(document.createTextNode("            "));
        li.appendChild(document.createTextNode(quantity));
        li.appendChild(document.createTextNode("            Buy 1"));
        li.appendChild(document.createTextNode("            Buy 2"));
        li.appendChild(document.createTextNode("            Buy 3"));
        ul.appendChild(li);
        itemList.appendChild(ul);
      });
  }
});

// Filter Items
function filterItems(e) {
  var text = e.target.value.toLowerCase();

  var items = itemList.getElementsByTagName("li");

  Array.from(items).forEach(function (item) {
    var itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
