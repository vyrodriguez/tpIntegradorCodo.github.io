window.onload = () => {
    let formulario = document.querySelector("#formulariotickets");
    let mensajeName = document.getElementById("mensajeName");
    let mensajeApellido = document.getElementById("mensajeApellido");
    let mensajeCorreo = document.getElementById("mensajeCorreo");
    let mensajeCantidad = document.getElementById("mensajeCantidad");
    let mensajeOpcion = document.getElementById("mensajeOpcion");
    let flagName=0;
    let flagEmail=0;
    let flagCantidad=0;
    
    inputName.addEventListener("keyup", (event) => {
        let datoName = event.target.value;
        let mensaje = "";
        let regex = /^(?=.*[a-z])/;

        if (datoName.length < 7) {
            mensaje = "Debe Ingresar un nombre valido";
           flagName=0;
        }
        else {
           flagName=1;
        }
        mensajeName.innerText = mensaje;
    });

    inputEmail.addEventListener("keyup", (event) => {
         datoEmail = event.target.value;
        let mensaje = "";
        let regex = /^[A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z]+$/;
        if (!regex.test(datoEmail)) {
            mensaje = "Ingrese un email válido";
            flagEmail=false;
        }
        else {
            flagEmail=true;
        }

        mensajeEmail.innerText = mensaje;

    });
    // Guardado de infomación del formulario.

};//fin del load.