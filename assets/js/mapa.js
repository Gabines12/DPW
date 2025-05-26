// assets/js/mapa.js
function initMap() {
  const ubicacion = { lat: 13.6929, lng: -89.2182 }; // Coordenadas de San Salvador

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: ubicacion,
  });

  const marker = new google.maps.Marker({
    position: ubicacion,
    map: map,
    title: "Estamos aquí",
  });
}
