

function suma() {
    var numero1 = parseFloat(prompt("Ingrese el primer número:"));
    var numero2 = parseFloat(prompt("Ingrese el segundo número:"));
    var resultado = numero1 + numero2;
    alert("La suma es: " + resultado);
  }

  function operacionesBasicas() {
    var numero1 = parseFloat(prompt("Ingrese el primer número:"));
    var numero2 = parseFloat(prompt("Ingrese el segundo número:"));
    var suma = numero1 + numero2;
    var resta = numero1 - numero2;
    var multiplicacion = numero1 * numero2;
    var division = numero1 / numero2;
  
    alert("Suma: " + suma + "\nResta: " + resta + "\nMultiplicación: " + multiplicacion + "\nDivisión: " + division);
  }

  
  function cuadrado() {
    var numero = parseFloat(prompt("Ingrese un número:"));
    var resultado = numero * numero;
    alert("El cuadrado de " + numero + " es: " + resultado);
  }

  
  function areaTriangulo() {
    var base = parseFloat(prompt("Ingrese la base del triángulo:"));
    var altura = parseFloat(prompt("Ingrese la altura del triángulo:"));
    var area = (base * altura) / 2;
    alert("El área del triángulo es: " + area);
  }

  
  function numeroMayor() {
    var numero1 = parseFloat(prompt("Ingrese el primer número:"));
    var numero2 = parseFloat(prompt("Ingrese el segundo número:"));
  
    if (numero1 > numero2) {
      alert(numero1 + " es mayor que " + numero2);
    } else if (numero2 > numero1) {
      alert(numero2 + " es mayor que " + numero1);
    } else {
      alert("Los números son iguales.");
    }
  }

  
  function convertirMedidas() {
    var metros = parseFloat(prompt("Ingrese la longitud en metros:"));
    var pulgadas = metros * 39.37;
    var pies = metros * 3.281;
    alert("Longitud en pulgadas: " + pulgadas + "\nLongitud en pies: " + pies);
  }
  

  function convertirTemperatura() {
    var celsius = parseFloat(prompt("Ingrese la temperatura en grados Celsius:"));
    var fahrenheit = (celsius * 9/5) + 32;
    alert("Temperatura en Fahrenheit: " + fahrenheit);
  }

  
  function promedioNotas() {
    var nota1 = parseFloat(prompt("Ingrese la primera nota:"));
    var nota2 = parseFloat(prompt("Ingrese la segunda nota:"));
    var nota3 = parseFloat(prompt("Ingrese la tercera nota:"));
  
    var promedio = (nota1 + nota2 + nota3) / 3;
    alert("El promedio de las notas es: " + promedio);
  }

  
  function descuentoCompras() {
    var precioOriginal = parseFloat(prompt("Ingrese el precio original del producto:"));
    var porcentajeDescuento = parseFloat(prompt("Ingrese el porcentaje de descuento:"));
  
    var descuento = (precioOriginal * porcentajeDescuento) / 100;
    var precioFinal = precioOriginal - descuento;
    alert("El precio final con descuento es: " + precioFinal);
  }

  
  function parImpar() {
    var numero = parseFloat(prompt("Ingrese un número:"));
  
    if (numero % 2 === 0) {
      alert(numero + " es un número par.");
    } else {
      alert(numero + " es un número impar.");
    }
  }

  
  function calcularSalario() {
    var horasTrabajadas = parseFloat(prompt("Ingrese la cantidad de horas trabajadas:"));
    var salarioPorHora = parseFloat(prompt("Ingrese el salario por hora:"));
  
    var salarioTotal = horasTrabajadas * salarioPorHora;
    alert("El salario total es: " + salarioTotal);
  }

  
  function numeroMenor() {
    var numero1 = parseFloat(prompt("Ingrese el primer número:"));
    var numero2 = parseFloat(prompt("Ingrese el segundo número:"));
    var numero3 = parseFloat(prompt("Ingrese el tercer número:"));
  
    var menor = Math.min(numero1, numero2, numero3);
    alert("El número menor es: " + menor);
  }
  