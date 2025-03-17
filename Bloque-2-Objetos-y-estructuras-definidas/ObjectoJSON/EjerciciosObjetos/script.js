let tvSamsung = {
  nombre: "TV Samsung 42",
  categoria: "Televisores",
  unidades: 4,
  precio: 345.95,

  getImporte: function () {
    return this.unidades * this.precio;
  },
};

// 1. Añadir características iterativamente
function añadirCaracteristicas() {
  let continuar = true;
  while (continuar) {
    let propiedad = prompt("Introduce el nombre de la característica:");
    let valor = prompt("Introduce el valor para " + propiedad + ":");
    tvSamsung[propiedad] = valor;

    continuar = confirm("¿Deseas añadir otra característica?");
  }
}

// 2. Verificar y añadir propiedades por defecto
const propiedadesTV = [
  "marca",
  "modelo",
  "pulgadas",
  "resolucion",
  "smart",
  "conexiones",
  "peso",
];

function verificarPropiedades() {
  propiedadesTV.forEach((propiedad) => {
    if (!(propiedad in tvSamsung)) {
      tvSamsung[propiedad] = "default value";
    }
  });
}

// 3. Mostrar información en HTML
function mostrarEnHTML() {
  let contenido = "<h2>Información del TV Samsung</h2>";
  contenido += "<ul>";

  for (let prop in tvSamsung) {
    if (typeof tvSamsung[prop] !== "function") {
      contenido += `<li><strong>${prop}:</strong> ${tvSamsung[prop]}</li>`;
    }
  }

  contenido += `<li><strong>Importe Total:</strong> ${tvSamsung.getImporte()}€</li>`;
  contenido += "</ul>";

  document.body.innerHTML = contenido;
}

// Ejecutar las funciones
añadirCaracteristicas();
verificarPropiedades();
mostrarEnHTML();


// Crear objeto coche
let coche = {
  marca: "Toyota",
  modelo: "Corolla",
  año: 2020,
  encendido: false,
  kilometraje: 0,

  arrancar: function() {
    this.encendido = true;
    console.log("El coche ha sido encendido");
  },

  apagar: function() {
    this.encendido = false;
    console.log("El coche ha sido apagado");
  },

  recorrer: function(km) {
    if (this.encendido) {
      this.kilometraje += km;
      console.log(`Se han recorrido ${km}km. Kilometraje total: ${this.kilometraje}km`);
    } else {
      console.log("El coche está apagado. No puede recorrer kilómetros.");
    }
  }
};

// Pruebas
console.log("Estado inicial:", coche);
coche.arrancar();
coche.recorrer(100);
coche.recorrer(50);
coche.apagar();
coche.recorrer(20); // Intentar recorrer con el coche apagado
console.log("Estado final:", coche);

// Crear array de usuarios
let usuarios = [
  {
    nombre: "Juan",
    edad: 25,
    email: "juan@email.com",
    saludar: function() {
      console.log(`¡Hola! Mi nombre es ${this.nombre}`);
    }
  },
  {
    nombre: "María",
    edad: 30,
    email: "maria@email.com",
    saludar: function() {
      console.log(`¡Hola! Mi nombre es ${this.nombre}`);
    }
  },
  {
    nombre: "Pedro",
    edad: 28,
    email: "pedro@email.com",
    saludar: function() {
      console.log(`¡Hola! Mi nombre es ${this.nombre}`);
    }
  }
];

// Añadir nuevo usuario
usuarios.push({
  nombre: "Ana",
  edad: 22,
  email: "ana@email.com",
  saludar: function() {
    console.log(`¡Hola! Mi nombre es ${this.nombre}`);
  }
});

// Función para mostrar usuarios
function mostrarUsuarios() {
  usuarios.forEach(usuario => {
    console.log(`Nombre: ${usuario.nombre}, Edad: ${usuario.edad}, Email: ${usuario.email}`);
  });
}

// Mostrar todos los usuarios
console.log("Lista de usuarios:");
mostrarUsuarios();

// Llamar al método saludar de cada usuario
console.log("\nSaludos de los usuarios:");
usuarios.forEach(usuario => usuario.saludar());

// Convertir objeto tvSamsung a string JSON
let tvSamsungJSON = JSON.stringify(tvSamsung);
console.log("TV Samsung como JSON string:", tvSamsungJSON);

// Convertir string JSON de nuevo a objeto
let tvSamsungRecuperado = JSON.parse(tvSamsungJSON);
console.log("TV Samsung recuperado:", tvSamsungRecuperado);

// Mostrar datos del objeto recuperado
console.log("\nDatos del TV Samsung recuperado:");
for (let prop in tvSamsungRecuperado) {
  console.log(`${prop}: ${tvSamsungRecuperado[prop]}`);
}
