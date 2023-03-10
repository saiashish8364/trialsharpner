/*var headertitle=document.getElementById("main-header");
headertitle.textContent="List Of Items";
var pagetitle=document.getElementById("title");
pagetitle.textContent="Item Lister page";
headertitle.style.borderBottom="solid 3px #000";
var ai=document.getElementById("title1")
ai.style.fontWeight="bold";
ai.style.color="green";
var t=document.getElementsByTagName("li");

for(var i=0;i<t.length;i++)
{
    t[i].style.fontWeight="bold";
    t[i].style.backgroundColor="#f4f4f4";
}
t[1].style.backgroundColor="blue";

var thirditem=document.querySelector(
    ".list-group-item:nth-child(3)"
).style.visibility = "hidden";

var thirditem=document.querySelectorAll(
    "li:nth-child(even)"
);
thirditem[0].style.color="green";

var odd=document.querySelectorAll(
    "li:nth-child(odd)"
);
for(var i=0;i<odd.length;i++)
{
    odd[i].style.backgroundColor="green";
}
*/

var itemlist=document.querySelector("#items");
itemlist.parentElement.style.backgroundColor="#f4f4f4";


//child node

itemlist.lastElementChild.textContent="hi";
itemlist.firstElementChild.textContent="1st";
itemlist.lastChild.textContent="changed last element";
itemlist.firstChild.textContent="changed first element";
itemlist.createchild="created";
itemlist.nextSibling.textContent="nextsibiling";
console.log(itemlist.previousElementSibling);
console.log(itemlist.previousSibling);
itemlist.previousElementSibling.style.color="yellow";

var nd=document.createElement('div');
nd.className='hello';
nd.id="hello1";
nd.setAttribute("title","hello div");
var ndt=document.createTextNode("hello world");
nd.appendChild(ndt);

var container=document.querySelector("header .container");
var h1=document.querySelector("header h1");
nd.style.fontSize="30px";
container.insertBefore(nd,h1);

itemlist.firstChild.textContent="Hello World";
itemlist.firstChild.fontWeight="15px";