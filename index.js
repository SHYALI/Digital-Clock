const hour=document.getElementById("hour");
const sec=document.getElementById("sec");
const min=document.getElementById("min");
const ampm=document.getElementById("ampm");

function UpdateClock(){
    let h= new Date().getHours();
    // firstly we get current date from the computer using date "constructor" and use to fetch hour from the date 
    let m= new Date().getMinutes();
    let s= new Date().getSeconds();
    let a= "AM";

    if (h>12)
        h=h-12;
         a="PM";


     hour.innerText=h;
     min.innerText=m;
     sec.innerText=s;
     ampm.innerText=a;

     setTimeout(() => {
        UpdateClock()
     }, 1000);

}
UpdateClock();

