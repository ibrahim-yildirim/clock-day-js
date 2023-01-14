let inputName = prompt("Lütfen isminizi giriniz: ")
let firstName = document.querySelector("#name")
console.log(firstName)
firstName.innerHTML = inputName;


function showTime(){
    let clock = document.querySelector("#clock");
    let dayName = document.querySelector("#dayName");
    var date = new Date();
    let hours = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let days = ['Pazar','Pazartesi','Salı','Çarşamba','Perşembe','Cuma','Cumartesi'];
    let day = days[date.getDay()];

    clock.innerHTML = `${("0" + hours).substr(-2)}:${("0" + min).substr(-2)}:${("0" + sec).substr(-2)}`;
    dayName.textContent = `"${day}"`;
};

setInterval(showTime, 1000);
