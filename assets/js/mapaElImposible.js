/* /assets/js/mapas.js  – usa el MISMO en todas tus páginas */

window.initMap = function () {

  // Configura aquí todos los mapas que tendrás en el sitio
  const mapas = [
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
