var headertitle=document.getElementById("main-header");
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

/**var thirditem=document.querySelector(
    ".list-group-item:nth-child(3)"
).style.visibility = "hidden";

var thirditem=document.querySelectorAll(
    "li:nth-child(even)"
);
thirditem[0].style.color="green";*/

var odd=document.querySelectorAll(
    "li:nth-child(odd)"
);
for(var i=0;i<odd.length;i++)
{
    odd[i].style.backgroundColor="green";
}
