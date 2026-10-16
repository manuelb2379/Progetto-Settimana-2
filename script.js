/*
REGOLE
- Le risposte vanno scritte in JavaScript sotto questo blocco.
- Puoi testare aprendo index.html nel browser e guardando la console (DevTools).
- Workflow consigliato: prima costruisci la Versione Base in HTML/CSS,
  poi torna qui per la Versione Intermedia (generazione griglia da array di prodotti)
  e per la Versione Avanzata (filtri, ordinamento, carrello dinamico, localStorage).
- Cerca solo cose non viste a lezione. Tutto il necessario è già stato spiegato in settimana.
*/


/* VERSIONE INTERMEDIA — array prodotti
   Crea l'array "prodotti" con almeno 12 oggetti.
   Ogni oggetto: nome, categoria, prezzo, rating (1-5), immagine, disponibile.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const prodotti = [

   {
      nome: "Cuffie Wireless Noise-Cancelling",
      categoria: "Audio",
      prezzo: 149.50,
      rating: 1.5,
      immagine: "https://placeholder.com",
      disponibile: true
   },
   {
      nome: "iPad Pro",
      categoria: "Elettronica",
      prezzo: 699.99,
      rating: 2.8,
      immagine: "https://placeholder.com",
      disponibile: true
   },
   {
      nome: "Tastiera Meccanica Logitech",
      categoria: "Informatica",
      prezzo: 89.99,
      rating: 4.2,
      immagine: "https://placeholder.com",
      disponibile: false
   },
   {

      nome: "Monitor Gaming",
      categoria: "Informatica",
      prezzo: 249.00,
      rating: 4.6,
      immagine: "https://placeholder.com",
      disponibile: true
   },
   {
      nome: "Macchina Nespresso",
      categoria: "Elettrodomestici",
      prezzo: 119.99,
      rating: 4.4,
      immagine: "https://placeholder.com",
      disponibile: true
   },
   {
      nome: "Zaino Porta PC",
      categoria: "Accessori",
      prezzo: 39.99,
      rating: 3.1,
      immagine: "https://placeholder.com",
      disponibile: true
   },
   {
      nome: "Smartwatch Sport GPS",
      categoria: "Elettronica",
      prezzo: 199.00,
      rating: 4.3,
      immagine: "https://placeholder.com",
      disponibile: false
   },
   {
      nome: "Delitto e castigo",
      categoria: "Libri",
      prezzo: 20.00,
      rating: 4.7,
      immagine: "https://placeholder.com",
      disponibile: true
   },
   {
      nome: "Mouse Ottico Wireless",
      categoria: "Informatica",
      prezzo: 24.99,
      rating: 4.0,
      immagine: "https://placeholder.com",
      disponibile: true
   },
   {
      nome: "Cassa Bluetooth Portatile",
      categoria: "Audio",
      prezzo: 59.99,
      rating: 4.5,
      immagine: "https://placeholder.com",
      disponibile: true
   },
   {
      nome: "Lampada da Scrivania LED",
      categoria: "Illuminazione",
      prezzo: 29.99,
      rating: 4.2,
      immagine: "https://placeholder.com",
      disponibile: true
   },
   {
      nome: "Il conte di Montecristo",
      categoria: "Libri",
      prezzo: 34.00,
      rating: 4.4,
      immagine: "https://placeholder.com",
      disponibile: false
   }
]
console.log(prodotti)


/* VERSIONE INTERMEDIA — formattaPrezzo(prezzo)
   Funzione che ritorna una stringa tipo "€ 19,99".
   Esempio in console.log: Monitor: € 150,00
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function formattaPrezzo(prezzo){
   let testo = String(prezzo);
   testo = testo.replace ("." , ",");

  if (!testo.includes(",")) {
    testo = testo + ",00";
  } else if (testo.split(",")[1].length === 1) {
    testo = testo + "0";
  }
    return "€ " + testo;
}

for (let i = 0; i < prodotti.length; i++) {
  console.log(prodotti[i].nome + ": " + formattaPrezzo(prodotti[i].prezzo));
}


/* VERSIONE INTERMEDIA — stelline(rating)
   Funzione che ritorna una stringa di stelline piene/vuote.
   Esempio: rating 3 → "★★★☆☆"
   Esempio in console.log: Monitor: rating 3 → "★★★☆☆"
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function stelline(rating) {
   let stelle = Math.round(rating);
   let result = "";

   for (let i = 0; i < 5; i++) {
    if (i < stelle) {
      result = result + "★";
    } else {
      result = result + "☆";
    }
  }

  return result;
}

for (let j = 0; j < prodotti.length; j++) {
  console.log(prodotti[j].nome + ": rating " + prodotti[j].rating + " → " + stelline(prodotti[j].rating));
}


/* VERSIONE INTERMEDIA — Filtro per categoria
   Funzione che riceve il parametro categoria e filtra l'array prodotti mostrando solo i prodotti della categoria ricevuta
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function cat(categoria) {
   for(let i = 0; i < prodotti.length; i++)
      if(prodotti[i].categoria === categoria){
         console.log(prodotti[i].nome);
      }
}

cat('Informatica');

/* VERSIONE INTERMEDIA — Filtro disponibilità e rating
   Funzione che genera un array filtrato dall'array prodotti, mostrando soltanto i prodotti disponibili con rating >= 3
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let filter = [];

function filtro(){
   for(let i = 0; i < prodotti.length; i++){
      if (prodotti[i].disponibile === true && prodotti[i].rating >= 3){
         filter.push(prodotti[i]);
      }
   }
}
filtro()
console.log(filter)
/* --------------------------------------------------------------

/* VERSIONE AVANZATA — renderProdotti(lista)
   Funzione che, dato un array di prodotti, genera la griglia nel DOM.
   Niente HTML hard-coded per i prodotti: tutto generato dal JavaScript.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/* VERSIONE AVANZATA — Aggiungi al carrello
   Quando si clicca il bottone "Aggiungi al carrello", incrementa il contatore
   nell'header (Carrello (0) → Carrello (1) → ...).
   Per i prodotti esauriti: bottone disabilitato e testo "Esaurito".
   Suggerimento: usa una closure come visto in aula
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/* VERSIONE AVANZATA — Ordinamento
   Menu a tendina con: Prezzo crescente, Prezzo decrescente, Rating.
   Suggerimento: per rendere più leggibile la select puoi usare optgroup
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/* VERSIONE AVANZATA — Riepilogo carrello
   Pagina carrello con elenco prodotti aggiunti, totale, bottone "Svuota".
   Concetto da scoprire: localStorage.setItem / localStorage.getItem.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/* VERSIONE AVANZATA — localStorage
   Il carrello sopravvive al refresh della pagina.
   Concetto da scoprire: localStorage.setItem / localStorage.getItem.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
