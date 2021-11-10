// primo esercizio 
// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.

let mail = ['pippo' , 'pluto' , 'paperin' , 'ciao'];

let urMail =  prompt('inserisci la tua Mail');
document.getElementById('ur-mail').innerHTML = urMail;
console.log(urMail);

console.log(mail);

let sentinella = false;
// controllo se la lista delle mail

for (let i = 0 ; i < mail.length && sentinella == false ; i ++ ) {
// controllo se la tua mail fa parte della lista 
    if (mail [i] == urMail) {
        sentinella = true;
    }

    else {
        sentinella = false;
    }
}

if (sentinella) {
    console.log('approvato');
    document.getElementById('approve').innerHTML = 'e-mail approvata';
} else {
    console.log('non approvato');
    document.getElementById('approve').innerHTML = 'e-mail non approvata';

}


// secondo esercizio
// Gioco dei dadi Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.

let playerOne = Math.floor(Math.random() * 6) + 1;
let playerPc = Math.floor(Math.random() * 6) + 1;

console.log('player one : ' + playerOne);
document.getElementById('tuo-ris').innerHTML = playerOne;
console.log('player two : ' + playerPc);
document.getElementById('pc-ris').innerHTML = playerPc;



if (playerPc > playerOne ) {
    console.log('mi dispace hai perso');
    document.getElementById('risultato').innerHTML = 'mi dispace hai perso';
} else if ( playerOne > playerPc ) {
    console.log('complimenti hai vinto!');
    document.getElementById('risultato').innerHTML = 'complimenti hai vinto!';

} else {
    console.log('avete pareggiato');
    document.getElementById('risultato').innerHTML = 'cavolo avete pareggiato';

}