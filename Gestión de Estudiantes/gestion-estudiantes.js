// Crea un programa en JavaScript que permita gestionar un grupo de estudiantes. Cada estudiante debe ser representado como un objeto con las siguientes propiedades:
// nombre (string)
// edad (number)
// notas (arreglo de números)
// activo (booleano)
// Tu programa debe hacer lo siguiente:
// Crear un arreglo de al menos 5 estudiantes con datos de ejemplo.
// Recorrer el arreglo usando un bucle para:
// Mostrar el nombre y promedio de notas de cada estudiante.
// Indicar si el estudiante aprueba (promedio ≥ 3.0) o reprueba.
// Contar cuántos estudiantes están activos.
// Mostrar el estudiante con el mejor promedio.
// Crear una función que reciba el nombre de un estudiante y devuelva toda su información si existe.
// Agregar un nuevo estudiante al arreglo usando una función.
// Eliminar a los estudiantes que están inactivos del arreglo final.

let estudiantes = [
  {
    nombre: "Marlon",
    edad: 20,
    notas: [5, 5, 5],
    activo: true,
  },
  {
    nombre: "Rick",
    edad: 40,
    notas:  [4, 2, 1],
    activo: false,
  },
  {
    nombre: "Morty",
    edad: 21,
    notas:  [1, 1, 1],
    activo: true,
  },
  {
    nombre: "Tiburcio",
    edad: 19,
    notas:  [2, 3, 1],
    activo: false,
  },
  {
    nombre: "Hermenegildo",
    edad: 16,
    notas: [5, 5, 4.5],
    activo: true,
  },
];

let x = 0;
let sumaPromedio = 0;
let estado = 0;
let mejorPromedio = [];
let max = 0;
let ubicacion = 0;

console.group("Estudiantes y promedios");
for (let i = 0; i < estudiantes.length; i++) {
  for (let x = 0; x < 3; x++) {
    sumaPromedio += estudiantes[i].notas[x] / 3;
  }

  if (sumaPromedio >= 3) {
    estadoNota = "| Aprueba";
  } else {
    estadoNota = "| Reprueba";
  }
  if (estudiantes[i].activo == true) {
    estado++;
  }

  if (sumaPromedio > max) {
    max = sumaPromedio.toFixed(2);
    ubicacion = estudiantes[i].nombre;
  }

  console.log(
    `${estudiantes[i].nombre}: ${sumaPromedio.toFixed(2)} ${estadoNota}`
  );

  sumaPromedio = 0;

}



function buscar(nombre) {
    for (let i = 0; i < estudiantes.length; i++) {
      if (estudiantes[i].nombre === nombre) {
        return estudiantes[i];
      }
    }
    return "No existe";
  }
  
  function eliminarInactivos() {
    let activos = [];
    for (let i = 0; i < estudiantes.length; i++) {
      if (estudiantes[i].activo === true) {
        activos.push(estudiantes[i]);
      }
    }
    return activos;
  }




console.groupEnd();
console.log(`Estudiantes activos = ${estado}`);
console.log(`El mejor promedio es el de ${ubicacion} con: ${max}`);

console.log(buscar("Hermenegildo"));
console.log(buscar("Marlon"));

console.group("===Estudiantes activos despues de eliminación===");

console.log(eliminarInactivos());
console.groupEnd()