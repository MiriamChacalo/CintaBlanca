//Funciones

//Vanilla js
// var num1 = 10
// var num1  = 'fhiuafsd'

//ECMA 5
// let num2 = 10 
//     num2 = 'ghjsdlkgd'

// vanillajs
// function saludo (){

//     console.log('hola Ricardo')
// }

// saludo()

//ECMA 5 Arrow fuction
const saludar2 = (nombre, edad) => {

    console.log("Hola " + nombre + ' y tienes la edad de: ' + edad)
}

//        nombre, edad   
saludar2('Ricardo', 22)
saludar2('Oliver', 27)
saludar2('Dana', 29)


const sum = (x, y) => {
console.log(x + y)
}

sum(50, 100)


//Van hacer una funcion que nos de el perimetro de un cuadrado
// Area de un reactangulo
// Area de un triangulo


const perimetro = (l) => {
    console.log("perimetro del cuadrado " + l * 4)
    }
    
    perimetro(50)


    const areaT = (b , h) => {
        console.log( "area de triangulo " + b * h / 2)
        }
        
        areaT(5, 4)

        const areaR = (b, h) => {
            console.log( "area de un rectangulo " + b * h)
            }
            
            areaR(50, 40)



            
            // const sum = (x, y) => {
    
            //     return x + y
             
            //  }
             
            //  // sum(50, 100)
            //  // console.log(sum(10,15))
             
            //  //funcion como parametro
            //  // console.log( sum(sum(50, 5), 10))
             
             
            //  //Van hacer una funcion que nos de el perimetro de un cuadrado
             
            //  const perimetro = (l) => {
            //         return l * 4
            //  } 
             
            //  // console.log(perimetro(4))
            //  // Area de un reactangulo
             
            //  const areaRectangulo = (b, h) => {
            //      // console.log(b)
             
            //     return b * h
            //  }
            //  // console.log(b)
            //  console.log(areaRectangulo(10,5))
             
            //  // Area de un triangulo
             
            //  const areaTriangulo = (b, h) => {
             
            //      return (b * h)/ 2
            //  }
             
            //  // console.log(areaTriangulo(50, 60))
             
            //  console.log(sum(areaRectangulo(10, 5), areaTriangulo(50, 60)))