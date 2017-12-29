var a = prompt('Podaj pierwszą liczbę:'),
    b = prompt('Podaj drugą liczbę:'),
    value = (a * a) - (2 * a * b) + (b * b);
    
//alert('Wynik równania to: ' + value);
console.log('Wynik równania to: ' + value);

if (value >= 0) {
    //alert('Wynik jest liczbą dodatnią');
    console.log('Wynik jest liczbą dodatnią');
} else if (value <=  0) {
    //alert('Wynik jest liczbą ujemną');
    console.log('Wynik jest liczbą ujemną');
} else {
    //alert('Wynik to liczba 0');
    console.log('Wynik to liczba 0');
}

switch (value) {
case value = 0:
    //alert('Wynik to liczba 0');
    console.log('Wynik to liczba 0');
    break;
default:
    //alert('Wynik jest różny od 0');
    console.log('Wynik jest różny od 0');
}