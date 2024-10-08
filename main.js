//1 - JAVASCRIPT

//Ejercio 2
function ejercicio_1_2() {
  let a = 5
  let b = 10

  let c = a + b;

  console.log(`El valor de a es ${a}, el valor de b es ${b} y la suma de a + b es ${c}`);
}

//Ejercio 3
function ejercicio_1_3() {

  let nombre = prompt("Por favor, ingresa tu nombre:");

  console.log(`¡Hola, ${nombre}! Bienvenido/a.`);
}

//2 - Operadores lógicos y condicionales

//Ejercio 1
function ejercicio_2_1() {
  let a = 5;
  let b = 10;
  let c;

  console.log(`El valor de a es ${a} y el valor de b es ${b}`);

  if (a > b) {
    c = a;
    console.log(`El mayor es a: ${a}`);
  } else if (b > a) {
    c = b;
    console.log(`El mayor es b: ${b}`);
  } else {
    console.log(`a y b son iguales: ${a}`);
  }
}

//Ejercicio 2
function ejercicio_2_2() {
  let numeroIngresado = parseInt(prompt("Por favor, ingresa un número:"));

  if (numeroIngresado % 2 === 0) {
    console.log(`El número ${numeroIngresado} es par.`);
  } else {
    console.log(`El número ${numeroIngresado} es impar.`);
  }
}

//3 - Operadores de asignación y bucles

//Ejercio 1
function ejercicio_3_1() {
  let variable = 10;

  while (variable > 0) {
    console.log(variable);
    variable -= 1;
  }
}

//Ejercio 2
function ejercicio_3_2() {
  let numero;

  do {
    numero = parseInt(prompt("Por favor, ingresa un número mayor a 100:"));
  } while (numero <= 100);

  console.log(`El número ingresado es: ${numero}`);
}

//4 - Funciones de JavaScript

//Ejercicio 1
function ejercicio_4_1(numero) {
  return numero % 2 === 0;
}

function pruebaEjercicio_4_1() {
  console.log(`5 es par: ${ejercicio_4_1(5)}`);
  console.log(`10 es par: ${ejercicio_4_1(10)}`);
  console.log(`15 es par: ${ejercicio_4_1(15)}`);
  console.log(`20 es par: ${ejercicio_4_1(20)}`);
}

//Ejercicio 2
function ejercicio_4_2(celsius) {
  return celsius * 1.8 + 32;
}

function pruebaEjercicio_4_2() {
  console.log(`0°C es ${ejercicio_4_2(0)}°F`);
  console.log(`100°C es ${ejercicio_4_2(100)}°F`);
  console.log(`25°C es ${ejercicio_4_2(25)}°F`);
}

//5 - Objetos en JavaScript

//Ejercicio 1
function ejercicio_5_1() {
  let persona = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Madrid",
    cambiarCiudad: function (nuevaCiudad) {
      this.ciudad = nuevaCiudad;
    }
  };

  persona.cambiarCiudad("Barcelona");
  console.log(`Nombre: ${persona.nombre}`);
  console.log(`Edad: ${persona.edad}`);
  console.log(`Ciudad actualizada: ${persona.ciudad}`);
}

//Ejercicio 2
function ejercicio_5_2() {
  let libro = {
    titulo: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    año: 1967,
    esAntiguo: function () {
      const añoActual = new Date().getFullYear();
      return (añoActual - this.año) > 10;
    }
  };

  const antigüedad = libro.esAntiguo();
  if (antigüedad) {
    console.log(`El libro "${libro.titulo}" es antiguo.`);
  } else {
    console.log(`El libro "${libro.titulo}" es reciente.`);
  }
}

//6 - Arrays

//Ejercicio 1
function ejercicio_6_1() {
  let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let numerosMultiplicados = [];

  for (let i = 0; i < numeros.length; i++) {
    numerosMultiplicados.push(numeros[i] * 2);
  }

  console.log("Array original:", numeros);
  console.log("Array multiplicado por 2:", numerosMultiplicados);
}

//Ejercicio 2
function ejercicio_6_2() {
  let pares = [];

  for (let i = 1; pares.length < 10; i++) {
    if (i % 2 === 0) {
      pares.push(i);
    }
  }

  console.log("Array de los primeros 10 números pares:", pares);
}


//7. Introducción al DOM

//Ejercicio 1
function ejercicio_7_1() {
  const elementosP = document.querySelectorAll('#pp');
  elementosP.forEach(p => {
    p.style.color = 'blue';
  });
}

//Ejercicio 2
function ejercicio_7_2() {
  const valorCampo = document.getElementById('campoTexto').value;
  alert(`Valor ingresado: ${valorCampo}`);
}

//8. Eventos en DOM

//Ejercicio 1
function agregarEventosLista() {
  const listaItems = document.querySelectorAll('li');
  listaItems.forEach(item => {
    item.addEventListener('click', function () {
      console.log(this.textContent);
    });
  });
}

//Ejercicio 2
function deshabilitarCampo() {
  const campoTexto = document.getElementById('campoTexto2');
  campoTexto.disabled = true;
}

function habilitarCampo() {
  const campoTexto = document.getElementById('campoTexto2');
  campoTexto.disabled = false;
}

//9. LocalStorage

//Ejercicio 1
function guardarCorreo(event) {
  event.preventDefault();
  const correo = document.getElementById('correo').value;
  localStorage.setItem('correo', correo);
  mostrarCorreo();
}

function mostrarCorreo() {
  const correoGuardado = localStorage.getItem('correo');
  const displayCorreo = document.getElementById('displayCorreo');
  const eliminarBoton = document.getElementById('eliminarBoton');

  if (correoGuardado) {
    displayCorreo.textContent = `Correo guardado: ${correoGuardado}`;
    eliminarBoton.style.display = 'inline';
  } else {
    displayCorreo.textContent = '';
    eliminarBoton.style.display = 'none';
  }
}

function eliminarCorreo() {
  localStorage.removeItem('correo');
  mostrarCorreo();
}

//Llamada a eventos

window.onload = function () {
  agregarEventosLista();
  mostrarCorreo();
};