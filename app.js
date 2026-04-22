const formulario = document.querySelector("#formulario");
const eNombre = document.querySelector("#name");
const contenedor=document.querySelector("#mensaje");

formulario.addEventListener('submit', function(e){
    e.preventDefault();

    const nombre = eNombre.value.trim();

    if (nombre === ""){
            alert("Debe llenar el campo nombre");
            return;
        }

        const nuevomensaje = document.createElement("p");

        nuevomensaje.textContent = `hola, ${nombre}`;

        contenedor.appendChild(nuevomensaje);

        eNombre.value = "";
});