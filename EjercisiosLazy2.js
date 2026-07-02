//Ejercicio 1
const lecturasSensor = Object.freeze([ 
{ id: 1, tempC: 150, estado: "estable" }, 
{ id: 2, tempC: 850, estado: "estable" },   
{ id: 3, tempC: 920, estado: "mantenimiento" },  
{ id: 4, tempC: 120, estado: "estable" }, 
{ id: 5, tempC: 1100, estado: "estable" },  
{ id: 6, tempC: 1300, estado: "crítico" }   
]); 
//Predicados Atomicos
const noestable=temp=>temp.estado!="estable"
const fahrenheit=temp=>((temp.tempC*9)/5)+32
//Funcion perezosa
function* filtrocritico(filtro,regla){
    for(let temp of filtro){
        console.log("Analizando temperatura critica:",temp.id)
            if(regla(temp)){
                yield temp
            }
        
    }
}
//ejecucion o consultas
const criticos=filtrocritico(lecturasSensor,noestable)
const primercritico= criticos.next().value
console.log("Anomalia critica:",primercritico)
const segundocritico=criticos.next().value
console.log("Anomalia critica:",segundocritico)
//composicion logica
const criticosA=[primercritico,segundocritico]
const grados=criticosA.map(temp=>({
    ...temp,gradosfahreheit:fahrenheit(temp)
}))

console.log("Gradoa fehreheit:",grados)

//Ejercicio 2
const chunksVideo = Object.freeze([ 
{ n: 1, sizeMb: 4,  codec: "h264" }, 
{ n: 2, sizeMb: 25, codec: "raw" },    
{ n: 3, sizeMb: 12, codec: "h265" }, 
{ n: 4, sizeMb: 40, codec: "raw" },    
{ n: 5, sizeMb: 50, codec: "webm" }   
]); 
//Predicados Atomicos
const Noautualizado=video=>video.codec==="raw"
const pesoalto=video=>video.sizeMb>=25
//composicion logica
const videonopermi=video=>Noautualizado(video)&&pesoalto(video)
//Funcion perezosa
function* filtrovideo(filtro,regla){
    for(let video of filtro){
        console.log("Analizando videos:",video.n);
        if(regla(video)){
                yield video
        }
    }
}
//ejecucion o consultas
const videosActualizar=filtrovideo(chunksVideo,videonopermi)
const primeractualizado=videosActualizar.next().value
console.log("Vido a actualizar:",primeractualizado)
const segundovideo=videosActualizar.next().value
console.log("video a actualizar:",segundovideo)
const videoreducido=primeractualizado.sizeMb/2
const videosAct=segundovideo.sizeMb/2
console.log("video reducido con ID:",primeractualizado.n,"Reducido a:",videoreducido)
console.log("video reducido con ID:",segundovideo.n,"Reducido a:",videosAct)

//Ejercicio 3
const aduanaPuerto = Object.freeze([ 
{ manifiesto: "C-01", destino: "Rotterdam", pesoToneladas: 12 },  
{ manifiesto: "C-02", destino: "Tokio",     pesoToneladas: 45 }, 
{ manifiesto: "C-03", destino: "Rotterdam", pesoToneladas: 60 },  
{ manifiesto: "C-04", destino: "Rotterdam", pesoToneladas: 18 },  
{ manifiesto: "C-05", destino: "Lisboa",    pesoToneladas: 22 }   
]);
//Predicados Atomicos
const destinoRott=aduana=>aduana.destino==="Rotterdam"
const pesopermitido=aduana=>aduana.pesoToneladas<=40
//composicion logica
const enviopermitido=aduana=>destinoRott(aduana)&&pesopermitido(aduana)
//Funcion perezosa
function* filtroenvios(filtro,regla){
    for(let aduana of filtro){
        console.log("Analizando envios:",aduana.manifiesto)
        if(regla(aduana)){
            yield aduana
        }
    }
}
//ejecucion o consultas
const envio=filtroenvios(aduanaPuerto,enviopermitido)
const primerenvio=envio.next().value
console.log("Primer envio:",primerenvio)
const segundoenvio=envio.next().value
console.log("Segundo envio:",segundoenvio)

const enviosenviados=[primerenvio,segundoenvio]
const pesototal=enviosenviados.reduce((acumulado,aduana)=>acumulado+aduana.pesoToneladas,0)/enviosenviados.length
console.log("Peso total de los envios:",pesototal)