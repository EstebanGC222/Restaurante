document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    const modalNombre = document.getElementById("modal-nombre");
    const modalDescripcion = document.getElementById("modal-descripcion");
    const modalPrecio = document.getElementById("modal-precio");
    const cerrarBoton = document.querySelector(".cerrar-boton");

    document.querySelectorAll("nav button").forEach(button => {
        button.addEventListener("click", function() {
            const targetId = this.getAttribute("data-target");
            const targetSeccion = document.getElementById(targetId);
            targetSeccion.scrollIntoView({ behavior: "smooth" });
        });
    });

    document.querySelectorAll(".vista-rapida").forEach(button => {
        button.addEventListener("click", function() {
            const plato = this.closest(".plato");
            const imgSrc = plato.querySelector("img").src;
            const nombre = plato.querySelector("h3").innerText;
            const descripcion = plato.querySelector("p").innerText;
            const precio = plato.querySelector("span").innerText;

            modalImg.src = imgSrc;
            modalNombre.innerText = nombre;
            modalDescripcion.innerText = descripcion;
            modalPrecio.innerText = precio;

            modal.style.display = "flex";
        });
    });

    cerrarBoton.addEventListener("click", function() {
        modal.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    document.addEventListener("scroll", function() {
        const botonInicio = document.getElementById("boton-inicio");
        const header = document.getElementById("header");
        const distanciaHeader = header.getBoundingClientRect().top;
    
        // Muestra el botón si el usuario se ha desplazado más de 100px desde el header
        if (distanciaHeader < -100) {
            botonInicio.style.display = "block";
        } else {
            botonInicio.style.display = "none";
        }
    });
    
    document.getElementById("boton-inicio").addEventListener("click", function() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    function abrirModalConInfo(plato) {
        const imgSrc = plato.querySelector("img").src;
        const nombre = plato.querySelector("h3").innerText;
        const descripcion = plato.querySelector("p").innerText;
        const precio = plato.querySelector("span").innerText;

        modalImg.src = imgSrc;
        modalNombre.innerText = nombre;
        modalDescripcion.innerText = descripcion;
        modalPrecio.innerText = precio;

        modal.style.display = "flex";
    }

    document.querySelectorAll(".lista-item").forEach(item => {
        item.addEventListener("click", function(event) {
            event.preventDefault(); // Previene la navegación si es un enlace
            const targetId = this.getAttribute("data-target");
            const plato = document.querySelector(`.plato[data-id="${targetId}"]`);
            if (plato) {
                abrirModalConInfo(plato);
            }
        });
    });
});
    
    