// alert('Holaaaa')



// if(condicion){
//     accion en caso que sea verdad
// }else{
//     accion en caso que sea falso
// }




//   ---------------Operadores relaciones ---------------------
//   < menor que
//   <= menor igual
//   > mayor que
//   >= mayor igual
//   == comparar -> nunca lo usen
//   === comparar identicamente
//   !== difente de 


var r1 = prompt("Jugador 1:").toLowerCase()
var r2 = prompt ("Jugador 2:").toLowerCase()

if(r1 === r2){
    console.log ("Empate")
}else if (r1=== "piedra" && r2 === "tijera" || r1 === "tijera" && r2=== "papel" || r1 === "papel" && r2 === "piedra"){
    console.log ("Gana Jugador 1")
}else if (r2=== "piedra" && r1 === "tijera" || r2 === "tijera" && r1=== "papel" || r2 === "papel" && r1 === "piedra"){
    console.log ("Gana Jugador 2")
}else {
    console.error ("Respuesta invalida")
}
