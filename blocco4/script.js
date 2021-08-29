var numeri = [ 10 , 20 , 30 ] ;
somma = 0
for( i = 0 ; i <=3 ; i++ ){
    if( i%2 == 0){
        numeri[i]=0
    }
    else{
        somma += numeri[i];
    }
}
console.log(somma);