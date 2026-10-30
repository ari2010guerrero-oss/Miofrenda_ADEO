const recuerdos = [
    {
        foto: "https://img.freepik.com/vector-premium/altar-ofrendas-dia-muertos_1302918-52215.jpg?w=2000",
        mensaje: "Tu recuerdo vive en cada flor y en cada momento que compartimos."
    },
    {
        foto: "https://i.pinimg.com/originals/cd/62/86/cd6286a80532d76cbec81c3239383cd2.jpg",
        mensaje: "Aunque no podamos verte, tu cariño sigue acompañándonos."
    },
    {
        foto: "https://tse4.mm.bing.net/th/id/OIP.kLhlQqxayiErcYZec80LWQHaJ3?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
        mensaje: "Gracias por las sonrisas, las enseñanzas y los recuerdos inolvidables."
    },
    {
        foto: "/static/img/foto4.jpg",
        mensaje: "Encendemos esta luz para celebrar tu vida y mantener viva tu memoria."
    }
];

let indiceActual = 0;

const imagen = document.getElementById("foto-ofrenda");
const mensaje = document.getElementById("mensaje-foto");
const indicadores = document.getElementById("indicadores");

const anterior = document.getElementById("anterior");
const siguiente = document.getElementById("siguiente");

function mostrarRecuerdo(indice) {
    indiceActual = (indice + recuerdos.length) % recuerdos.length;

    const recuerdo = recuerdos[indiceActual];

    imagen.src = recuerdo.foto;
    imagen.alt = `Fotografía ${indiceActual + 1} de la ofrenda`;
    imagen.style.display = "block";

    imagen.onerror = function () {
        this.style.display = "none";
        mensaje.textContent = "Revisa las fotografías dentro de static/img.";
    };

    mensaje.textContent = recuerdo.mensaje;

    document.querySelectorAll(".indicador").forEach((boton, i) => {
        boton.classList.toggle("activo", i === indiceActual);
    });
}

recuerdos.forEach((recuerdo, i) => {
    const boton = document.createElement("button");
    boton.type = "button";
    boton.className = "indicador";
    boton.setAttribute("aria-label", `Mostrar fotografía ${i + 1}`);

    boton.addEventListener("click", () => mostrarRecuerdo(i));

    indicadores.appendChild(boton);
});

anterior.addEventListener("click", () => {
    mostrarRecuerdo(indiceActual - 1);
});

siguiente.addEventListener("click", () => {
    mostrarRecuerdo(indiceActual + 1);
});

mostrarRecuerdo(0);