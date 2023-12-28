class Producto {
    constructor (codigo,nombre,precio) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
    }

    imprimirDatos() {
        document.write(`Código: ${this.codigo}<br>Nombre: ${this.nombre}<br>Precio: ${this.precio}<br><br>`);
    }
}

const gaseosa = new Producto("7943378723881","Manaos","$1000");
const galletita = new Producto("7973782387327","Sonrisas","$1200");
const snack = new Producto("798239461729147","Lays","$1500");

let productos = [gaseosa,galletita,snack];

for (let producto of productos) {
    producto.imprimirDatos();
}