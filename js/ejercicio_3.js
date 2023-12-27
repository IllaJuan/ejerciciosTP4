class Rectangulo {
    constructor (alto = 0, ancho = 0) {
        this.alto = alto;
        this.ancho = ancho;
    }

    modificarAlto(num) {
        this.alto = num;
    }
    modificarAncho(num) {
        this.ancho = num;
    }

    mostrarAltoAncho() {
        document.write(`<b>Rectángulo</b><br>Alto: ${this.alto}<br>Ancho: ${this.ancho}<br>`);
    }
    areaRectangulo() {
        return this.alto * this.ancho;
    }
    perimetroRectangulo() {
        return 2 * (this.alto + this.ancho);
    }
}

const rectangulo = new Rectangulo();

rectangulo.modificarAlto(20);
rectangulo.modificarAncho(10);

rectangulo.mostrarAltoAncho();
let area = rectangulo.areaRectangulo();
let perimetro = rectangulo.perimetroRectangulo();

document.write(`Area: ${area}<br>Perimetro: ${perimetro}<br>`);

