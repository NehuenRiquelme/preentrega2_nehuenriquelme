// definiendo array de días
const dias = [];
// defino mi array de dias agregados
const dias_agregados = []; 

class Dia {
    constructor (id, nombre, precio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.descuentos = 12.25;
    }

    quitarIVA() {
        this.precio = this.precio - ((this.precio * this.descuentos) / 100);
    }
}

// buscando el objeto
function buscarDia(id) {
    return (dias.find(item => item.id === id) || null); 
}

function agregarDia(dia) {
    dias_agregados.push(dia);
}

function eliminarDia(id) {
    let pos = dias_agregados.findIndex(item => item.id === id);
}
// recorrer dias

function recorrerDias() {
    let contenido_dias = "";
    for (let dia of dias) {
        contenido_dias += dia.id + ".- " + dia.nombre + " $" + dia.precio + "\n";
    }

    return contenido_dias;
}

function recorrerDiasAgregados() {
    let contenido_dias = "";
    for (let dia of dias_agregados) {
        contenido_dias += dia.id + ".- " + dia.nombre + " $" + dia.precio + "\n";
    }

    return contenido_dias;
}
// carga de dias 
let cargarDia = true;