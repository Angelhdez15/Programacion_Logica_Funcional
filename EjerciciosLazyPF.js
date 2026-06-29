//Ejercio 1
const transacciones = Object.freeze( [ 
{ id: 101, tipo: 'deposito', monto: 60000, pais: 'México' }, 
{ id: 102, tipo: 'retiro',   monto: 15000, pais: 'Colombia' },  
{ id: 103, tipo: 'retiro',   monto: 12000, pais: 'México' }, 
{ id: 104, tipo: 'retiro',   monto: 55000, pais: 'México' },    
{ id: 105, tipo: 'deposito', monto: 90000, pais: 'Francia' }, 
{ id: 106, tipo: 'retiro',   monto: 75000, pais: 'Espana' }    
]
);
//Predicados
const esRetiro=transa=>transa.tipo==='retiro'
const esMontoSospechoso=transa=>transa.monto>=50000
const esZonaDeRiesgo=transa=>transa.pais!='Mexico'
//Regla 
const alertaFraude=transa=>esRetiro(transa) && (esMontoSospechoso(transa)||esZonaDeRiesgo(transa))
//Funcion perezosa
function* filtrartransa(iterable,predicado){
    for(let transas of iterable){
        console.log("Analiza el arreglo:", transas.id)
        if(predicado(transas)){
            yield transas;
        }
    }
}
const filtro=filtrartransa(transacciones,alertaFraude)
const filtrouno=filtro.next().value
const filtrodos=filtro.next().value
console.log("Alerta de fraude",filtrouno)
console.log("Alerta de fraude",filtrodos)

//Ejercicio 2
const aspirantes = Object.freeze( [ 
{ nombre: 'Luis',  examen: 90, entrevista: 80, estudioSocioeconomico: true },   
{ nombre: 'Elena', examen: 70, entrevista: 90, estudioSocioeconomico: true },   
{ nombre: 'Pedro', examen: 95, entrevista: 90, estudioSocioeconomico: false },  
{ nombre: 'María', examen: 85, entrevista: 95, estudioSocioeconomico: true },   
{ nombre: 'Iván',  examen: 90, entrevista: 90, estudioSocioeconomico: true }   
]);
//Proceso Lineal
const puntuaje=aspirantes.map(asp=>({
    ...asp,puntuajeFinal:(asp.examen*0.70)+(asp.entrevista*0.30)}))
//Predicado 
const calificaParaBeca=asp=>asp.puntuajeFinal>=85 && asp.estudioSocioeconomico===true
//Funcion Perezosa
function* filtrarbeca(iterable,predicado){
    for(let beca of iterable){
        console.log("Analizando el arreglo",beca.nombre)
        if (predicado(beca)){
            yield beca;
        }
    }
}
const filtrobeca=filtrarbeca(puntuaje,calificaParaBeca)
const filtrounoA=filtrobeca.next().value
console.log("Primer Alumno con beca:",filtrounoA)
const filtrodosB=filtrobeca.next().value
console.log("Segundo Alumno con beca:",filtrodosB)

const Alumbeca=[filtrounoA,filtrodosB]
const promedio=Alumbeca.reduce((acumulado,alum)=>acumulado+alum.puntuajeFinal,0)/Alumbeca.length
console.log("El promedio es:",promedio)

//Ejercicio 3
const paquetes = Object.freeze([ 
{ tracking: 'ZA1', estado: 'Tabasco', peso: 20 }, 
{ tracking: 'ZA2', estado: 'Veracruz', peso: 18 }, 
{ tracking: 'ZA3', estado: 'Chiapas', peso: 5 }, 
{ tracking: 'ZA4', estado: 'Yucatán',  peso: 25 },  
{ tracking: 'ZA5', estado: 'Tabasco', peso: 10 }, 
{ tracking: 'ZA6', estado: 'Oaxaca',   peso: 30 }  
]);
//Predicados
const esDestinoLocal=paq=>paq.estado==="Tabasco"
const esPesado=paq=>paq.peso>=15
//Regla del negocio
const envioPrioritarioLocal=paq=>!esDestinoLocal(paq) && esPesado(paq)
//Evaluacion Perezosa
function* filtroforneo(iterable,predicado){
    for(let foraneo of iterable){
        console.log("Analizando el arreglo:",foraneo.tracking)
        if(predicado(foraneo)){
            yield foraneo
        }
    }
}
const pedidosforaneosurgente=filtroforneo(paquetes,envioPrioritarioLocal)
const primerenvio=pedidosforaneosurgente.next().value
console.log("Primer envio urgente:",primerenvio)
const segundoenvio=pedidosforaneosurgente.next().value
console.log("Segundo envio urgente:",segundoenvio)
