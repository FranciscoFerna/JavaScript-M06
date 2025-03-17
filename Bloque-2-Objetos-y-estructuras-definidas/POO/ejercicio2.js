/*
Ejercicio 2

Escribe un programa en JavaScript que modele una jerarquía de figuras geométricas.
Debe haber una clase base llamada FiguraGeometrica que tenga dos propiedades: nombre (que representa el nombre de la figura) y calcularArea() (un método abstracto** que debe ser implementado por las subclases).
Luego, crea al menos dos subclases: Rectangulo y Triangulo. Ambas subclases deben heredar de FiguraGeometrica y deben implementar el método calcularArea() para calcular el área de cada figura.


En JS no existen los métodos abstractos ni las clases abstractas como tal, pero si podemos hacerlas, podemos crear un método en la clase padre que no esté implementado o que devuelva un error informando de que debe ser implementado. Lo mismo haremos con una clase.
*/


// Clase base (pseudo-abstracta)
class FiguraGeometrica {
  constructor(nombre) {
    this.nombre = nombre;
    // Asegurarse de que no se pueda instanciar directamente
    if (this.constructor === FiguraGeometrica) {
      throw new Error('FiguraGeometrica es una clase abstracta y no puede ser instanciada directamente.');
    }
  }

  calcularArea() {
    throw new Error('El método calcularArea() debe ser implementado en la clase hija');
  }
}

// Clase Rectangulo
class Rectangulo extends FiguraGeometrica {
  constructor(base, altura) {
    super('Rectángulo');
    this.base = base;
    this.altura = altura;
  }

  calcularArea() {
    return this.base * this.altura;
  }
}

// Clase Triangulo
class Triangulo extends FiguraGeometrica {
  constructor(base, altura) {
    super('Triángulo');
    this.base = base;
    this.altura = altura;
  }

  calcularArea() {
    return (this.base * this.altura) / 2;
  }
}

// Ejemplo de uso
try {
  const rectangulo = new Rectangulo(5, 3);
  const triangulo = new Triangulo(4, 6);

  console.log(`Área del ${rectangulo.nombre}: ${rectangulo.calcularArea()}`);
  console.log(`Área del ${triangulo.nombre}: ${triangulo.calcularArea()}`);

  // Esto lanzará un error
  const figura = new FiguraGeometrica('Figura');
} catch (error) {
  console.error(error.message);
}
