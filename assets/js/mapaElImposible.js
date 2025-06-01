/* /assets/js/mapas.js  – usa el MISMO en todas tus páginas */

window.initMap = function () {

  // Configura aquí todos los mapas que tendrás en el sitio
  const mapas = [
    {
      id: 'mapConchagua',
      coords: { lat: 13.305078934719747, lng: -87.86603987815144 },
      titulo: 'La Unión'
    },
    {
      id: 'mapZacatillo',
      coords: { lat: 13.305543131513184, lng: -87.75936846715612 },
      titulo: 'Isla Zacatillo'
    },
    {
      id: 'mapEspiritu',
      coords: { lat: 13.274912006460136, lng: -87.83882322883606 },
      titulo: 'Espiritu de la Montana'
    },
    {
      id: 'mapSumpul',
      coords: { lat: 14.056195629743208, lng: -88.81377953410981 },
      titulo: 'Rio Sumpul'
    },
    {
      id: 'maplaPuntona',
      coords: { lat: 14.073817571276429, lng: -89.07454053731445 },
      titulo: 'La Puntona'
    },
    {
      id: 'mapelPital',
      coords: { lat: 13.9662207183076, lng: -88.98091076058991 },
      titulo: 'Cerro El Pital'
    },
    {
      id: 'mapPlayaEspino',
      coords: { lat: 13.170575808515427, lng: -88.29416629453432 },
      titulo: 'Playa El Espino'
    },
    {
      id: 'mapLagoAlegria',
      coords: { lat: 13.492834440173564, lng: -88.49369989565436 },
      titulo: 'Lago de Alegria'
    },
    {
      id: 'mapMiradorCristal',
      coords: { lat: 13.507361980191124, lng: -88.4837020822086 },
      titulo: 'Mirador Cristal'
    },
    {
      id: 'mapTermales',
      coords: { lat: 13.902625748654533, lng: -89.8190279137476 },
      titulo: 'Termales'
    },
    {
      id: 'mapElImposible',
      coords: { lat: 13.874579769318002, lng: -89.92086414211919 },
      titulo: 'Parque Nacional El Imposible'
    },
    {
      id: 'mapSurfCity',
      coords: { lat: 13.487195546115224, lng: -89.32097090397808 },
      titulo: 'Surf City'
    },
    {
      id: 'mapFuresa',
      coords: { lat: 13.688362118405994, lng: -89.44915264232856 },
      titulo: 'Furesa'
    },
    {
      id: 'mapElTunco',
      coords: { lat: 13.492618025495664, lng: -89.3812887678573 },
      titulo: 'ElTunco'
    },
    {
      id: 'mapChorrosCalera',
      coords: { lat: 13.836625712182405, lng: -89.73170079465072 },
      titulo: 'Chorros de la Calera'
    },
    {
      id: 'mapRutaFlores',
      coords: { lat: 13.850955698544373, lng: -89.78372813317074 },
      titulo: 'Ruta de las Flores'
    },
    {
      id: 'mapLosCobanos',
      coords: { lat: 13.525536061520748, lng: -89.79679587222226 },
      titulo: 'Los Cobanos'
    },
    {
      id: 'mapPalacioNacional',
      coords: { lat: 13.697967095940683, lng: -89.19223587735216 },
      titulo: 'Palacio Nacional'
    },
    {
      id: 'mapParqueBicentenario',
      coords: { lat: 13.689981379514078, lng: -89.25162884666649 },
      titulo: 'Parque Bicentenario'
    },
    {
      id: 'mapPuertaDelDiablo',
      coords: { lat: 13.62495129242352, lng: -89.18982794296757 },
      titulo: 'Puerta del diablo'
    },
    {
      id: 'mapCerroPavas',
      coords: { lat: 13.717583445878573, lng: -88.9499142522542 },
      titulo: 'Cerro de Las Pavas'
    },
    {
      id: 'mapLagoSuchitlan',
      coords: { lat: 13.94705718880821, lng: -89.01613891225243 },
      titulo: 'Lago Suchitlán'
    },
    {
      id: 'mapSuchitoto',
      coords: { lat: 13.931941890938441, lng: -89.02683155606523 },
      titulo: 'Suchitoto'
    },
    {
      id: 'mapIlobasco',
      coords: { lat: 13.836067529028007, lng: -88.85084542262138 },
      titulo: 'Ilobasco'
    },
    {
      id: 'mapCinquera',
      coords: { lat: 13.884290347775265, lng: -88.96399341532012 },
      titulo: 'Bosque de Cinquera'
    },
    {
      id: 'mapPintada',
      coords: { lat: 13.789878637349796, lng: -88.70318181877732 },
      titulo: 'La Pintada'
    },
    {
      id: 'mapChinchontepec',
      coords: { lat: 13.59282396623236, lng: -88.84835600919907 },
      titulo: 'Volcán de San Vicente'
    },
    {
      id: 'mapAmapulapa',
      coords: { lat: 13.628058658128007, lng: -88.77482056684349 },
      titulo: 'Balneario Amapulapa'
    },
    {
      id: 'mapElPilar',
      coords: { lat: 13.643212539490616, lng: -88.78517488130738 },
      titulo: 'Iglesia El Pilar y Parque Central'
    },
    {
      id: 'map',                            
      coords: { lat: 13.833381568986654, lng: -89.93468826243083 },
      titulo: 'Mapa genérico'
    }
    
  ];

  mapas.forEach(({ id, coords, titulo }) => {
    const cont = document.getElementById(id);
    if (cont) {
      const mapa = new google.maps.Map(cont, { zoom: 15, center: coords });
      new google.maps.Marker({ position: coords, map: mapa, title: titulo });
    }
  });
};


//13.492618025495664, -89.3812887678573
