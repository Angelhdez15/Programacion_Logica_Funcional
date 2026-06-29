//Combinar programacion lazy con funcional
//Definir los predicados atomicos
const esPar=n=>n%2===0;
const multiploCinco=n=>n%5===0;
//Definimos la funcion
function* filtrarNumero(iterable,predicado){
    for(let dato of iterable){
        if(predicado(dato)){
            yield dato;
        }
    }
}

function* generarNumeros(){
    let i=1;
    while (true) yield i++;
}

//Generar los numeros a traves de una variable
const numerosAleatorios=generarNumeros();
const generarPares=filtrarNumero(numerosAleatorios,multiploCinco);

console.log("Primer numero par:",generarPares.next().value)
console.log("Primer numero par:",generarPares.next().value)
console.log("Primer numero par:",generarPares.next().value)


