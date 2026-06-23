//obtener turnos
let contador = 1;
function obtenerTurnos() {
    //let contador = 1;
    const turno=`Turno:${contador}`;
    contador++; 
    return turno;
}
//console.log(obtenerTurnos());
//console.log(obtenerTurnos());

function* obtenerTurnoY() {
    let contador = 1;
    while(true){
        yield `Turno:${contador}`;
        contador++;
    }
}
const cajero=obtenerTurnoY();
console.log(cajero.next().value);
console.log(cajero.next().value);
console.log(cajero.next().value);

//Procesador de palabras
function procesarPalabra(frase){
    const palabras=frase.split("");
    const resultado=[];
    for(let palabra of palabras){
        console.log(`Procesado completo:${palabra}`)
        resultado.push(palabra.toUpperCase());
    }
    return resultado;
}
const palabrasEscritas=procesarPalabra("Progamacion con JS")
console.log("Resultado:",palabrasEscritas[0])

function* procesarDatos(frase){
    const palabras = frase.split(" ");
    for (let palabra of palabras) {
        console.log(`Procesar Datos: ${palabra}`);
        yield palabra.toUpperCase();
    }
}
const textoLeido = procesarDatos("Solo sa lectura a la primera");
console.log("Solo da lectura a la primera");
console.log("Resultado", textoLeido.next().value);
console.log("Solo da lectura a la segunda");
console.log("Resultado", textoLeido.next().value);