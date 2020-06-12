// alert('Holaaaa')



// if(condicion){
//     accion en caso que sea verdad
// }else{
//     accion en caso que sea falso
// }

var num = 10


//   ---------------Operadores relaciones ---------------------
//   < menor que
//   <= menor igual
//   > mayor que
//   >= mayor igual
//   == comparar -> nunca lo usen
//   === comparar identicamente
//   !== difente de 



if(num !==  12){
    console.log('Es verdad')
}else{
    console.log('Es falso')
}

// ------------------------- Challenge -------------------
// Investigar que es el MODULO -> % <-
//Si un numero es par o impar 
// P.d este numero lo tiene que dar el usiario.


var numero = prompt ("Ingresa un numero")
var numeroReal = numero % 2

if(numeroReal === 0){
    console.log("par")
} else if (numeroReal === 1){
    console.log ("impar")}
    else {
        console.warn ("Intenta de nuevo numero invalido")
    }


    