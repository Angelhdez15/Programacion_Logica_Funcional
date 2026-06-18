const transacciones=[
{ id: 1, tipo: 'deposito', monto: 10000 },
{ id: 2, tipo: 'retiro', monto: 6000 },
{ id: 3, tipo: 'retiro', monto: 1500 },
{ id: 4, tipo: 'retiro', monto: 8000 }
]
//1. Filtrar solo las transacciones que sean de tipo "retiro" y superen los $5,000.
//reglas
const transacRetiro=transacion=>transacion.tipo==="retiro"
const cantidad=transacion=>transacion.monto>5000;
//combinaciones de hechos
const filtroriesgo=transacion=>transacRetiro(transacion)&&cantidad(transacion);
//consultas
const transaccionesAltoRiesgo=transacciones.filter(filtroriesgo);
console.log("Transacciones tipo retiro:",transaccionesAltoRiesgo);

//2.Aplicarles una tarifa/multa de penalización del 5% por movimiento de alto riesgo.
//reglas
const penalizacion=transacion2=>transacion2.monto*0.05;
//combinaciones
const transaccionPenalizada=transacion2=>filtroriesgo(transacion2)?penalizacion(transacion2):0;
//consultas
const transaccionesConPenalizacion=transacciones.map(transaccionPenalizada);
console.log("Transacciones con penalización:",transaccionesConPenalizacion);

//3.Calcular el monto total de dinero penalizado que el banco recaudará.
//combinaciones
const totalPenalizado=transacion3=>transaccionPenalizada(transacion3);
//consultas
const montoTotalPenalizado=transacciones.reduce((total, transacion3) => total + totalPenalizado(transacion3), 0);
console.log("Monto total penalizado:", montoTotalPenalizado);
