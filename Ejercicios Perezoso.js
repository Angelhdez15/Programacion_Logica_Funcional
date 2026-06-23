//1. Ejercicio . Generador de ID únicos para una base de datos. 
// --- CÓDIGO INICIAL (A TRANSFORMAR) ---  
function generarIds() {  
const ids = [];  
for (let i = 1; i <= 100; i++) { 
ids.push(`TEC-2026-${i}`);  
} 
return ids; // Retorna los 100 IDs saturando memoria de inmediato  
} 
//console.log(generarIds())
//Lazy(peresoso)
function* generadordeID(maximo=100){
for (let i = 1; i <= maximo; i++) { 
 yield `TEC-2026-${i}`;  
  } 
}
const generarid=generadordeID()
console.log(generarid.next().value)
console.log(generarid.next().value)

//2. Ejercicio. Paginación infinita, al hacer scroll, se va cargando de 3 en 3. 
// --- CÓDIGO INICIAL (A TRANSFORMAR) --- 
//const dbPosts = ["Post 1", "Post 2", "Post 3", "Post 4", "Post 5", "Post 6"]; 
function obtenerTodoElFeed(posts) { 
console.log("-> Procesando e indexando todos los posts en el cliente..."); 
return posts.map(p => `<html>${p}</html>`); 
} 
//Lazy(peresoso)
const dbPosts = ["Post 1", "Post 2", "Post 3", "Post 4", "Post 5", "Post 6"]; 
function* obtenerfeed(posts){
console.log("-> Procesando e indexando todos los posts en el cliente...");
for(const post of posts){
  yield `<html>${post}</html>`
}}
const feed=obtenerfeed(dbPosts)
console.log(feed.next().value)
console.log(feed.next().value)

//3. Ejercicio. Buscador de errores críticos en logs de un servidor. 
// --- CÓDIGO INICIAL (A TRANSFORMAR) --- 
//const logsServidor = ["200 OK", "200 OK", "500 ERROR", "200 OK", "500 ERROR", "404 NOT FOUND"] 
function buscarTodosLosErrores(logs) { 
return logs.filter(log => log.includes("500")); // Retorna un array con todos 
}
//Lazy(peresoso)
const logsServidor = ["200 OK", "200 OK", "500 ERROR", "200 OK", "500 ERROR", "404 NOT FOUND"] 
function* buscarerrores(logs){
  for(const log of logs){
      yield log;
    }
  } 

const errores=buscarerrores(logsServidor)
console.log(errores.next().value)
console.log(errores.next().value)
console.log(errores.next().value)

//4. Generador de la serie de Fibonacci. 
// --- CÓDIGO INICIAL (A TRANSFORMAR) --- 
function serieFibonacciEager(limite) { 
let secuencia = [0, 1]; 
for (let i = 2; i < limite; i++) { 
secuencia.push(secuencia[i - 1] + secuencia[i - 2]); 
} 
return secuencia; // Si pides un límite muy grande, truena la memoria 
}
//Lazy(peresoso)
function* fibonachi(){
let a=0
let b=1
  while(true){
    yield a;
    [a,b]=[b,a+b];
  }
}
const seriefibo=fibonachi()
console.log(seriefibo.next().value)
console.log(seriefibo.next().value)
console.log(seriefibo.next().value)
console.log(seriefibo.next().value)

//5. Simulador de carrito de compras: Tienes un lote inmenso de productos y quieres aplicarles un IVA o descuento, pero el cliente en caja va pagando uno por uno de forma síncrona. 
// --- CÓDIGO INICIAL (A TRANSFORMAR) --- 
//const preciosAlmacen = [100, 200, 300, 400, 500]; 
function aplicarIvaATodo(precios) { 
const procesados = []; 
for(let precio of precios) { 
procesados.push(precio * 1.16); 
} 
return procesados; 
}
//Lazy(peresoso)
const preciosAlmacen = [100, 200, 300, 400, 500]; 
function* aplicariva(precios){
  for(let precio of precios){
    yield precio*1.16
  }
}
const IVA=aplicariva(preciosAlmacen)
console.log(IVA.next().value)
console.log(IVA.next().value)
console.log(IVA.next().value)
