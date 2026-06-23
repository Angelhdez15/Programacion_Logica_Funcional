const datos={
    nombre:"Dany",
    edad:40,
    ciudad:"Balancan",
    intereses:["React","JS"]
};

//Ocultar propiedades
Object.defineProperty(datos,"edad",{enumerable:false});
console.log(datos)
console.log(Object.keys(datos)) 
console.log(Object.getOwnPropertyNames(datos))

function deepFreeze(obj){
    //Obtener objeto
    if(obj===null || typeof obj !== "object" || Object.isFrozen(obj)){
        return obj;
    }
    //obtener todo el objeto
    const propiedadesObjeto=Object.getOwnPropertyNames(obj);
    //Recorrer cada una de las propiedades
    for(let nombres of propiedadesObjeto){
        const propiedadHijo=obj[nombres];

        //Aplicamos la funcion recursiva
        if(propiedadHijo && typeof propiedadHijo === 'object'){
            deepFreeze(propiedadHijo);
        }
    }
    //congelamos todo el objeto con sus hijos
    return Object.freeze(obj);
}

//Pasar el objeto a la funcion recursiva
const datosInmutables=deepFreeze(datos);

const nuevoNombre=datosInmutables.ciudad="Tenosique";
const newInteres=datosInmutables.intereses.push("Java");

console.log(nuevoNombre);
console.log(newInteres);
