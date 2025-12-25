// Author : Rahul Choudhary
function updateclock(){
    const  now = new Date();


    let hours = now.getHours(); 
    let minutes = now.getMinutes(); 
    let seconds = now.getSeconds();
    let ampm = hours >= 12 ? "PM" : "AM";


    hours = hours % 12 ; 
    hours = hours ? hours : 12 ; 

     hours = String(hours).padStart(2 , "0");
     minutes = String(minutes).padStart(2 , "0");
     seconds = String(seconds).padStart(2 , "0");

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const date = now.toLocaleDateString('en-IN', options);

    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
    document.getElementById("ampm").innerText = ampm;
    document.getElementById("date").innerText = date;
    
}
setInterval(updateclock, 1000);
updateclock();