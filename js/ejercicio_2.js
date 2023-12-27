class Cuenta {
    constructor (titular,saldo) {
        this.titular = titular;
        this.saldo = saldo;
    }

    ingresar(ingreso) {
        this.saldo += ingreso;
    }
    extraer(egreso) {
        this.saldo -= egreso;
    }
    informar() {
        document.write(`Estado de cuenta del titular ${this.titular}: $${this.saldo}`);
    }
}

const cuenta = new Cuenta("Alex",0);

let ingreso = parseInt(prompt("Ingrese el monto a ingresar:"));
let egreso = parseInt(prompt("Ingrese el monto a extraer:"));

cuenta.informar();
document.write("<br>");
cuenta.ingresar(ingreso);
cuenta.extraer(egreso);
cuenta.informar();