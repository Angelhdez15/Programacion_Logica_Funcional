export const palabraClave=(texto)=>['if','for','else','function','return'].includes(texto);
export const esNumero=(texto)=>/^[0-9]+$/.test(texto);
export const esOperator=(texto)=>['+','-','*','/','=','==','===','!=','!==','>','<','>=','<=','<','>'].includes(texto);
export const esTexto=(texto)=>/^[a-zA-Z][a-zA-Z0-9]*$/.test(texto);
export const esPalabraclave=(texto)=>palabraClave(texto).includes(texto)
export const esSimbolo = (texto) =>['(', ')','{', '}','[', ']',';',',','.',':'].includes(texto);

export const analizaCodigo=(codigoFuente)=>{
    if(!codigoFuente) return [];
    const revisor = codigoFuente.match(/([a-zA-Z][a-zA-Z0-9]*|[0-9]+|[+\-*/=<>!]+|\S)/g )|| []
    //Transformar en piezas
    return revisor.map((pieza,index)=>{
    let tipo='DESCONOCIDO'
    if(palabraClave(pieza)) tipo="Palabra reservada";
    else if(esOperator(pieza)) tipo='Operador'
    else if(esNumero(pieza)) tipo='Numero'
    else if(esTexto(pieza)) tipo='identificador'
    else if(esSimbolo(pieza)) tipo='Simbolo'

    //Retornamos el objeto
    return{
        id: index,
        valor:pieza,
        tipo:tipo
    }
    })
}