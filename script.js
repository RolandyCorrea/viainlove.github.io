document.getElementById("formulario").addEventListener("submit", function(event){
    event.preventDefault();  // Evita que el formulario se envíe de forma predeterminada

    // Obtén los datos del formulario
    let nombre = document.getElementById("nombre").value;
    let dni = document.getElementById("dni").value;
    let telefono = document.getElementById("telefono").value;
    let sede = document.getElementById("sede").value;
    let comprobante = document.getElementById("comprobante").value;
    let terminos = document.getElementById("terminos").checked;

    // Verifica que los términos estén aceptados
    if (!terminos) {
        alert("Debes aceptar los Términos y Condiciones.");
        return;
    }

    // Aquí puedes agregar código para enviar los datos a un servidor o guardarlos
    // De momento solo se muestra una alerta
    alert(`Datos Enviados: \nNombre: ${nombre} \nDNI: ${dni} \nTeléfono: ${telefono} \nSede: ${sede} \nComprobante: ${comprobante}`);
});