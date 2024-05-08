Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
  -il prezzo del biglietto è definito in base ai km (0.21 € al km)
  -va applicato uno sconto del 20% per i minorenni
  -va applicato uno sconto del 40% per gli over 65.
  
L'output del prezzo finale va messo fuori in forma umana - con massimo due decimali, per indicare centesimi sul prezzo.
Questo richiederà un minimo di ricerca.
Il risultato andrà visualizzato in un apposito elemento <p> del  codice HTML.


-*-*-* Struttura JS *-*-*-
- richiesta input km (controllo che input sia di tipo numero decimale, sia sempre positivo);  
- richiesta età passeggero (controllo che input sia di tipo numero, sia sempre positivo);

- fare condizione che controlla se la variabile "età" sia minore di "18";
  -  calcolo del prezzo del biglietto scontato (( variabile_km * 0,21 ) * 20) / 100;

- fare condizione che controlla se la variabile "età" sia compresa tra "18" e "65";
  -  calcolo del prezzo del biglietto scontato (( variabile_km * 0,21 ) * 20) / 100;
 
- fare condizione che controlla se la variabile "età" sia maggiore di "65";
  -  calcolo del prezzo del biglietto scontato (( variabile_km * 0,21 ) * 40) / 100;
 
- la variabile del costo del biglietto sarà di tipo numero decimale;
