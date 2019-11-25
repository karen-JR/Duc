export class FormData {
    //Personal
    nombre: string = '';
    apellido: string = '';
    nacionalidad: string = '';
    estado_civil: string = '';
    tipo_documento: string = '';
    documento_identidad: number = null;
    no_casa: number = 0;
    lugar_nacimineto: string = '';
    fecha_nacimiento: string = '';
    calle: string = '';
    edificio: string = '';
    sector: string = '';
    ciudad: string = '';
    telefono_residencia: number = null;
    celular: number = null;
    correo: string = '';

    //Datos Actividad Extraoirdinaria 
    tipo_actividad: string = '';
    propia: boolean = null;
    dias: number = null;
    horario: Date = null;
    participacion_acciones: boolean = null; 
    ingresos_promedio_mensuales: number = null;

    //Datos Familiares
    familia: Object[] = [

    ];

    //Datos Educacion
    educacion: Object[] = [

    ];
    per_emergencia: string = '';

    //Datos Comp_Tec
    com_tec: Object[] = [];

    //Datos Idiomas
    idiomas: Object[] = [];
    //Datos experiencia_lab

    experiencia_lab: Object[] = [];
    //Datos referencia_personales

    referencia_personales: Object[] = [];


    clear() {


    }
}

export class Personal {
    nombre: string = '';
    apellido: string = '';
    nacionalidad: string = '';
    estado_civil: string = '';
    tipo_documento: string = '';
    documento_identidad: number = null;
    lugar_nacimineto: string = '';
    fecha_nacimiento: string = '';
    calle: string = '';
    edificio: string = '';
    sector: string = '';
    ciudad: string = '';
    telefono_residencia: number = null;
    no_casa: number = 0;
    celular: number = null;
    correo: string = '';
}

export class Address {
    street: string = '';
    city: string = '';
    state: string = '';
    zip: string = '';
}

export class Familia {
    familia: Object[] = [

    ];
}


export class Educacion {
    per_emergencia: string;
    educacion: Object[] = [

    ];
}
export class Com_Tec {
    com_tec: Object[] = [];
}

export class Idiomas {
    idiomas: Object[] = [];
}

export class Experiencia_lab {
    experiencia_lab: Object[] = [];
}

export class Actividad_extra {
    tipo_actividad: string;
    propia: boolean;
    dias: number;
    horario: Date;
    participacion_acciones: boolean;
    ingresos_promedio_mensuales: number;

}

export class Referencia_personales {
    referencia_personales: Object[] = [];
}


