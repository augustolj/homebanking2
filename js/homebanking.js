//Declaración de variables
var nombreUsuario = "Coco";
var saldoCuenta = 4000;
var limiteExtraccion = 100;
var servicioAgua = 100;
var servicioLuz = 75;
var servicioABL = 50;
var cuentasAmigas = [
    ['cuentaAmiga1' , 1234],
    ['cuentaAmiga2' , 4321],
];

//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function() {
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}

//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {
    var consultaInternaLimite = limiteExtraccion;
    var nuevoLimite = consultarMonto();
    limiteExtraccion = nuevoLimite;
    actualizarLimiteEnPantalla()
}

function extraerDinero() {
    var saldoAExtraer = consultarMonto();
    if (saldoAExtraer <= saldoCuenta && saldoAExtraer <= limiteExtraccion){
        if (saldoAExtraer % 100 === 0){
            modificarSaldo(saldoAExtraer,'extraccion');
        } else alert("error");
    } else alert("error");
}

function depositarDinero() {
    var nuevoSaldo = consultarMonto();
    modificarSaldo(nuevoSaldo,"deposito");
}

function pagarServicio() {
var servicioAPagar = parseInt(prompt("Que servicio quieres pagar?\n1 Agua\n2 Luz\n3 ABL"));
    switch (servicioAPagar){
        case 1:
            pagandoServicios(servicioAgua);
            break;
        case 2:
            pagandoServicios(servicioLuz);
            break;
        case 3:
            pagandoServicios(servicioABL);
            break;
        default:
            alert("No existe servicio");
    }
}
    
function transferirDinero() {

}

function iniciarSesion() {

}

// Funciones funcionales
function consultarMonto(){
    var montoATrabajar = parseInt(prompt("Ingrese Monto"));
    return montoATrabajar;
}

function pagandoServicios(servicioAPagar) {
    if (saldoCuenta < servicioAPagar) {
        alert("Sin Saldo");
    } else modificarSaldo(servicioAPagar, 'extraccion');
}

function modificarSaldo(montoAModificar,tipoDeOperacion){
    switch(tipoDeOperacion){
        case 'extraccion':
            saldoCuenta -= montoAModificar;
            break;
        case 'deposito':
            saldoCuenta += montoAModificar;
            break;
        default:
            alert("error")
    }
    actualizarSaldoEnPantalla()
}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}