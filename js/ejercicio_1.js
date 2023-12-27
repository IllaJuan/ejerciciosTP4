class Auto {
    constructor (color, marca, modelo) {
        this.color = color;
        this.marca = marca;
        this.modelo = modelo;
    }

    encender() {
        document.write("Auto encendido");
    }
    apagar() {
        document.write("El auto se apagó");
    }
}

const auto = new Auto("Rojo","Ferrari","California T");

auto.encender();
auto.apagar();