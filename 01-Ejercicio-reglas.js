const cursos =[
{ titulo: 'React Avanzado', categoria: 'Desarrollo', esGratis: false, tieneCertificado: true },  
{ titulo: 'Introducción a UX/UI', categoria: 'Diseño', esGratis: true, tieneCertificado: false },  
{ titulo: 'Node.js y MongoDB', categoria: 'Desarrollo', esGratis: true, tieneCertificado: true },  
{ titulo: 'Figma para Principiantes', categoria: 'Diseño', esGratis: false, tieneCertificado: false}
]
//1.Encontrar los cursos de la categoría “Desarrollo y que además tengan certificado. 
//Reglas 
const cursosDesarrolloCertificado = curso => curso.categoria === 'Desarrollo';
const certificadoTrue = curso => curso.tieneCertificado=== true;

//Combinaciones de hechos
const desarrolloAndCertificado=curso => cursosDesarrolloCertificado(curso) && certificadoTrue(curso);

//Consultas
const resultado = cursos.filter(desarrolloAndCertificado);
console.log('Cursos de Desarrollo con certificado:',resultado);

//2.Buscar cursos completamente gratis o que pertenezcan a la categoría “Diseño”. 
//Reglas
const cursosGratis = curso => curso.esGratis === true;
const cursosDiseno = curso => curso.categoria === 'Diseño';

//Combinaciones de hechos
const gratisOrDiseno = curso => cursosGratis(curso) || cursosDiseno(curso);

//Consultas
const resultadoGratisODiseno = cursos.filter(gratisOrDiseno);
console.log('Cursos completamente gratis o de Diseño:', resultadoGratisODiseno);

//3.Encontrar una lista de cursos, que no tengan certificado. 
//Reglas
const sinCertificado = curso => curso.tieneCertificado === false;

//Combinaciones de hechos
const sinCertificadoCurso = curso => sinCertificado(curso);

//Consultas
const resultadoSinCertificado = cursos.filter(sinCertificadoCurso);
console.log('Cursos sin certificado:', resultadoSinCertificado);

//4.Encuentra los cursos que sean de Desarrollo y que cumplan la siguiente condición de beneficio: (que sean Gratis o que si tengan certificado).
//Reglas
const cursosDesarrollo = curso => curso.categoria === 'Desarrollo';
const cursosGratis = curso => curso.esGratis === true;
const cursosConCertificado = curso => curso.tieneCertificado === true;

//Combinaciones de hechos
const desarrolloYBeneficio = curso => cursosDesarrollo(curso) && (cursosGratis(curso) || cursosConCertificado(curso));

//Consultas
const resultadoDesarrolloYBeneficio = cursos.filter(desarrolloYBeneficio);
console.log('Cursos de Desarrollo que son Gratis o tienen certificado:', resultadoDesarrolloYBeneficio);