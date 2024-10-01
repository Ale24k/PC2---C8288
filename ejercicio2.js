// EJERCICIO 2:


/*  Se define la clase usuarioBase con las propiedades nombre y correo, que luego serán
utilizadas por otras clases utilizando extends
Lo que se hace en esta clase es simplemente definir sus propiedades y crear una función que devuelve
los permisos básicos asignados a este usuario
*/
 
class UsuarioBase {
    constructor(nombre,correo){
        this.nombre = nombre;
        this.correo = correo;
    }
    verPermisos(){
        return ["Permisos básicos"]; // 
    }
}

/*  Seguido de eso, utilizando extends, heredamos las propiedades de la clase usuarioBase incluyendo
también los permisos que tiene el usuario de esa clase, retornamos las funciones correspondientes al
usuario admin y adicional a ello le acoplamos los permisos que ya tenia el usuario básico utilizando 
super.
*/
class Admin extends UsuarioBase {
    constructor(nombre, correo) {
        super(nombre, correo);
    }

    gestionarUsuarios() {
        return 'Gestionando usuarios';
    }

    verPermisos() {
        return [...super.verPermisos(), 'Gestionar usuarios'];
    }
}

/*  Por último se crea el último usuario del sistema, el cual heredará las propiedades base que son nombre
y correo, y además, los permisos que fueron asignados a los demás tipos de usuario. Al final se le sumarán
los permisos especiales para este tipo de usuario en especifico.
*/

class SuperAdmin extends Admin{
    constructor(nombre, correo){
        super(nombre, correo);
    } 
    gestionarSistema(){
        return "Gestionando Sistema";
    }
    verPermisos() {
        return [...super.verPermisos(), 'Gestionar sistema'];
    }

}
/*  La clase gestorPermisos, dejará definido el usuario para luego poder asignarle un tipo de permiso
o rol especifico en el sistema, esto se logrará con ayuda de la herencia, llamando al nombre que fue
definida en una clase inicial anteriormente.
*/
class gestorPermisos {
    constructor(usuario) {
        this.usuario = usuario;
    }

    asignarPermisos() {
        console.log(`Permisos para ${this.usuario.nombre}:`, this.usuario.verPermisos());
    }
}

/* Se le asignan valores a las variables anteriormente definidas para poder realizar las pruebas */


const usuarioBase = new UsuarioBase('Juan', 'juan@upch.pe');
const admin = new Admin('Ana', 'ana@upch.pe');
const superAdmin = new SuperAdmin('Carlos', 'carlos@upch.pe');

/* Se hace uso de la función asignarPermisos para asignarle un tipo de rol a cada usuario y luego
imprimirlo en pantalla para su visualización*/

const gestorUsuarioBase = new gestorPermisos(usuarioBase);
gestorUsuarioBase.asignarPermisos();

const gestorAdmin = new gestorPermisos(admin);
gestorAdmin.asignarPermisos();

const gestorSuperAdmin = new gestorPermisos(superAdmin);
gestorSuperAdmin.asignarPermisos();

/* Utilizando prototipos se añaden nuevos métodos a la clase Admin sin modificar la clase anteriormente
definida*/


Admin.prototype.actualizarConfiguraciones = function() {
    return 'Actualizando configuraciones';
};
console.log(admin.actualizarConfiguraciones());
