// Creamos la función con los attributos y parametros de entrada, con saldo por defecto a 0.
function CuentaBancaria(nombre, dni, saldo = 0) {
    this.nombre = nombre;
    this.dni = dni;
    this.saldo = saldo;
    this.numeroCuenta = "ES" + Math.floor(Math.random() * 99999999999999999999).toString().padStart(20, '0');
}

// Definimos este método para mostrar los datos de la cuenta bancaria formateados.
CuentaBancaria.prototype.mostrarDatos = function () {
    console.log(`Nombre: ${this.nombre}\nDNI: ${this.dni}\nNúmero de Cuenta: ${this.numeroCuenta}\nSaldo: ${this.saldo}`);
}

// Definimos este metodo que usaremos para ingresar dinero en las cuentas bancarias.
CuentaBancaria.prototype.realizarIngreso = function (monto) {
    this.saldo += monto;
    console.log(`Ingreso realizado. Nuevo saldo: ${this.saldo}`);
}

// Definimos este metodo que usaremos para retirar dinero de las cuentas bancarias.
CuentaBancaria.prototype.realizarRetiro = function (monto) {
    if (monto > this.saldo) {
        console.log('Saldo insuficiente.')
    } else {
        this.saldo -= monto;
        console.log(`Retiro realizado. Nuevo saldo: ${this.saldo}`);
    }
}

// Definimos este metodo que usaremos para transferir dinero de una cuenta a otra.
CuentaBancaria.prototype.realizarTransferencia = function (monto) {
    
}

// Aqui estoy creando una cuenta bancaria
let cuentaEjemplo = new CuentaBancaria("Ruben Sanchez", "12345678A", 1000);

// Aqui ejecuto los metodos para comprobar que funcionan.
cuentaEjemplo.realizarIngreso(1400);
cuentaEjemplo.mostrarDatos();
cuentaEjemplo.realizarRetiro(600);
cuentaEjemplo.mostrarDatos();
