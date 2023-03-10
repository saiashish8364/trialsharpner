var headertitle=document.getElementById("main-header");
headertitle.textContent="List Of Items";
var pagetitle=document.getElementById("title");
pagetitle.textContent="Item Lister page";
headertitle.style.borderBottom="solid 3px #000";
var ai=document.getElementById("title1")
ai.style.fontWeight="bold";
ai.style.color="green";
var t=document.getElementsByClassName("list-group-item");

for(var i=0;i<t.length;i++)
{
    t[i].style.fontWeight="bold";
    t[i].style.backgroundColor="#f4f4f4";
}
t[2].style.backgroundColor="green";