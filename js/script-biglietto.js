//RICHIESTA VARIABILE INPUT
const age = parseInt(prompt("Inserisci l'età del passeggero"));
const km = parseFloat(prompt("Inserisci i KM da percorrere"));


//CHECK SE IL VALORE E' NEGATIVO, VIENE RICARICATA LA PAGINA E RICHIESTI I VALORI
if (age < 0 || km < 0)
    location.reload();

console.log("età : " + age + " / km : " + km);

//CHECK SCONTO
let ticket;

if (age < 18)
    ticket = ((km * 0.21) * 20) / 100;

else if (age > 65)
    ticket = ((km * 0.21) * 40) / 100;

else
    ticket = km * 0.21;


console.log("prezzo : " + ticket);

