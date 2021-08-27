var numeroU = parseInt(prompt( "inserisci un numero :"));

if ( numeroU % 2 == 0 ) {
    console.log(numeroU);
}
    else {
        numeroS = (numeroU + 1);
        console.log(numeroS)
    }
    while( isNaN(numeroU) ) {
        numeroU = parseInt(prompt( "inserisci un numero :"));
    }