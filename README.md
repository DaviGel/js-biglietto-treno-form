# Biglietto del Treno Form

Logica del calcolo del prezzo del biglietto ed eventuale scontistica

1. Dichiaro tre variabili: scontoMinori, scontoAnziani e prezzoKilometro in cui salvo i relativi valori.
2. Chiedere all'utente, tramite un `prompt`, il n° di km da percorrere e salvarlo in una variabile chiamata kilometri. Convertire il valore di kilometri da stringa a numero tramite la funzione `Number()`.
3. Chiedere all'utente, tramite un `prompt`, l'età del passeggero e salvarla in una variabile chiamata etaPasseggero. Convertire il valore di etaPasseggero da stringa a numero tramite la funzione `Number()`.
4. SE etaPasseggero è un numero e kilometri è un numero e kilometri è > 0 e etaPasseggero è > di 0 e <= di 130 dichiaro la variabile prezzoBiglietto che equivale a kilometri \* prezzoKilometro. SE etaPasseggero < 18 a prezzoBiglietto sottraggo (prezzoBiglietto \* scontoMinori) / 100. ALTRIMENTI SE etaPasseggero è > di 65 a prezzoBiglietto sottraggo (prezzoBiglietto \* scontoMinori) / 100. Stampo in console prezzoBiglietto convertito in numero decimale a due cifre col metodo toFixed(2). ALTRIMENTI stampo in console il seguente messaggio d'errore: "Inserire i km validi e un'età valida in formato numerico!".

Implementazione estetica del programma

MILESTONE 1:

5. Creo due input che prendano come parametro i km da percorrere e l'età del passeggero.
6. Creo un bottone che stampi in console il prezzo del biglietto.

MILESTONE 2:

7. Creo un form che prenda in input Nome e Cognome del passeggero e lo salvi nella variabile nomePasseggero, i km da percorrere e li salvi nella variabile kilometri e l'età del passeggero e la salvi nella variabile etaPasseggero.
8. Il bottone che prima stampava in console il prezzo del biglietto adesso in più al suo `click` stampa in pagina il bliglietto del passeggero contenente il recap dei dati più il prezzo finale del biglietto. Formattare il prezzo del biglietto col metodo `toFixed(2)` per visualizzarlo con massimo due decimali.

_Created by Davide Geloso_
