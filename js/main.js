//sprawdzam czy skrypt jest podpięty
console.log('JS Działa');

//Zmienne

var podstawa = 5;
var wykladnik = 2;

//Tworzymy funkcje - potęgowanie

function potegowanie() {
//    działanie funkcji
    console.log('jestem w ciele funkcji');
    return Math.pow(podstawa, wykladnik);
}

//wywołanie funkcji
potegowanie();

var wynikPotegowania = potegowanie();

console.log(wynikPotegowania);

//przekazywanie parametrow do funkcji

function dodaj (num1, num2) {
    return num1 + num2;
}
console.log(dodaj(podstawa, wykladnik)); 
//zwraca wynik dodawania - 7


//Napisz funkcję, która sprawdzi czy parametr jest stringiem czy liczbą i jeśli jest to ciąg znaków to zamieni go ma liczbę - użyj Google :)
var wartosc1 = '1,2';
var wartosc2 = 1.5;

function convertToNumber(arg) {
//    Są 2 możliwości - albo jest to numer, albo nie - dlatego używamy warunku if-else
    
//    console.log(arg);
//    console.log(typeof arg);
    
//Jesli parametr naszej funkcji to ciag znakow, to zmien go na liczbe zmiennoprzecinkową
    
    if(typeof arg === 'string') {
        
//Zmieniamy przecinek na kropkę
        var convertedNumber = parseFloat(arg.replace(/,/g, '.'));
    } else {
        var convertedNumber = arg;
    }
    
    
//    if(arg.typeof === 'string') {
//        
//    } else {
//        var convertedNumber = arg;
//    }
    return convertedNumber;
}
        
console.log(convertToNumber(wartosc1));
console.log(convertToNumber(wartosc2));
console.log(convertToNumber('10,2220014'));
console.log(convertToNumber(17));
console.log(convertToNumber('12.245'));




