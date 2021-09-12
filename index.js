//we supose :
//every adult eats and drink a averange of :
//600g o meat
//900 ml of liquid
//children drinks and eat half of the adults
//and if the event lasts more than 5 hours,everyone eats and drinks 30% more


let inputadults = document.getElementById("adults");
let inputchildren = document.getElementById("children");
let inputhours = document.getElementById("hours");
let result = document.getElementById("result");

function calc(){

let eventtime =inputhours.value > 5? 1.3:1 ; 

let meat = inputadults.value*eventtime*600+(eventtime*300*inputchildren.value);
let drink = inputadults.value*eventtime*800+(eventtime*400*inputchildren.value);


result.innerHTML = "<p>We need: </p>"
result.innerHTML += `<p>${meat/1000} Kg of meat and</p>`
result.innerHTML += `<p>${drink/1000} L of drinks </p>`
result.innerHTML += "<p>for this Barbecue </p>"
}

