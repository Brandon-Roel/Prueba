// js/app.js

// CONSEJOS
const consejos = [
  "Apaga las luces cuando salgas de una habitación.",
  "Usa transporte público o bicicleta siempre que puedas.",
  "Evita plásticos de un solo uso.",
  "Ahorra agua al ducharte en menos de 5 minutos.",
  "Recicla papel, vidrio, plástico y metales.",
  "Planta un árbol o cuida una planta.",
  "Compra productos locales y de temporada."
];

function mostrarConsejo() {
  const consejo = consejos[Math.floor(Math.random() * consejos.length)];
  document.getElementById("consejo").innerText = consejo;
}

// CALCULADORA
document.getElementById("impact-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const km = parseInt(document.getElementById("km").value) || 0;
  const carne = parseInt(document.getElementById("carne").value) || 0;

  const impacto = km * 0.2 + carne * 1.5;
  const resultado = document.getElementById("resultado");
  const mensaje = document.getElementById("mensajeMotivador");

  // Colores
  if (impacto < 10) {
    resultado.className = "resultado-verde";
    resultado.textContent = "Impacto bajo 🌱 ¡Sigue así!";
    mensaje.textContent = "¡Genial! Estás ayudando al planeta.";
  } else if (impacto < 25) {
    resultado.className = "resultado-amarillo";
    resultado.textContent = "Impacto medio 🌤️ Puedes mejorar.";
    mensaje.textContent = "¡Vas bien! Unos pequeños cambios pueden ayudar mucho.";
  } else {
    resultado.className = "resultado-rojo";
    resultado.textContent = "Impacto alto 🔥 ¡Hora de actuar!";
    mensaje.textContent = "No te preocupes, ¡cada paso cuenta para mejorar!";
  }

  // Gráfico
  const ctx = document.getElementById("graficoImpacto").getContext("2d");
  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Conducir', 'Comer carne'],
      datasets: [{
        data: [km * 0.2, carne * 1.5],
        backgroundColor: ['#4caf50', '#ff9800']
      }]
    },
    options: {
      responsive: false,
      plugins: {
        legend: {
          position: 'bottom'
        }
      }
    }
  });
});

// DESAFÍOS
const desafios = [
  "Lunes: Usa bolsa reutilizable.",
  "Martes: No uses coche hoy.",
  "Miércoles: Come una comida vegetariana.",
  "Jueves: Apaga aparatos en desuso.",
  "Viernes: No compres plástico.",
  "Sábado: Recoge basura en tu comunidad.",
  "Domingo: Ahorra agua en la ducha."
];

function crearDesafios() {
  const lista = document.getElementById("lista-desafios");
  desafios.forEach((desafio, i) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${desafio}</span>
      <select>
        <option>Pendiente</option>
        <option>Completado</option>
        <option>No pude</option>
      </select>
    `;
    lista.appendChild(li);
  });
}
crearDesafios();

// COMENTARIOS
document.getElementById("comentario-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const nombre = this.nombre.value;
  const correo = this.correo.value;
  const comentario = this.comentario.value;

  const div = document.createElement("div");
  div.innerHTML = `<strong>${nombre}</strong> (${correo}): <p>${comentario}</p>`;
  document.getElementById("comentarios-lista").appendChild(div);

  this.reset();
});
