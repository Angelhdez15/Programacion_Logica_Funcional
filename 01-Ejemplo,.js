const hechos=[
    {relacion:"es_humano",
     sujeto:"Juan"},
    {relacion:"es_humano",
     sujeto:"daniela"},
    {relacion:"estudiante",
     sujeto:"Mario"},
    {relacion:"es_humano",
     sujeto:"yesi"},
     {relacion:"perro",
     sujeto:"guapo"}
]
// Programacion imperativa
const nuevoArreglo=[];
for(let i=0; i<hechos.length;i++){
    if(hechos[i].relacion==="estudiante"){
        nuevoArreglo.push(hechos[i])
    }
}
console.log(nuevoArreglo); 

//Programacion Funcional
//filter para encontrar todas las coincidencias
const datosEstudiantes=hechos.filter(estudiante=>estudiante.relacion==="estudiante");
console.log(datosEstudiantes);
//find para encontrar la primera coincidencia
const datEstudiante=hechos.find(est=>est.relacion==="estudiante");
console.log(datEstudiante);
//some valida para ver si lo que estamos pidiendo cumple la condicion si cumple es verdadero (ture) si no falso(false)
const datEst=hechos.some(estEst=>estEst.relacion==="estudiante");
console.log(datEst);
//map trae todo el arreglo busca todas las coincidencias dependiento el valor de coincidencia es true si no false
const nuevosDatos=hechos.map(nuev=>nuev.relacion==="estudiante");
console.log(nuevosDatos);

//Reglas(Que hara nuestra funcion)
function EsMortal(sujeto){
    const esHumano=hechos.some(humano=>humano.relacion==="es_humano" && humano.sujeto===sujeto)
    return esHumano;
}
console.log(EsMortal("daniela"));
console.log(EsMortal("yesi"));
console.log(EsMortal("guapo"));
