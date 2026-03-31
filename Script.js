const envoltura = document.querySelector(".envoltura-sobre");
const carta = document.querySelector(".carta");

document.addEventListener("click", (e) => {
    if (e.target.matches(".sobre") ||
        e.target.matches(".solapa-derecha") ||
        e.target.matches(".solapa-izquierda") ||
        e.target.matches(".corazon")) {

        envoltura.classList.toggle("abierto");

        if (envoltura.classList.contains("abierto")) {
            setTimeout(() => {
                carta.classList.add("mostrar-carta");
            }, 500);
        } else {
            carta.classList.remove("mostrar-carta");
        }
    }
});
