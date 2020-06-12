let titulo = document.getElementById('titulo')
let texto = document.getElementById('texto')

let pregunta1 = document.getElementById('pregunta1')
let pregunta2 = document.getElementById('pregunta2')
let pregunta3 = document.getElementById('pregunta3')
let pregunta4 = document.getElementById('pregunta4')

let respuesta1 = document.getElementById('respuesta1')
let respuesta2 = document.getElementById('respuesta2')
let respuesta3 = document.getElementById('respuesta3')
let respuesta4 = document.getElementById('respuesta4')

let card = document.getElementById ("card")

let boton = document.getElementById('boton')

const cambio = () => {
titulo.innerHTML = "Gracias por ordenar en Pizzeria"
texto.innerHTML = "En un momento nos ponemos en contacto contigo! Tiempo de espera 15 min"

console.log(pregunta1.value)
respuesta1.innerHTML = pregunta1.value

console.log(pregunta2.value)
respuesta2.innerHTML = pregunta2.value

console.log(pregunta3.value)
respuesta3.innerHTML = pregunta3.value

console.log(pregunta4.value)
respuesta4.innerHTML = pregunta4.value

let pregutaPinia = pregunta4.value
let piniaMinus = pregutaPinia.toLowerCase()

    // console.log(piniaMinius)

if(piniaMinus === 'con'){
    respuesta4.innerHTML = '😥'
}else if(piniaMinus === 'sin'){
    respuesta4.innerHTML = '🥰'
}else{
    respuesta4.innerHTML = 'Checa tus datos 🤯'
}

card.classList.remove ("none")

}

boton.addEventListener('click', cambio)