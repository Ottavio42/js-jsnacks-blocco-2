var numero = [];
somma = 0
for ( var i = 0; i < 5 ; i++ ) {
    var numeroU = parseInt(prompt( "inserisci un numero :"));
    numero.push(numeroU);
    somma += numero[i];   
}
console.log(somma);
