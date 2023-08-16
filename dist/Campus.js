"use strict";
//! ------------------------------ CAMPER ------------------------------
class Camper {
    constructor(id, nombre, edad, cc, _direccion, estadoRuta, _telefono, tipoContrato, centroEntrenamiento) {
        this.id = id;
        this.nombre = nombre;
        this.edad = edad;
        this.cc = cc;
        this._direccion = _direccion;
        this.estadoRuta = estadoRuta;
        this._telefono = _telefono;
        this.tipoContrato = tipoContrato;
        this.centroEntrenamiento = centroEntrenamiento;
    }
    //todo -- Direccion
    set direccion(direccion) {
        this._direccion = direccion;
    }
    get direccion() {
        return this._direccion;
    }
    //todo -- Telefono
    set telefono(telefono) {
        this._telefono = telefono;
    }
    get telefono() {
        return this._telefono;
    }
    validacionContratar(estadoRuta) {
        if (estadoRuta === true) {
            console.log('El camper ya termino sus estudios, ya puede ser contratado 😊');
        }
        else {
            console.log('El camper aun se encuentra en el proceso de formación 😇');
        }
    }
}
const arrayCamper = [];
const camper1 = new Camper(0, "frontend react", 18, 34343324, "casa 1", true, 313232913, "presencial", "centro 1");
const camper2 = new Camper(1, "backend node", 28, 34343324, "casa 2", false, 43254353543, "remoto", "centro 2");
const camper3 = new Camper(2, "backend flutter", 30, 34343324, "casa 3", true, 313324332232913, "presencial", "centro 5");
const camper4 = new Camper(3, "backend ruby", 17, 34343324, "casa 4", true, 313232932413, "presencial", "centro 5");
const camper5 = new Camper(4, "frontend view", 24, 34343324, "casa 5", false, 313232324913, "remoto", "centro 6");
const camper6 = new Camper(5, "backend Goo", 27, 34343324, "casa 6", false, 313232432913, "presencial", "centro 6");
const camper7 = new Camper(6, "backend java", 22, 34343324, "casa 7", true, 313223432913, "presencial", "centro 6");
arrayCamper.push(camper1, camper2, camper3, camper4, camper5, camper6, camper7);
let centroM = 0;
let centrom = 99999999999999;
//todo -- Centros de entrenamiento Campus
const centroCampus1 = [];
const centroCampus2 = [];
const centroCampus3 = [];
const centroCampus4 = [];
const centroCampus5 = [];
const centroCampus6 = [];
const centroCampus7 = [];
//todo -- Demas arrays
const terminadosRuta = [];
const contratoRemoto = [];
const contratoPresencial = [];
for (let i = 0; i < arrayCamper.length; i++) {
    if (arrayCamper[i].tipoContrato === "remoto") {
        contratoRemoto.push(arrayCamper[i]);
    }
    else if (arrayCamper[i].tipoContrato === "presencial") {
        contratoPresencial.push(arrayCamper[i]);
    }
    else {
        console.log("El tipo de contrato no se encuetra registrado");
    }
    if (arrayCamper[i].estadoRuta) {
        terminadosRuta.push(arrayCamper[i]);
    }
    //? Validacion del tipo de centro
    if (arrayCamper[i].centroEntrenamiento === "centro 1") {
        centroCampus1.push(arrayCamper[i]);
    }
    else if (arrayCamper[i].centroEntrenamiento === "centro 2") {
        centroCampus2.push(arrayCamper[i]);
    }
    else if (arrayCamper[i].centroEntrenamiento === "centro 3") {
        centroCampus3.push(arrayCamper[i]);
    }
    else if (arrayCamper[i].centroEntrenamiento === "centro 4") {
        centroCampus4.push(arrayCamper[i]);
    }
    else if (arrayCamper[i].centroEntrenamiento === "centro 5") {
        centroCampus5.push(arrayCamper[i]);
    }
    else if (arrayCamper[i].centroEntrenamiento === "centro 6") {
        centroCampus6.push(arrayCamper[i]);
    }
    else if (arrayCamper[i].centroEntrenamiento === "centro 7") {
        centroCampus7.push(arrayCamper[i]);
    }
}
//todo -- Sacar la cantidad de campers que hay en cada centro
const longitudes = [
    centroCampus1.length,
    centroCampus2.length,
    centroCampus3.length,
    centroCampus4.length,
    centroCampus5.length,
    centroCampus6.length,
    centroCampus7.length
];
let maxIndex = 0;
let minIndex = 0;
let maxLength = longitudes[0];
let minLength = longitudes[0];
for (let i = 1; i < longitudes.length; i++) {
    if (longitudes[i] > maxLength) {
        maxIndex = i;
        maxLength = longitudes[i];
    }
    if (longitudes[i] < minLength) {
        minIndex = i;
        minLength = longitudes[i];
    }
}
//todo -- Loguear a consola
console.log("--------------------------------REMOTO--------------------------------");
console.log(contratoRemoto);
console.log("--------------------------------PRESENCIAL--------------------------------");
console.log(contratoPresencial);
console.log("--------------------------------DISPONIBLES--------------------------------");
console.log(terminadosRuta);
console.log("--------------------------------CENTRO MAYOR--------------------------------");
console.log(maxIndex);
console.log("--------------------------------CENTRO MENOR--------------------------------");
console.log(minIndex);
//! ------------------------------ RUTA ------------------------------
class Ruta {
    constructor(id, nombre, niveles, salon, lenguajes) {
        this.id = id;
        this.nombre = nombre;
        this.niveles = niveles;
        this.salon = salon;
        this.lenguajes = lenguajes;
    }
}
const ruta1 = new Ruta(0, "v1", 3, "artemis", "typescript,node_js");
const ruta2 = new Ruta(1, "v2", 3, "artemis", "typescript,node_js");
const ruta3 = new Ruta(2, "v3", 3, "artemis", "typescript,node_js");
const ruta4 = new Ruta(3, "j1", 3, "apolo", "C# , .net");
const ruta5 = new Ruta(4, "j2", 3, "apolo", "C# , .net");
const ruta6 = new Ruta(5, "m1", 3, "sputnik", "typescript,node_js");
const ruta7 = new Ruta(6, "m2", 3, "sputnik", "typescript,node_js");
//! ------------------------------ CONTRATO ------------------------------
class Contrato {
    constructor(id, tipo, fecha, _empresaContratante, _tipoContrato) {
        this.id = id;
        this.tipo = tipo;
        this.fecha = fecha;
        this._empresaContratante = _empresaContratante;
        this._tipoContrato = _tipoContrato;
    }
    //todo -- Empresa Contratante
    set empresaContratante(empresaContratante) {
        this._empresaContratante = empresaContratante;
    }
    get empresaContratante() {
        return this._empresaContratante;
    }
    //todo -- tipoContrato
    set tipoContrato(tipoContrato) {
        this._tipoContrato = tipoContrato;
    }
    get tipoContrato() {
        return this._tipoContrato;
    }
}
const contrato1 = new Contrato(0, "remoto", "02/11/2022", "solvo", "termino fijo");
const contrato2 = new Contrato(1, "presencial", "12/10/2020", "solvo", "termino indefinido");
const contrato3 = new Contrato(2, "remoto", "42/08/2023", "solvo", "termino indefinido");
const contrato4 = new Contrato(3, "presencial", "342/06/2023", "solvo", "termino fijo");
const contrato5 = new Contrato(4, "presencial", "04/02/2000", "solvo", "termino indefinido");
const contrato6 = new Contrato(5, "remoto", "01/03/2010", "solvo", "termino fijo");
const contrato7 = new Contrato(6, "remoto", "20/08/2013", "solvo", "termino fijo");
//! ------------------------------ NIVEL ------------------------------
class Nivel {
    constructor(id, nombre, trainer, _cantidadEstudiantes) {
        this.id = id;
        this.nombre = nombre;
        this.trainer = trainer;
        this._cantidadEstudiantes = _cantidadEstudiantes;
    }
    //todo -- Cantidad De Estudiantes
    set cantidadEstudiantes(cantidadEstudiantes) {
        this._cantidadEstudiantes = cantidadEstudiantes;
    }
    get cantidadEstudiantes() {
        return this._cantidadEstudiantes;
    }
}
const nivel1 = new Nivel(0, "1", "vermen", 20);
const nivel2 = new Nivel(1, "2", "jholver", 40);
const nivel3 = new Nivel(2, "3", "miguel", 30);
const nivel4 = new Nivel(3, "4", "carlos", 90);
const nivel5 = new Nivel(4, "5", "roy", 10);
const nivel6 = new Nivel(5, "6", "vermen", 26);
const nivel7 = new Nivel(6, "7", "carlos", 50);
//! ------------------------------ CENTRO ------------------------------
class Centro {
    constructor(id, nombre, ciudad, direccion, _cantidadCampers) {
        this.id = id;
        this.nombre = nombre;
        this.ciudad = ciudad;
        this.direccion = direccion;
        this._cantidadCampers = _cantidadCampers;
    }
    //todo -- CantidadCampers
    set cantidadCampers(cantidadCampers) {
        this._cantidadCampers = cantidadCampers;
    }
    get cantidadCampers() {
        return this._cantidadCampers;
    }
}
const centro1 = new Centro(0, "centro 1", "bucaramanga", "zona franca", 200);
const centro2 = new Centro(1, "centro 2", "medellin", "zona franca", 300);
const centro3 = new Centro(2, "centro 3", "bogota", "zona franca", 250);
const centro4 = new Centro(3, "centro 4", "cali", "zona franca", 150);
const centro5 = new Centro(4, "centro 5", "barranquilla", "zona franca", 100);
const centro6 = new Centro(5, "centro 6", "pasto", "zona franca", 500);
const centro7 = new Centro(6, "centro 7", "pereira", "zona franca", 270);
