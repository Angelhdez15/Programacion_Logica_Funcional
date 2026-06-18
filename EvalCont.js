const consultas=[
    { id: 1, nombre: 'Autenticación', zona: "us-east", consultasPorMinuto: 12000, activo: true, tecnologias: ['Node', 'Redis'] },
    { id: 2, nombre: 'Procesamiento Pagos', zona: "us-west", consultasPorMinuto: 4500, activo: true, tecnologias: ['Java', 'Spring'] },
    { id: 3, nombre: 'Recomendaciones Al', zona: "us-east", consultasPorMinuto: 25000, activo: false, tecnologias: ['Python', 'TensorFlow'] },
    { id: 4, nombre: 'Notificaciones', zona: "eu-central", consultasPorMinuto: 8500, activo: true, tecnologias: ['Node', 'RabbitMQ'] },
    { id: 5, nombre: 'Reportes Históricos', zona: "us-west", consultasPorMinuto: 500, activo: false, tecnologias: ['Python', 'MongoDB'] }
];
//Reglas
const estaActivo=consul=>consul.activo===true
const esZonaUS=consul=>consul.zona==="us-west" || consul.zona==="us-east"
const AltaCarga=consul=>consul.consultasPorMinuto>=10000
const usaNode=consul=>consul.tecnologias.includes("Node")
//Regla A 
const MantenimientoUrgente=consul=>!estaActivo(consul) && AltaCarga(consul)
const requiereMantenimientoUrgente=consultas.filter(MantenimientoUrgente)
console.log(requiereMantenimientoUrgente)
//Regla B
const ServicioCriticoUS=consul=>estaActivo(consul)&&(esZonaUS(consul)||AltaCarga(consul))
const esServicioCritico=consultas.filter(ServicioCriticoUS)
console.log(esServicioCritico)
//Regla C
const migrar=consul=>(esZonaUS(consul)&&usaNode)&&!AltaCarga(consul)
const migrarACloufare=consultas.filter(migrar)
console.log(migrarACloufare)

//Transformacion
const nombresservicio=consultas.filter(ServicioCriticoUS).map(consul=>consul.nombre)
console.log(nombresservicio)

const nombresurgentes=consultas.filter(MantenimientoUrgente).map(consul=>consul.nombre)
console.log(nombresurgentes)

const totalacumulado=consultas.filter(estaActivo).reduce((acumulado,consul)=>acumulado+consul.consultasPorMinuto,0)
console.log(totalacumulado)
