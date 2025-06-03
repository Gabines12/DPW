document.addEventListener("DOMContentLoaded", function () {
    const btnComprar = document.getElementById("btnComprar");
    const formularioContenedor = document.getElementById("formularioCompra");
    const formulario = document.getElementById("formularioCompraForm");
    const mensajeExito = document.getElementById("mensaje-exito");
  
    btnComprar.addEventListener("click", function () {
        formularioContenedor.style.display = "block";
        btnComprar.style.display = "none";
    });

    formulario.addEventListener("submit", function (e) {
        e.preventDefault(); // Previene envío real
      
        // Mostrar mensaje de éxito
        mensajeExito.style.display = "block";
      
        // Ocultar solo el formulario (no el contenedor ni el botón aún)
        formulario.style.display = "none";
      
        // Mostrar botón de compra de nuevov y desactivarlo
        btnComprar.style.display = "inline-block";
        btnComprar.disabled = true;
      
        // Esperar 5 segundos para borrar mensaje y limpiar formulario
        setTimeout(() => {
          mensajeExito.style.display = "none";
          formulario.style.display = "block"; // Restaurar el formulario para próximas compras
          formularioContenedor.style.display = "none"; // Ocultar contenedor completo
          formulario.reset(); // Limpiar campos
          btnComprar.disabled = false; //Reactivar botón
        }, 5000);
      });
      

const sitiosPorDepartamento = {
    "San Salvador": ["Palacio Nacional", "Parque Bicentenario", "La Puerta del Diablo"],
    "La Libertad": ["El Tunco", "Surf City", "Furesa"],
    "Santa Ana": ["Catedral de Santa Ana", "Volcán de Santa Ana", "Teatro de Santa Ana"],
    "San Miguel": ["Laguna de Olomega", "Ciudad de San Miguel", "Playa El Cuco"],
    "Chalatenango": ["La Puntona", "El Pital", "Río Sumpul"],
    "Cuscatlán": ["Suchitoto", "Lago Suchitlán", "Cerro de las Pavas"],
    "La Paz": ["Costa del Sol", "Estero de Jaltepeque", "San Pedro Nonualco"],
    "Cabañas": ["Ilobasco", "Parque Ecológico Bosque de Cinquera", "La Pintada"],
    "La Unión": ["Mirador Espíritu de la Montaña", "Isla Zacatillo", "Conchagua"],
    "Morazán": ["Perquín", "Rio Sapo", "El Mozote"],
    "San Vicente": ["Volcán Chinchontepec", "Balneario Apastepeque", "Iglesia El Pilar"],
    "Sonsonate": ["Chorros de la calera", "Ruta de las Flores", "Los Cobanos"],
    "Ahuachapán": ["Parque nacional El Imposible", "Termales de Ahuachapan", "Salto de Malacatiupan"],
    "Usulután": ["Laguna de Alegría", "Mirador de Cristal", "Playa El Espino"]
  };

  window.actualizarSitios = function () {
    const depto = document.getElementById("departamento").value;
    const sitioSelect = document.getElementById("sitio");

    sitioSelect.innerHTML = '<option value="">Seleccione un sitio turístico</option>';

    if (sitiosPorDepartamento[depto]) {
      sitiosPorDepartamento[depto].forEach(sitio => {
        const option = document.createElement("option");
        option.value = sitio;
        option.textContent = sitio;
        sitioSelect.appendChild(option);
      });
    }
  };

  window.mostrarCamposPago = function () {
    const tipoTarjeta = document.getElementById("tarjeta").value;
    const seccionPago = document.getElementById("datos-tarjeta");
  
    const inputsPago = seccionPago.querySelectorAll("input");
  
    if (tipoTarjeta) {
      seccionPago.style.display = "block";
      inputsPago.forEach(input => input.setAttribute("required", "true"));
    } else {
      seccionPago.style.display = "none";
      inputsPago.forEach(input => input.removeAttribute("required"));
    }
  };
  
});


