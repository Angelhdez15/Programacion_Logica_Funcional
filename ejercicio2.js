const familia = [
{ padre: 'Juan', hijo: 'Luis' },  
{ padre: 'Juan', hijo: 'Pedro' }, 
{ padre: 'Abraham', hijo: 'Juan' },
]
//Dos personas son hermanos si tienen el mismo padre y son personas diferentes. 
const hermanos = familia.filter(hermanoo=>hermanoo.padre === 'Juan');
console.log(hermanos);
//A es abuelo de C, Si A es padre de B y B es padre de C.
//A es Abraham
//B es Juan
//C es Luis
function comparacion(a,b,c){
    const Abuelo = familia.some(relacion => relacion.padre === a && relacion.hijo === b) &&
                     familia.some(relacion => relacion.padre === b && relacion.hijo === c);
    return Abuelo;
}   
console.log(comparacion('Abraham', 'Juan', 'Luis')); 
//Es cierto que Abraham es padre de Juan?
const Padre = familia.some(relacion => relacion.padre === 'Abraham' && relacion.hijo === 'Juan');
console.log(Padre);
//Quien es el padre de Luis?
const padre_Luis = familia.find(padre => padre.hijo === 'Luis');
console.log(padre_Luis);
//Quienes son los hijos de Juan?
const hijos_Juan = familia.filter(hijos => hijos.padre === 'Juan');
console.log(hijos_Juan);
