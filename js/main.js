'use strict';

// Sconti
const scontoMinori = 20;
const scontoAnziani = 40;
const prezzoKilometro = 0.21;

// Bottone genera
const bottoneGenera = document.querySelector('button[type=button]');

// Bottone annulla
const bottoneAnnulla = document.querySelector('button[type=reset]');

bottoneGenera.addEventListener('click', function () {
  // Kilometri
  let kilometri = document.getElementById('kilometri').value;

  // Nome e cognome
  let nomePasseggero = document.getElementById('nome-passeggero').value;
  document.getElementById('nome-passeggero-biglietto').innerHTML =
    'Nome passeggero<br />' + nomePasseggero;

  // Età
  let etaPasseggero = document.getElementById('eta-passeggero').value;
  // Qualora volessi selezionare il testo interno potrei usare questa istruzione. Se scegliessi questa strada nelle condizioni sotto potrei selezionare conforntando con le stringhe "Minorenne" o "Maggiorenne" o "Over 65"
  // etaPasseggero = etaPasseggero.options[etaPasseggero.selectedIndex].text;

  // Prezzo biglietto
  let prezzoBiglietto = kilometri * prezzoKilometro;

  document.getElementById('costo-biglietto').innerHTML = null;

  // Condizione kilometri validi
  if (!isNaN(kilometri) && kilometri > 0) {
    // Condizione età passeggero
    if (Number(etaPasseggero) === 1) {
      prezzoBiglietto -= (prezzoBiglietto * scontoMinori) / 100;
    } else if (Number(etaPasseggero) === 3) {
      prezzoBiglietto -= (prezzoBiglietto * scontoAnziani) / 100;
    }
    // Stampa in console
    console.log(
      'Il prezzo del biglietto è:',
      Number(prezzoBiglietto.toFixed(2)),
      '€'
    );
    // Stampa in pagina
    document.getElementById('costo-biglietto').innerHTML =
      Number(prezzoBiglietto.toFixed(2)) + ' ' + '€';
  } else {
    console.log('Inserire i km validi in formato numerico!');
  }

  // Codice Postale
  const min = 10000;
  const max = 99999;
  document.getElementById('cap').innerHTML =
    Math.floor(Math.random() * (max - min + 1)) + min;

  // Mostra Biglietto
  document.getElementById('biglietto').classList.remove('d-none');
});

bottoneAnnulla.addEventListener('click', function () {
  // Nascondi biglietto
  document.getElementById('biglietto').classList.add('d-none');
});
