'use strict';

// Sconti
const scontoMinori = 20;
const scontoAnziani = 40;
const prezzoKilometro = 0.21;

// Kilometri
let kilometri = document.getElementById('kilometri');

// Età
let etaPasseggero = document.getElementById('eta-passeggero');

// Nome e cognome
let nomePasseggero = document.getElementById('nome-passeggero');

// Bottone
const myButton = document.querySelector('button[type=button]');

myButton.addEventListener('click', function () {
  kilometri = kilometri.value;
  etaPasseggero = etaPasseggero.text;
  console.log(etaPasseggero);
  nomePasseggero = nomePasseggero.value;

  // Condizione
  if (!isNaN(kilometri) && kilometri > 0) {
    let prezzoBiglietto = kilometri * prezzoKilometro;

    if (etaPasseggero === 'Minorenne') {
      prezzoBiglietto -= (prezzoBiglietto * scontoMinori) / 100;
    } else if (etaPasseggero === 'Over 65') {
      prezzoBiglietto -= (prezzoBiglietto * scontoAnziani) / 100;
    }

    /* N.B. dato che il metodo toFixed() restituisce una stringa, potrei convertire prezzoBiglietto.toFixed(2) in un numero, qualora fosse necessario, tramite la funzione Number() */
    console.log(
      'Il prezzo del biglietto è:',
      Number(prezzoBiglietto.toFixed(2)),
      '€'
    );
  } else {
    console.log("Inserire i km validi e un'età valida in formato numerico!");
  }
});
