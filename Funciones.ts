export interface Planeta {
    nombre: string;
    tipoRecurso: TipoRecurso;
    peligro: boolean;
}

export enum TipoRecurso {
    Agua,
    Tierra,
    etc
}

export interface Evento {
    nombre: string;
    afectaSalud: boolean;
    afectaCarga: boolean;
}

export interface NaveEspacial {
    salud: number;
    capacidadCarga: number;
    velocidad: number;
}
