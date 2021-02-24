"use strict"
/*
// convertir grados fahrenheit a celcius 
let faren = 90;
let c = (faren - 32) * 5 / 9;
console.log("la temperatura en grados celcius es: " + c);

// conversion de grados centigrados a kelvin

let c = 32;
let kelvin = c + 273.15;
console.log(kelvin);

//conversion de grados celcius a kelvin 

let celcius = 32;
let kelvin1 = 273.15 - celcius;
console.log(kelvin1);

// celcius a fahrenheit

let cel = 25;
let far = (cel * (9 / 5)) + 32;

console.log('La conversion a grados fahrenheit es: ' + far);

// tipos de datos
let nombre = 'Geudiel';
let apellido = 'Giraldo';
let nombreCompleto = nombre + ' ' + apellido;
console.log(nombreCompleto + " Bienvenido a este maravilloso mundo");

let a = 5;
let b = 20;

console.log(a + b);

let activo = true;
let despedido = false;
console.log(activo + despedido);
*/
//condicionales
//let nota = 65;
// condicional simple
/* 
if (nota > 60) {
    console.log('aprovaste la clase')
}
*/
// condicional forma 1
/*
if (nota >= 60) {
    console.log('Aprovaste la materia');
} else {
    if (nota < 50) {
        console.log('por favor estudie más');
    } else {
        console.log("el alumno no aprueba la clase");
    }
}
console.log('fin del programa');
*/

// condicional forma 2
/*
if (nota >= 60) {
    console.log('Aprovaste la materia');
} else if (nota < 50) {
    console.log('Por favor estudie mas')
} else {
    console.log('El alumno no aprueba la materia');
}
console.log('fin del programa');
*/

// condicionales anidadas
/*
let nota = 50;
let notaLetra = "";

if (nota >= 90) {
    notaLetra = "A";
} else if (nota >= 80) {
    notaLetra = "B";
} else if (nota >= 70) {
    notaLetra = "C";
} else if (nota >= 60) {
    notaLetra = "D";
} else {
    notaLetra = "F";
}
console.log(nota + " Es igual a: " + notaLetra);
*/

// sentencia switch
/*
let dia = 7;

switch (dia) {
    case 0:
            console.log("domingo");
        break;
    case 1:
        console.log("lunes");
    break;
    case 2:
        console.log("martes");
    break;
    case 3:
        console.log("miercoles");
    break;
    case 4:
        console.log("jueves");
    break;
    case 5:
        console.log("viernes");
    break;
    case 6:
        console.log("sabado");
    break;
    default:
    console.log("no es un dia valido");
        break;
}
*/

// igual al switch anterior pero utilizando condicionales if el anidados
/*
let dia = 5;

if (dia === 0) {
    console.log("domingo")
}else if (dia === 1) {
    console.log("lunes")
} else if (dia === 2) {
    console.log("martes")
} else if (dia === 3) {
    console.log("miercoles")
} else if (dia === 4) {
    console.log("jueves")
} else if (dia === 5) {
    console.log("viernes")
} else if (dia === 6) {
    console.log("sabado")
}else{
    console.log("no es un dia valido")
}
*/

// ciclo while 
/*
let suma = 0;
let i = 0;

while (i <= 5) {
    // otra forma 
    //suma = suma + i;
    suma += i;
    // i = i +1
    // i += 1;
    i++;
    console.log("El resultado de la suma es: " + suma);
}
*/
/*
let gasolina = 100;

while (gasolina > 0) {

    console.log("la gasolina restante es: " + gasolina);
    // gasolina = gasolina -1
    gasolina--;
}
console.log("ya no tiene gasolina el vehiculo");
*/

