//Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero. Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
//- il prezzo del biglietto è definito in base ai km (0.21 € al km)
//- va applicato uno sconto del 20% per i minorenni
//- va applicato uno sconto del 40% per gli over 65.
//- L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.


// Chiediamo all'utente il numero di km che il passeggero vuole percorrere

let km = parseInt(prompt("Quanti km vuole percorrere?"));

// Chiediamo all'utente l'età

let età = parseInt(prompt("Quanti anni ha il passeggero?"));

// Prezzo biglietto x km

const prezzoPerKm = 0.21;

// Calcolo del prezzo del biglietto

let prezzototale = km * prezzoPerKm;
console.log(prezzototale);


