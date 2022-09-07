// let calificaciones = [10, 9, 8, 6, 7, 8 , 5 , 5 , 10 ,9]
//
// function ordenar (arr){
//   return arr.sort((a,b) => a - b)
// }
//
// function aprobados (arr, cal){
//   ordenar(calificaciones)
//   return arr.filter(nota => nota >= cal)
// }
//
// function cantidad (arr, cal){
//   if(arr.includes(cal)){
//     return arr.filter(nota => nota === cal).length
//   }
//
//   return `Ningun alumno obtuvo la nota: ${cal}`
// }
//
// console.log(calificaciones)
// console.log(ordenar(calificaciones))
// console.log(aprobados(calificaciones, 8))
// console.log(cantidad(calificaciones, 2))

let productos = [
  {
    nombre: 'calculadora',
    precio: 25
  },
  {
    nombre: 'cuaderno',
    precio: 30
  },
  {
    nombre: 'lapiz',
    precio: 40
  },
  {
    nombre: 'borrador',
    precio: 15
  },
  {
    nombre: 'plumones',
    precio: 300
  }
]

function crearMensaje (){
  let mensaje = 'Que producto desea comprar?'
  let count = 1

  for(let producto of productos){
    mensaje += `\n${count}. ${producto.nombre} - $ ${producto.precio}`
    count++
  }

  mensaje += `\n${count}. Salir`

  return mensaje
}

// prompt(crearMensaje())

function cantidad (producto){
  return prompt(`Cuantas unidades de ${producto.nombre} desea comprar.`)
}

function subtotal (cantidad, producto){
  alert(`Compro ${cantidad} unidad de ${producto.nombre} por $ ${cantidad * producto.precio}`)
  return cantidad * producto.precio
}

function calcularTotal (arr){
  return arr.reduce((acc, el) => acc + el, 0)
}

let opcion = 0
let total = []

do {
  opcion = parseInt(prompt(crearMensaje()))

  if(opcion === productos.length + 1){
    alert(`Su total fue de $ ${calcularTotal(total)}. \Gracias por su visita.`)
    break
  }

  total.push(subtotal(cantidad(productos[opcion - 1]), productos[opcion - 1]))

} while (true)