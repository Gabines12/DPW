window.initMap = function () {
  // Para elImposible.html
  var divImposible = document.getElementById("map");
  if (divImposible) {
    const ubicacion = { lat: 13.833381568986654, lng: -89.93468826243083 };
    const map = new google.maps.Map(divImposible, {
      zoom: 15,
      center: ubicacion,
    });
    new google.maps.Marker({
      position: ubicacion,
      map: map,
      title: "Parque Nacional El Imposible",
    });
  }

  // Para Termales.html
  var divTermales = document.getElementById("mapTermales");
  if (divTermales) {
    const ubicacion = { lat: 13.902625748654533, lng: -89.8190279137476 };
    const map = new google.maps.Map(divTermales, {
      zoom: 15,
      center: ubicacion,
    });
    new google.maps.Marker({
      position: ubicacion,
      map: map,
      title: "Termales de Ahuachapán",
    });
  }
};