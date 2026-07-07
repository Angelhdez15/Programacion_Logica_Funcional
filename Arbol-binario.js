const historialCommits = [  
{ version: 1.0, ambiente: "desarrollo" }, 
{ version: 1.1, ambiente: "desarrollo" },  
{ version: 1.2, ambiente: "testing" },  
{ version: 1.3, ambiente: "testing" },  
{ version: 2.0, ambiente: "produccion" },  
{ version: 2.1, ambiente: "produccion" },  
{ version: 2.2, ambiente: "produccion" } ] 

//Predicado para que sea verdadero si el commit es produccion
const ambiente = amb=>amb.ambiente==="produccion" 
//funcion de busqueda binaria si se cumple la regla del predicado, y devuelve verdadero si se cumple  
function busqueda(flujo,regla){
    //indice del rango iquierdo
    let izquierda=0
    //indice del rango derecho
    let derecha= flujo.length-1
    //guarda la posbile respuesta si no se cumple se vuelve -1
    let posiblerespuesta= -1
    //busqueda mientras el rango izquierdo sea menor o igual a derecha
    while(izquierda<=derecha){
        //Calcula el indice medio del rango
        let medio=Math.floor((izquierda+derecha)/2)
        //Verifica si se cumple la condicion de medio
        if(regla(flujo[medio])){
            posiblerespuesta=medio
            derecha=medio-1
        }else{
            izquierda=medio+1
        }
        
    }
    return posiblerespuesta
}
//funcion para encontrar el primer arreglo con produccion si se cumple la regla
function primerproduccion(historial,predicado){
    //obtiene el indice de la primer arreglo si se cumplio el predicado
    const indice=busqueda(historial,predicado)
    if(indice!==-1){
        //si se encuentra devuelve true y el arreglo
        return {encontrado:true, commit:historial[indice]}        
    } else{
        //si no se encontro devuelve false y el arreglo
        return {encontrado:false, commit:historial[indice]}
    }
}
//Formula para calcular la cantidad maxima de busquedad utilizando log2 
const maximo=(n)=>Math.ceil(Math.log2(n))
const resultado=primerproduccion(historialCommits,ambiente)

console.log("Primera de produccion:",resultado)
console.log("Maximo de busquedas:",maximo(historialCommits.length))
console.log("10,0000 busquedas:",maximo(100000),"encontrados")