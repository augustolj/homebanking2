//Declaración de variables
var nombreUsuario = "Coco";
var saldoCuenta = 4000;
var limiteExtraccion = 100;
var servicioAgua = 100;
var servicioLuz = 75;
var servicioABL = 50;

//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function() {
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}


//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {
    var consultaInternaLimite = limiteExtraccion;
    var nuevoLimite = parseInt(prompt("Nuevo Limite Extraccion"));
    limiteExtraccion = nuevoLimite;
    actualizarLimiteEnPantalla()
}

function extraerDinero() {
    var saldoInterno = saldoCuenta;
    var saldoAExtraer = parseInt(prompt("Cuanto queres extraer"));
    if (saldoAExtraer > saldoCuenta || saldoAExtraer > limiteExtraccion){
        alert("Error")};
    if (saldoAExtraer % 100 != 0){
        alert("Sólo múltiplos de 100")
    }
    else {saldoCuenta -= saldoAExtraer;
        actualizarSaldoEnPantalla();
         }
}

function depositarDinero() {
    var depositoInterno = saldoCuenta;
    var nuevoSaldo = parseInt(prompt("Monto a depositar"));
    saldoCuenta += nuevoSaldo;
    actualizarSaldoEnPantalla();
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
    
function transferirDinero() {

}

function iniciarSesion() {

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