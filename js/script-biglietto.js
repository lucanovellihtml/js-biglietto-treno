//RICHIESTA VARIABILE INPUT
const age = parseInt(prompt("Inserisci l'età del passeggero"));
const km = parseFloat(prompt("Inserisci i KM da percorrere"));


//CHECK SE IL VALORE E' NEGATIVO O NON UN NUMERO, VIENE RICARICATA LA PAGINA E RICHIESTI I VALORI
if (age < 0 || isNaN(age) || km < 0 || isNaN(km))
    location.reload();

console.log("età : " + age + " / km : " + km);

//CHECK SCONTO
let price_ticket = document.getElementById("price_ticket");

if (age < 18)
    price_ticket.innerHTML = ((km * 0.21) * 20) / 100;

else if (age > 65)
    price_ticket.innerHTML = ((km * 0.21) * 40) / 100;

else
    price_ticket.innerHTML = km * 0.21;


