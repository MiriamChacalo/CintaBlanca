



//Estructura

// for(inicio; limite; secuencia){
//     instruccion
// }

{ console.log ("EJEMPLO")}
 for(var i = 0;  i <= 10; i = i + 1){
     console.log(i)}


// Empiece en 0  su  - 200 limite y la secuencia  5
{ console.log ( "PRIMER EJERCICIO")}
for (var a = 0;  a >= -200; a = a + -5)
{console.log(a)}


// Empiece en 500  su limite 0 y la secuencia 10
{ console.log ( "SEGUNDO EJERCICIO")}
for (var b = 500;  b >= 0; b = b  -10)
{console.log(b)}


// Empiece en -500  su limite 0 y la secuencia 50
{ console.log ( "TERCER EJERCICIO")}
for (var c = -500;  c <= 0; c = c + 50)
{console.log(c)}


// --------------------------Challege Cool-----------------
// Del 1 al 100
// Si el numero es divisible entre 3 ----> Fizz
// Si el numero es divisible entre 5 ----> Buzz
// Si el numeor es divisible entre 3 y 5 ---> FizzBuzz
// Ejemplo: 
// 1 
// 2
// 3 Fizz
// 4
// 5 Buzz
// ...
// 15 FizzBuzz
// 16
//Errores
// 15 fizz
// 15 buzz
// 15 fizzBuzz

// for(var x = -500;  x <= 0 ; x = x +50 ){
//     if(){
//         console.log(object)
//     }
// }
{ console.log ("EJERCICIO FIZZBUZZ")}
for ( var x = 0; x <= 99; x = x + 1)

if (x % 3 == 0 && x % 5 == 0)
{ console.log ("FizzBuzz")}
else if ( x % 3 == 0)
{console.log ("Fizz")}
else if ( x % 5 == 0)
{ console.log ("Buzz")}
else {
    console.log (x)
}