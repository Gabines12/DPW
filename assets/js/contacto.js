document.addEventListener("DOMContentLoaded", function () {

    const mensajeExito = document.getElementById("mensaje-exito");
    const formulario = document.getElementById("formularioContacto");

    formulario.addEventListener("submit", function (e) {
        e.preventDefault(); // Previene envío real
      
        // Mostrar mensaje de éxito
        mensajeExito.style.display = "block";
        formulario.reset(); // Limpiar campos
      
        // Esperar 5 segundos para borrar mensaje y limpiar formulario
        setTimeout(() => {
          mensajeExito.style.display = "none";
          formulario.style.display = "block"; // Restaurar el formulario para próximas compras
        }, 5000);
      });
      
});
