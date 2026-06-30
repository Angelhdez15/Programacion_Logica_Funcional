//Caso de Estudio 1
const peticionesHttp = [ 
{ id: "REQ-01", metodo: "GET",  ipOrigen: "192.168.1.50", latenciaMs: 45,   tamanioPayloadKb: 2,    
payload: "SELECT * FROM users" }, 
{ id: "REQ-02", metodo: "POST", ipOrigen: "185.220.10.1", latenciaMs: 2500, tamanioPayloadKb: 1500,
 payload: "DROP TABLE users;--" },  
{ id: "REQ-03", metodo: "GET",  ipOrigen: "192.168.1.55", latenciaMs: 12,   tamanioPayloadKb: 1,    
payload: "ping" }, 
{ id: "REQ-04", metodo: "POST", ipOrigen: "185.220.10.1", latenciaMs: 1800, tamanioPayloadKb: 950,  
payload: "normal_profile_update" }, 
{ id: "REQ-05", metodo: "POST", ipOrigen: "192.168.1.70", latenciaMs: 3100, tamanioPayloadKb: 1200, 
payload: "upload_heavy_image" },    
{ id: "REQ-06", metodo: "GET",  ipOrigen: "172.16.25.40", latenciaMs: 50,   tamanioPayloadKb: 500,  
    payload: "exec MaliciousScript" }  
];
//deep freeze
function deepfreezepeti(obj){
    if(obj===null|| typeof obj !="object" || Object.isFrozen(obj)){
        return obj
    }
    const propiedadesobjecto=Object.getOwnPropertyNames(obj);
    for (let nombres of propiedadesobjecto){
        const propiedadhijo=obj[nombres];
        if(propiedadhijo && typeof propiedadhijo==='object')
            deepfreezepeti(propiedadhijo)
    }
    return Object.freeze(obj)
}
const datoscong=deepfreezepeti(peticionesHttp)
//Predicados
const esMetodoEscritura = peti=>peti.metodo==="POST"
const esLatenciaAlta=peti=>peti.latenciaMs>=200
const esPayloadSospechoso=peti=>peti.payload==="DROP"||"SELECT"||"MaliciusScript"
//Reglas
const detectarAmenazaPotencial=peti=>esMetodoEscritura(peti)&&(esLatenciaAlta(peti)||esPayloadSospechoso(peti))
//Lazy
function* analizadorSeguridadLazy(flujo,regla){
    for(let petis of flujo){
        console.log("Detectando amenaza:",petis.id)
        if(regla(petis)){
            yield petis
        }
    }
}
const Detector=analizadorSeguridadLazy(peticionesHttp,detectarAmenazaPotencial)
const detetecion1=Detector.next().value
console.log("Ameneza potencial:",detetecion1)
const detecion2=Detector.next().value
console.log("Amenaza potencial:",detecion2)
//Reduce para calcular el promedio del kb
const amenazas=[detetecion1,detecion2]
const promedioKB=amenazas.reduce((acumulador,peti)=>acumulador+peti.tamanioPayloadKb,0)/amenazas.length
console.log("Promedio de las amenazas en KB",promedioKB)

//Caso de Estudio 2
const ordenesEnvio = [ 
{ id: "ORD-101", tipo: "estandar", destino: "Tabasco", pesoKg: 4,   distanciaKm: 8,   asegurado: false }, 
{ id: "ORD-102", tipo: "express",  destino: "Veracruz", pesoKg: 22,  distanciaKm: 120, asegurado: true },   
{ id: "ORD-103", tipo: "estandar", destino: "Tabasco", pesoKg: 1.5, distanciaKm: 15,  asegurado: false }, 
{ id: "ORD-104", tipo: "express",  destino: "Tabasco", pesoKg: 5,   distanciaKm: 3,   asegurado: false }, 
{ id: "ORD-105", tipo: "express",  destino: "Yucatán",  pesoKg: 18,  distanciaKm: 250, asegurado: false },  
{ id: "ORD-106", tipo: "express",  destino: "Chiapas",  pesoKg: 35,  distanciaKm: 190, asegurado: true }    
];
//deep freeze
function deepfreezeorden(obj){
    if(obj===null|| typeof obj !="object" || Object.isFrozen(obj)){
        return obj
    }
    const propiedadesobjecto=Object.getOwnPropertyNames(obj);
    for (let nombres of propiedadesobjecto){
        const propiedadhijo=obj[nombres];
        if(propiedadhijo && typeof propiedadhijo==='object')
            deepfreezeorden(propiedadhijo)
    }
    return Object.freeze(obj)
}
const datosO=deepfreezeorden(ordenesEnvio)
//predicados
const esEnvioExpress=orden=>orden.tipo==="express"
const esPaquetePesado=orden=>orden.pesoKg>=15
const esRutaForanea=orden=>orden.destino!="Tabasco"
//Reglas
const esDespachoPrioritario=orden=>esEnvioExpress(orden)&&(esPaquetePesado(orden)||esRutaForanea(orden))
//Lazy
function* despachadorOrdenesLazy(flujos,reglas){
    for(let ordens of flujos){
        console.log("Buscando pedidos prioritario:",ordens.id)
        if(reglas(ordens)){
            yield ordens
        }
    }
}
const prioritario=despachadorOrdenesLazy(ordenesEnvio,esDespachoPrioritario)
const envio1=prioritario.next().value
console.log("Primer envio:",envio1)
const envio2=prioritario.next().value
console.log("Segundo envio:",envio2)
//Reduce
const ordenesP=[envio1,envio2]
const promediokilometros=ordenesP.reduce((acumulador,ordenesP)=>acumulador+ordenesP.distanciaKm,0)/ordenesP.length
console.log("Promedio de kilometros:",promediokilometros)