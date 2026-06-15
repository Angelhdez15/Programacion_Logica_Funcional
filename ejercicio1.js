const cursos =[
{ titulo: 'React Avanzado', categoria: 'Desarrollo', esGratis: false, tieneCertificado: true },  
{ titulo: 'Introducción a UX/UI', categoria: 'Diseño', esGratis: true, tieneCertificado: false },  
{ titulo: 'Node.js y MongoDB', categoria: 'Desarrollo', esGratis: true, tieneCertificado: true },  
{ titulo: 'Figma para Principiantes', categoria: 'Diseño', esGratis: false, tieneCertificado: false}
]

//Encontrar los cursos de la categoría “Desarrollo y que además tengan certificado. 
const Desarrollo_Certificado = cursos.filter(curso => curso.categoria === 'Desarrollo' && curso.tieneCertificado);
console.log(Desarrollo_Certificado);
//Buscar cursos completamente gratis o que pertenezcan a la categoría “Diseño”. 
const Gratis_ODiseño = cursos.filter(curso => curso.esGratis || curso.categoria === 'Diseño');
console.log(Gratis_ODiseño);
//Encontrar una lista de cursos, que no tengan certificado. 
const Sin_Certificado = cursos.filter(curso => !curso.tieneCertificado);
console.log(Sin_Certificado);
//Encuentra los cursos que sean de Desarrollo y que cumplan la siguiente condición de beneficio: (que sean Gratis o que si tengan certificado).
const Desarrollo_GratisOCertificado = cursos.filter(curso => curso.categoria === 'Desarrollo' && (curso.esGratis || curso.tieneCertificado));
console.log(Desarrollo_GratisOCertificado);