'use strict';

// Sconti
const scontoMinori = 20;
const scontoAnziani = 40;
const prezzoKilometro = 0.21;

// Kilometri
let kilometri = document.getElementById('kilometri');

// Età
let etaPasseggero = document.getElementById('eta-passeggero');

// Bottone
const myButton = document.querySelector('button[type=button]');

myButton.addEventListener('click', function () {
  kilometri = kilometri.value;
  etaPasseggero = Number(etaPasseggero.value);

  // Condizione
  if (
    !isNaN(kilometri) &&
    !isNaN(etaPasseggero) &&
    kilometri > 0 &&
    etaPasseggero > 0 &&
    etaPasseggero <= 130
  ) {
    let prezzoBiglietto = kilometri * prezzoKilometro;

    if (etaPasseggero < 18) {
      prezzoBiglietto -= (prezzoBiglietto * scontoMinori) / 100;
    } else if (etaPasseggero > 65) {
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
