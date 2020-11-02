/** 
 * JSnack 1
 * Creare un array di oggetti
 * Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
 * Stampare a schermo la bici con peso minore con handlebars.
*/

var bikes = [
    {
        name: 'Canyon',
        weight: '7'
    },
    {
        name: 'Specialized',
        weight: '8'
    },
    {
        name: 'Trek',
        weight: '9'
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