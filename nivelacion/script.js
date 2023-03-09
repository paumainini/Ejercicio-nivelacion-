const jugadores = [
  {
    nombre: "Carlos Tevez",
    bueno: true,
    arquero: false,
    imagen: "src/plantel/carlitos.jpg",
  
  },
  {
    nombre: "Julio Buffarini",
    bueno: true,
    arquero: false,
    imagen: "src/plantel/buffarini.jpg",
 
  },
  {
    nombre: "Junior Alonso",
    bueno: true,
    arquero: false,
    imagen: "src/plantel/junioralonso.jpg",
  
  },
  {
    nombre: "Emmanuel Mas",
    bueno: false,
    arquero: false,
    imagen: "src/plantel/mas.jpg",
  
  },
  {
    nombre: "Fabra",
    bueno: true,
    arquero: false,
    imagen: "src/plantel/fabra.jpg",
   
  },
  {
    nombre: "Marcos Diaz",
    bueno: false,
    arquero: true,
    imagen: "src/plantel/marcosdida.jpg",

  },
  {
    nombre: "Carlos Izquierdoz",
    bueno: false,
    arquero: false,
    imagen: "src/plantel/izquierdos.jpg",
    
  },
  {
    nombre: "Eduardo Salvio",
    bueno: false,
    arquero: false,
    imagen: "src/plantel/salvio.jpg",
 
  },
  {
    nombre: "Wanchope Abila",
    bueno: true,
    arquero: false,
    imagen: "src/plantel/wa.jpg",
    
  },
  {
    nombre: "Esteban Andrada",
    bueno: true,
    arquero: true,
    imagen: "src/plantel/andrada.jpg",
    
  },
  {
    nombre: "Franco Soldano",
    bueno: false,
    arquero: false,
    imagen: "src/plantel/soldano.jpg",
    
  },
];

let bloquesHTML = jugadores.map(
  (jugador) => `
                            <div class="col-3" id="${jugador.tipo}">
                                <div class="card m-1">
                                    <img src="${jugador.imagen}" class="h-75 card-img-top" alt="...">
                                    <div class="card-body">
                                        <h5 class="card-title">${jugador.nombre}</h5>

                                    </div>
                                </div>
                                </div>
                            `
);

function mostrarTodos() {
  document.querySelector(`#lista`).innerHTML = "";
  bloquesHTML.forEach((bloque) =>
    document.querySelector(`#lista`).insertAdjacentHTML("beforeend", bloque)
  );
  document
    .querySelectorAll(`li a`)
    .forEach((elemento) => elemento.classList.remove("active"));
  document.querySelector(`#todos`).classList.add("active");
}

//buenos
primerSelector = () => {
  document.querySelector(`#lista`).innerHTML = "";
  for (i = 0; i < jugadores.length; i++) {
    if (jugadores[i].bueno == true) {
      document
        .querySelector(`#lista`)
        .insertAdjacentHTML("beforeend", bloquesHTML[i]);
    }
  }
  document
    .querySelectorAll(`li a`)
    .forEach((elemento) => elemento.classList.remove("active"));
  document.querySelector(`#sua`).classList.add("active");
};

//malos
segundoSelector = () => {
  document.querySelector(`#lista`).innerHTML = "";
  jugadores.forEach((jugador, i) => {
    if (jugador.bueno == false) {
      document
        .querySelector(`#lista`)
        .insertAdjacentHTML("beforeend", bloquesHTML[i]);
    }
  });
  document
    .querySelectorAll(`li a`)
    .forEach((elemento) => elemento.classList.remove("active"));
  document.querySelector(`#cap`).classList.add("active");
};

//arqueros
tercerSelector = () => {
  document.querySelector(`#lista`).innerHTML = "";
  jugadores.forEach((jugador, i) => {
    if (jugador.arquero== true ) {
      document
        .querySelector(`#lista`)
        .insertAdjacentHTML("beforeend", bloquesHTML[i]);
    }
  });
  document
    .querySelectorAll(`li a`)
    .forEach((elemento) => elemento.classList.remove("active"));
  document.querySelector(`#lasdos`).classList.add("active");
};



function envioForm() {
  let formulario = document.getElementById("formulario");
  let nombre = document.getElementById("namee").value;
  let apellido = document.getElementById("lastname").value;

  let tema = document.getElementById("tipo").value;
  let consulta = document.getElementById("consulta").value;


if (! (nombre && apellido && tema && consulta)){
  alert("Por favor complete todos los campos ")
} else{

let parrafo = document.createElement("p");
parrafo.innerHTML = `Gracias ${nombre} ${apellido} por enviar tu consulta sobre ${tema} en breve sera respondida`;
console.log(parrafo);
console.log(
  `Gracias ${nombre} ${apellido} por enviar tu consulta sobre ${tema} en breve sera respondida`
);
formulario.appendChild(parrafo);

}
}