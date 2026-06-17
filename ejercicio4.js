const clientes=[
{ nombre: 'Luis', historialLimpio: true, ingresosEstables: true }, 
{ nombre: 'María', historialLimpio: true, ingresosEstables: false }, 
{ nombre: 'Jorge', historialLimpio: false, ingresosEstables: true }
]
//Reglas
const historialbueno=cliente=>cliente.historialLimpio===true;
const ingresobueno=cliente=>cliente.ingresosEstables===true;
const historialfeo=cliente=>cliente.historialLimpio===false;
const ingresosfeo=cliente=>cliente.ingresosEstables===false;
//1.El banco ofrece una tarjeta de crédito "Black" de alta seguridad. Para calificar, el cliente debe demostrar una estabilidad total: tener un historial crediticio limpio y percibir ingresos estables. 
//Combinaciones de hechos
const escabilidad=cliente=>historialbueno(cliente)&&ingresobueno(cliente);
//Consultas
const Black=clientes.filter(escabilidad);
console.log("Clientesn para la tarjeta Black:",Black);

//2. El banco quiere lanzar un programa de reactivación financiera y apoyo. Se busca a clientes que tengan problemas en al menos una de sus áreas: que no tengan un historial limpio o que no tengan ingresos estables. 
//Combinaciones de hechos
const reactivacion=cliente=>historialfeo(cliente)||ingresosfeo(cliente);
//Consultas
const Reactivacion=clientes.filter(reactivacion);
console.log("Clientes para reactivación:",Reactivacion);

//3. El departamento de cobranza e inversiones quiere identificar clientes de riesgo medio para un producto de reestructuración. Buscan perfiles que tengan ingresos estables, pero que no tengan un historial limpio. 
//Combinaciones de hechos
const riesgomedio=cliente=>ingresobueno(cliente)&&historialfeo(cliente);
//Consultas
const RiesgoMedio=clientes.filter(riesgomedio);
console.log("Clientes de riesgo medio:",RiesgoMedio);
//4. Auditoría interna quiere saber si la sucursal está en riesgo operativo. El sistema disparará una alerta general si existe al menos un cliente en la base de datos que tenga un historial manchado y también carezca de ingresos estables (Riesgo Crítico). 
//Combinaciones de hechos
const riesgoCritico=cliente=>historialfeo(cliente)&&ingresosfeo(cliente);
//Consultas
const RiesgoCritico=clientes.some(riesgoCritico);
console.log("Clientes de riesgo crítico:",RiesgoCritico);

//5. Para que el banco reciba una certificación internacional de calidad de cartera, se requiere que todos los clientes cumplan con no ser un perfil fraudulento. Un cliente es seguro si no ocurre que tenga el historial manchado y carezca de ingresos al mismo tiempo.
//combinaciones de hechos
const clienteSeguro=cliente=>(historialbueno(cliente)&&ingresobueno(cliente));
const certificado=cliente=>clienteSeguro    
//Consultas
const ClientesSeguros=clientes.filter(clienteSeguro);
const certificados=clientes.some(clienteSeguro);

console.log("Clientes seguros:", ClientesSeguros);
console.log("certificado obtenido:",certificados)
