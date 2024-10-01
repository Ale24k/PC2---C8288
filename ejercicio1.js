
/* Se crea la clase simulación de servidor que define las propiedades como solicitudes, cola, 
tiempo, estado. Se establecen los tiempos que tomaran las solicitudes en ser procesadas
, porcentajes de error y tiempo de demora. Las funciones iran dentro de la clase puesto que todo
ira simulado dentro de este servidor artificial  */

class SimulacionServidor {
    constructor() {
        this.cola = new Cola();
        this.maxConcurrentes = 5;
        this.procesando = 0;
        this.temporizador = new Temporizador();
        this.activo = true;
    }
}
    generarSolicitud(id, callback) {
        const tiempo = Math.floor(Math.random() * 5) + 1; 
        const fallo = Math.random() < 0.2; 

        this.temporizador.agregarTrabajo(tiempo, () => {
            if (fallo) {
                callback(`Solicitud ${id} falló en ${tiempo} segundos.`);
            } else {
                callback(`Solicitud ${id} procesada correctamente en ${tiempo} segundos.`);
            }
        });
    }

    manejarSolicitudes() {
        const procesar = () => {
            while (!this.cola.estaVacia() && this.procesando < this.maxConcurrentes) {
                const solicitud = this.cola.desencolar();
                this.procesando++;
                this.generarSolicitud(solicitud, (mensaje) => {
                    console.log(mensaje);
                    this.procesando--;
                    procesar();
                });
            }
        }
    }
//hasta aca llegué 