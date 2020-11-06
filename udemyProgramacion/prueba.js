// tipos de datos
let nombre = 'geu';
let apellido = 'giraldo';
let nombreCompleto = nombre + " " + apellido;
console.log(nombreCompleto);

let a = 10;
let b = 20;
//let resultado = a + b;
console.log(a + b);
//console.log(- -"El resultado de la suma es: ",resultado);
 
let activo = true;
let despedido = false;
    
console.log(activo + despedido); // toma los booleanos y los suma 1 + 0 da 1
  
//var nom = prompt('digite su nombre: ');
//console.log('hola ', nom);

/*var edad = 70;
var resultado = '';

switch(edad) {
	case 5:
		 resultado = "es menor de edad";
		break;
	case 18:
			resultado = "es mayor de edad";
		break;
	case 70:
		resultado = "es adulto mayor";
		break;
	default:
		resultado = " la edad ingresada no exixte intenta nuevamente";
		break;
}

 console.log('el resultado es: '+ resultado);*/

//pasar de farenheit a celsius
/*var f = 90;
var c = (f - 32) * (5/9);
console.log(c);
*/
//pasar de celsius a farenheit
/*var c = 37;
var f = 37 * (9 / 5) + 32;
console.log("convertir "+ c +" grados celsius a "+ f + " grados farenheit");
*/
// ejemplo condiciones anidadas

/*
let nota = 70;
let notaLetra = '';

if (nota >= 90) {
    notaLetra = 'A';
}else if (nota >= 80 ) {
 	notaLetra = 'B';
} else if (nota >= 70) {
	notaLetra = 'C';
} else if (nota >= 60) {
	notaLetra = 'D';
} else if (nota <= 60) {
	notaLetra = 'F';
}

console.log(nota + " Es igual a: " + notaLetra);
*/
/*
let edad = 85;
let resultado = "";

if (edad <= 18) {
    resultado = " es menor de edad";
} else if (edad > 18 && edad <= 60) {
    resultado = "es adulto";
} else if (edad > 60 && edad <= 100) {
    resultado = "es adulto mayor";
} else
    resultado = "la edad no existe";
console.log(resultado);
*/