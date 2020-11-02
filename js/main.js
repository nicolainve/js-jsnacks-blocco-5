/** 
 * JSnack 1
 * Creare un array di oggetti
 * Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
 * Stampare a schermo la bici con peso minore con handlebars.
*/

var bikes = [
    {
        name: 'Canyon',
        weight: 7
    },
    {
        name: 'Specialized',
        weight: 8
    },
    {
        name: 'Trek',
        weight: 9
    }
];

var lighterBike = bikes[0];

for (var i = 1; i < bikes.length; i++) {

    if (bikes[i].weight < lighterBike.weight) {
        lighterBike = bikes[i];
    }
};

var source = $('#bike-template').html();
var template = Handlebars.compile(source);

var context = {
    name: lighterBike.name,
    weight: lighterBike.weight
};

var html = template(context);

$('.container').append(html);


/**
 * JSnack 2
    Partendo da un array di nomi (scelti da voi) creiamo un nuovo array.
    Chiedere due numeri all'utente per definire la posizione iniziale e finale dal quale estrarre i valori dall'array originale.
    Il nuovo array deve contenere gli elementi dell'array originale aventi la posizione (indice array)  compresa tra i due numeri inseriti dall'utente.
*/

var drivers = ['Vettel', 'Raikkonen', 'Hamilton', 'Leclerc', 'Bottas', 'Verstappen'];

var tot = drivers.length - 1;

var min = parseInt( prompt('Inserisci un numero tra 0 e ' + tot) );

var max = parseInt( prompt('Inserisci un numero tra ' + min + ' e ' + tot) );

var newArray1 = [];

for ( var i = 0; i < drivers.length; i++ ) {
    if (min <= i && max >= i) {
        newArray1.push(drivers[i]);
    }
};

$('#drivers').text(newArray1);


/** 
 * JSnack 3
    Creiamo un array di oggetti (scelti da voi)
    Creiamo una copia da questo array di partenza e aggiungiamo ai singoli elementi una nuova proprietà position che contiene una lettera casuale.
    Non dobbiamo modificare l'array iniziale.
*/

var fruits = [
    {
        name: 'Banana',
        color: 'yellow'
    },
    {
        name: 'Orange',
        color: 'orange'
    },
    {
        name: 'Strawberry',
        color: 'red'
    },
    {
        name: 'Grapes',
        color: 'violet'
    }
];

var newArray2 = [];

for (var i = 0; i < fruits.length; i++) {
    var copyObj = {
        name: fruits[i].name,
        color: fruits[i].color,
        letter: randomLetter()
    };

    newArray2.push(copyObj);
};

console.table(fruits);

console.table(newArray2);

function randomLetter() {
    var letters = 'abcdefghijklmnopqrstuvxyz';

    return letters[randomNumber(0, letters.length - 1)];
};

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};