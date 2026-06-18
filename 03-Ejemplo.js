//Freeze
const nombres={nombre:"dany",rol:"admin"};
nombres.rol="user";
console.log(nombres);

const nombres2=Object.freeze({nombre:"dany",rol:"admin"});
const nombresModificados={...nombres2,rol:"user"};
console.log(nombres2);
console.log(nombresModificados);

const calificaciones=Object.freeze([80,90,100,90]);
const sumaTotal=calificaciones.reduce((acumulador,valor)=>acumulador+valor);
const promedio=sumaTotal/calificaciones.length;
console.log("Calificaciones:",calificaciones);
console.log("Promedio:",promedio);