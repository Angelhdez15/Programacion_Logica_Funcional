const usuarios = [
{ nombre: 'Ana', edad: 25, rol: 'admin', activo: true }, 
{ nombre: 'Carlos', edad: 17, rol: 'user', activo: true }, 
{ nombre: 'Beto', edad: 30, rol: 'user', activo: false }
]
//1.Se necesita enviar un correo a los usuarios que tienen su cuenta deshabilitada. 
//reglas
const cuentaDeshabilitada = usuario => usuario.activo === false;
//combinaciones de hechos   
const enviarCorreo = usuario => cuentaDeshabilitada(usuario);
//consultas
const Correo = usuarios.filter(enviarCorreo);
console.log("usuarios con cuenta inactiva:", Correo);

//2.Para poder entrar a una sección el usuario debe cumplir con dos condiciones estrictas: ser mayor de edad y tener cuenta activa. 
//reglas
const mayoredad=usuario=>usuario.edad>=18;
const cuentaactiva=usuario=>usuario.activo===true;
//combinaciones de hechos
const seccion=usuario=>mayoredad(usuario)&& cuentaactiva(usuario);
//consultas
const entrarseccion=usuarios.filter(seccion);
console.log("usuarios con acceso para entrar:",entrarseccion);

//3.Se requiere una lista de usuarios especiales, si cuenta con un rol de admin y si es menor edad. 
//reglas
const admin=usuario=>usuario.rol==="admin";
const menor=usuario=>usuario.edad<18;
//combinaciones de hechos
const especial=usuario=>admin(usuario)&&menor(usuario);
//consultas
const usuariosEspeciales=usuarios.filter(especial);
console.log("usuarios especiales:",usuariosEspeciales);

//4.Queremos saber quiénes tienen permiso para editar, la regla dicta que, el usuario debe estar activo (o debe ser administrador o mayor de edad). 
//reglas
const administrador=usuario=>usuario.rol==="admin";
const mayorE=usuario=>usuario.edad>=18;
const activo=usuario=>usuario.activo===true;
//combinaciones de hechos
const editar=usuario=>activo(usuario)&&(administrador(usuario)|| mayorE(usuario));
//consultas
const permisoEditar=usuarios.filter(editar);
console.log("usuarios con permiso para editar:",permisoEditar);