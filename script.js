var box=document.createElement("div");
box.style.textAlign = "center";
box.style.marginTop = "90px";

var h1=document.createElement("h1");
h1.style.textAlign = "center";
h1.innerHTML="Covid Information";
h1.style.marginTop="70px"

var input=document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("id", "country");
input.setAttribute("placeholder", "Enter the country name");

var button=document.createElement("button");
button.setAttribute("type", "button");
button.classList.add("btn","btn-primary");
button.innerHTML="Search";
button.style.marginLeft="8px";
button.addEventListener("click",details);

var active=document.createElement("div");
active.setAttribute("id", "active");
active.style.marginTop="50px"
var Death=document.createElement("div");
Death.setAttribute("id", "Death");
var Recovered=document.createElement("div");
Recovered.setAttribute("id", "Recovered");

box.append(input,button,active,Death,Recovered);
document.body.append(h1,box);

// function prom(){
//     return new Promise((resolve,reject)=>{
//         resolve()
//     });
// }

async function details(){
var res=document.getElementById("country").value;
var url=`https://api.covid19api.com/total/dayone/country/${res}`;
try{
 var data=await fetch(url);
 var origin=await data.json();
 var index=origin.length-1;
 active.innerHTML=`No.of Active Cases: ${origin[index].Active}`;
 Death.innerHTML=`No.of Death Cases: ${origin[index].Active}`;
 Recovered.innerHTML=`No.of Recovered Cases: ${origin[index].Deaths}`;
}catch{
    active.innerHTML=" ";
 Death.innerHTML=" ";
 Recovered.innerHTML=" ";
alert("Please Enter the Valid Country")
}
}
