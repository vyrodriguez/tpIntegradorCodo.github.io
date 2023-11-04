window.onload = () => {
    let formulario = document.querySelector("#formularioTickets");
    let Borrar = document.getElementById("btnBorrar");
    let Resumen = document.getElementById("btnResumen");
    let mensajeName = document.getElementById("mensajeName");
    let mensajeApellido = document.getElementById("mensajeApellido");
    let mensajeCorreo = document.getElementById("mensajeCorreo");
    let mensajeCantidad = document.getElementById("mensajeCantidad");
    let mensajeOpcion = document.getElementById("mensajeOpcion");
    let mensajeTotal = document.getElementById("mensajeTotal");
    let flagApellido, flagCantidad, flagCorreo, flagName, flagOpcion;
    let datoOpcion, datoCantidad;

    let inputName = document.getElementById("inputName");
    let inputApellido = document.getElementById("inputApellido");
    let inputCorreo = document.getElementById("inputCorreo");
    let inputCantidad = document.getElementById("inputCantidad");
    let inputOpcion = document.getElementById("inputOpcion");

    inputName.addEventListener("keyup", (event) => {
        let datoName = event.target.value;
        let mensaje = "";
        let regex = /^[A-Za-z]+$/;

        if (!regex.test(datoName)) {
            mensaje = "El nombre no puede contener ni símbolos ni números";
            flagName = false;
        } else {
            flagName = true;
        }
        mensajeName.innerText = mensaje;
    });

    inputApellido.addEventListener("keyup", (event) => {
        let datoApellido = event.target.value;
        let mensaje = "";
        let regex = /^[A-Za-z]+$/;

        if (!regex.test(datoApellido)) {
            mensaje = "El apellido no puede contener ni símbolos ni números";
            flagApellido = false;
        } else {
            flagApellido = true;
        }
        mensajeApellido.innerText = mensaje;
    });

    inputCorreo.addEventListener("keyup", (event) => {
        let datoCorreo = event.target.value;
        let mensaje = "";
        let regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;

        if (!regex.test(datoCorreo)) {
            mensaje = "El correo electrónico ingresado no es válido";
            flagCorreo = false;
        } else {
            flagCorreo = true;
        }
        mensajeCorreo.innerText = mensaje;
    });

    inputCantidad.addEventListener("keyup", (event) => {
        datoCantidad = event.target.value;
        let mensaje = "";
        let regex = /^[1-9]+$/;

        if (!regex.test(datoCantidad)) {
            mensaje = "La cantidad ingresada no es válida";
            flagCantidad = false;
        } else {
            flagCantidad = true;
        }
        mensajeCantidad.innerText = mensaje;
    });

    inputOpcion.addEventListener("change", function() {
        datoOpcion = event.target.value;
        let mensaje = "";
        if (datoOpcion === "Seleccione una opción") {
            mensaje = "Campo obligatorio";
            flagOpcion = false;
        } else {
            flagOpcion = true;
        }
        mensajeOpcion.innerText = mensaje;
    });

    Borrar.addEventListener("click", function() {
        formulario.reset();
        mensajeTotal.innerText = "";
        mensajeTotal.classList.remove("alert-primary");
        mensajeTotal.classList.remove("alert-danger");
    });

    Resumen.addEventListener("click", function() {
        if (flagName && flagApellido && flagCantidad && flagCorreo && flagOpcion) {
            var promo = 0;
            switch (datoOpcion) {
                case "Estudiante":
                    promo = 0.8;
                    break;
                case "Trainee":
                    promo = 0.5;
                    break;
                case "Junior":
                    promo = 0.15;
                    break;
            }
            total = (200 * datoCantidad) - (200 * promo);
            mensajeTotal.innerText = "Total a pagar: $ " + total;
            mensajeTotal.classList.add("alert-primary");
        } else {
            mensajeTotal.innerText = "¡FALTAN COMPLETAR DATOS!";
            mensajeTotal.classList.add("alert-danger");
        }
    });
}
