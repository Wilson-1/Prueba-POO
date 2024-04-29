import { Planeta, TipoRecurso } from './Funciones'; 
import { Evento, NaveEspacial } from './Funciones'; 

function imprimirInfoPlaneta(planeta: Planeta): void {
    console.log(`Planeta { nombre: '${planeta.nombre}', tipoRecurso: ${planeta.tipoRecurso}, peligro: ${planeta.peligro} }`);
}

function imprimirInfoEvento(evento: Evento): void {
    console.log(evento);
}

function imprimirInfoNave(nave: NaveEspacial): void {
    console.log(nave);
}

const planeta: Planeta = {
    nombre: 'Planeta 1',
    tipoRecurso: TipoRecurso.Agua,
    peligro: false
};

const evento: Evento = { // Declaración de la variable 'evento'
    nombre: 'Tormenta de asteroides',
    afectaSalud: true,
    afectaCarga: false
};

const nave: NaveEspacial = {
    salud: 100,
    capacidadCarga: 50,
    velocidad: 10
};

imprimirInfoPlaneta(planeta);
imprimirInfoEvento(evento); // Uso de la variable 'evento'
imprimirInfoNave(nave);
