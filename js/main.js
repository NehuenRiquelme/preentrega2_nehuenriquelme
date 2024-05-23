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
while (cargarDia) {
    // defino los valores del día
    let id_dia = dias.length + 1;
    let nombre_dia = prompt("Ingrese día trabajado");
    let valor_hora = parseFloat(prompt("Ingrese valor de la hora trabajada"));
    let horas_trabajadas = parseFloat(prompt("Ingrese número de horas trabajadas"));
    let precio_dia = horas_trabajadas * valor_hora;
    // creo mi Dia
    let dia = new Dia(id_dia, nombre_dia, precio_dia);
    console.log(dia);
    // agrego mi Dia al array dias
    dias.push(dia);
    console.log(dias);
    // preguntar si desea continuar agregando días
    cargarDia = confirm("¿Desea agregar otro día trabajado?");
}
// carga de dias agregados
cargarDia = true;

