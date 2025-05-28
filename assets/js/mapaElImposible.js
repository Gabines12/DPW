// Asegura que initMap esté disponible globalmente para Google Maps
window.initMap = function () {
  const ubicacion = { lat: 13.833381568986654, lng: -89.93468826243083 };

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: ubicacion,
  });

  const marker = new google.maps.Marker({
    position: ubicacion,
    map: map,
    title: "Estamos aquí",
  });
};
