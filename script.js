
somma = 0
for ( var i = 0; i < 5 ; i++ ) {
    var numero = parseInt(prompt( "inserisci un numero :"));

    while ( isNaN( numero ) ){
        numero = parseInt(prompt( "inserisci un numero :"));
    }
    
    somma += numero[i];   
}
console.log(somma);

// METODO WHILE
 var somma = 0;
var i = 1;

while ( i <= 5){
    var numero = parseInt(prompt( "inserisci un numero :"));
    while ( isNaN( numero ) ){
        numero = parseInt(prompt( "inserisci un numero :"));
    }
    somma += numero;
    i++;
}
console.log(somma)

