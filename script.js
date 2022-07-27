

/* al ingresar un numero mi algoritmo debe decirme si es par o impar y que cantidad de numeros pares o impares hay hasta ese numero */

let numero = parseInt(prompt("ingrese un numero"));

if (numero % 2 == 0) {
       
       console.log("el numero " + numero + " es par")
}

else  {console.log ("el numero " + numero + " es impar")}


let contador = 0;

let lista = [];

let impares = [];

let pares = [];

while (contador < numero) {

    lista[contador] = Math.floor (Math.random() * (90 - 10) + 10), 
    
    lista.push()
    contador++;
    
}



console.log(lista)

console.log("cantidad de numeros=",lista.length)

for (let indice = 0; indice < lista.length; indice++){

    const valorActual = lista[indice];

    if (indice %2 !==0)

    impares.push(indice)

    if (indice %2 ==0)

    pares.push(indice)
    

};



console.log(impares)

console.log("cantidad de numeros impares hasta el numero ingresado =",impares.length)

console.log(pares)

console.log("cantidad de numero pares hasta el numero ingresado=", pares.length)