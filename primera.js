
 var numero1 = parseInt(prompt("ingrese un numero: "));
 var numero2 = parseInt(prompt("ingrese otro numero: "));
 var pantalla = parseInt(prompt("Que operacion desea efectuar \n 1 suma, 2 resta, 3 multiplicacion, 4   division "));
 var resultado;
 var nombre;
  if (pantalla == 1) {
       resultado = numero1 + numero2;
       nombre = "Suma";
    } else if (pantalla == 2) {
       resultado = numero1 - numero2;
       nombre = "resta"
    } else if (pantalla == 3) {
       resultado = numero1 * numero2;
       nombre = "Multiplicacion";
    } else if (pantalla == 4) {
       resultado = numero1 / numero2;
       nombre = "Division";
    } else {
       document.write("Por favor digite un numero valido entre el 1 y el 4");
  }
  resultado = parseInt(resultado);
  document.write("El resultado de " + nombre + " es: " + resultado);
  