//ciclo for
/*
let base = 4;
let limite = 10;
for (let i = 1; i <= limite; i++) {
    //let resultado = 2 * i;
    let = resultado = base * i;
    console.log(base + " x " + i + " = " + resultado);
    //console.log("2 x " + i + " = " + resultado)
}
*/
// funciones
/*
//declaracion de funciones
function sumar(a, b) {
    console.log(a + b);
}
// llamado de la funcion sumar
sumar(5, 2);

function calcularNota(nota) {

    let notaLetra = "";

    if (nota >= 90) {
        notaLetra = "A";
    } else if (nota >= 80) {
        notaLetra = "B";
    } else if (nota >= 70) {
        notaLetra = "C";
    } else if (nota >= 60) {
        notaLetra = "D";
    } else {
        notaLetra = "F";
    }
    console.log(nota + " Es igual a: " + notaLetra);
}
// llamado de la funcion con paramnetros calcular nota
calcularNota(100);
calcularNota(80);
calcularNota(59);
*/
// arreglos
/*
let autos = ["ferrari", "mazda", "gtr"];

console.log(autos);

let personas = ['jose', 'maria', 'pedro'];
let salarios = [1000, 1200, 3000]


for (let i = 0; i < personas.length; i++) {
    console.log('la persona ' + personas[i] + ' tiene un salario de ' + salarios[i]);

}
*/
// numero mayor
/*
let numeros = [1, 6, 4, 8, 2, 7, 10, 3, 5];
let mayor = -999999;

for (let i = 0; i < numeros.length; i++) {


    if (numeros[i] > mayor) {
        mayor = numeros[i];
    }

}
console.log('El numero mayor es: ' + mayor);
*/
/*
let numeros = [1, 6, 4, 8, 2, 7, 10, 3, 5];
for (let i = 0; i < numeros.length; i++) {
    
    let numero = numeros[i];
    if (numero % 2 === 0) {
        console.log(numero + ' Es par');
    } else {
        console.log(numero + ' Es impar');
    }
}

/*
let numeross = [Math.floor(Math.random() * 100)];
console.log(numeross);
*/
//guia para ejercicios de arrays 
/*
let limite = prompt("Digita el limite");
let numeros = [];
for (let i = 0; i < limite; i++) {
    //numeros[i] = parseInt(prompt("Digita un numero"));
    numeros.push(parseInt(Math.random() * 15 + 1));
    if (numeros[i] % 2 === 0) {
        console.log(numeros[i] + ' Es par');
    } else {
        console.log(numeros[i] + ' Es impar');
    }
    //  console.log(numeros[i]);
}
*/
// tabla de multiplicar
/*
for (let i = 1; i <= 5; i++) {
    let renglon = '';
    for (let j =  1; j <= 5; j++) {
        renglon += `${j * i } - `;

    }
    console.log(renglon);
}
*/
// funciones
/*
function max(a, b, c) {
    let mayor;

    if (a > b) {
        if (a > c) {
            mayor = a;
        } else {
            mayor = c;
        }
    } else {
        if (b > a) {
            mayor = b;
        } else {
            mayor = c;
        }
    }

    return mayor;
}

let mayor = max(6, 2, 5);
console.log(mayor);
*/

// nombre mas largo 
/*
function masLargo(arr) {

    let nombreLargo = '';

    for (let i = 0; i < arr.length; i++) {

        let nombre = arr[i];

        if (nombre.length > nombreLargo.length) {
            nombreLargo = nombre;
        }

    }
    return nombreLargo;
}

let heroes = ['Deadpool', 'Ciclope', 'Magneto', 'Xavier'];

let heroeLargo = masLargo(heroes);
console.log(heroeLargo);
*/
// funcion para filtar por letra inicial

function filtrarPorLetra(arr, letra) {

    let nuevoArr = [];

    for (let i = 0; i < arr.length; i++) {

        let nombre = arr[i];

        if (nombre[0] === letra) {
            nuevoArr.push(nombre);
        }

    }

    return nuevoArr;
}
// CaSeNsItIvE
let heroes = ['Doom', 'Dr. Strange', 'Hulk', 'She Hulk', 'Spiderman', 'Captain Marvel'];


let heroesCon = filtrarPorLetra(heroes, 'C');
console.log(heroesCon); // She Hulk, Spiderman