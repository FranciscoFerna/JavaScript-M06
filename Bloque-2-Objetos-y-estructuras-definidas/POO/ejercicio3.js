/*
Ejercicio 3

Modela una jerarquía de personajes de un videojuego. Debe haber una clase base llamada Personaje que tenga propiedades comunes a todos los personajes, como nombre, nivel y puntosDeVida. Además, debe tener un método llamado atacar() que simule el ataque de un personaje.

Luego, crea al menos dos subclases: Guerrero y Mago. Ambas subclases deben heredar de Personaje y deben tener propiedades y métodos específicos de cada tipo de personaje. Por ejemplo, un Guerrero podría tener una propiedad fuerza y un método golpeEspada(), mientras que un Mago podría tener una propiedad mana y un método lanzarHechizo().
Crea varios magos y guerreros y mira de ordenarlos por nivel.
*/


// Clase base Personaje
class Personaje {
  constructor(nombre, nivel, puntosDeVida) {
    this.nombre = nombre;
    this.nivel = nivel;
    this.puntosDeVida = puntosDeVida;
  }

  atacar() {
    return `${this.nombre} realiza un ataque básico`;
  }
}

// Subclase Guerrero
class Guerrero extends Personaje {
  constructor(nombre, nivel, puntosDeVida, fuerza) {
    super(nombre, nivel, puntosDeVida);
    this.fuerza = fuerza;
  }

  golpeEspada() {
    return `${this.nombre} realiza un golpe de espada con ${this.fuerza} de fuerza`;
  }
}

// Subclase Mago
class Mago extends Personaje {
  constructor(nombre, nivel, puntosDeVida, mana) {
    super(nombre, nivel, puntosDeVida);
    this.mana = mana;
  }

  lanzarHechizo() {
    return `${this.nombre} lanza un hechizo usando ${this.mana} puntos de mana`;
  }
}

// Crear personajes
const guerrero1 = new Guerrero("Conan", 5, 100, 15);
const guerrero2 = new Guerrero("Aragorn", 8, 120, 18);
const mago1 = new Mago("Gandalf", 10, 80, 100);
const mago2 = new Mago("Merlin", 7, 75, 90);

// Crear array con todos los personajes
const personajes = [guerrero1, guerrero2, mago1, mago2];

// Ordenar personajes por nivel
const personajesOrdenados = personajes.sort((a, b) => b.nivel - a.nivel);

// Mostrar personajes ordenados
console.log("Personajes ordenados por nivel:");
personajesOrdenados.forEach(personaje => {
  console.log(`${personaje.nombre} - Nivel ${personaje.nivel}`);
});
