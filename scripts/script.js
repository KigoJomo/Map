// Initialize and add the map
let map;

async function initMap() {
  // The location of Uluru
  const position = { lat: 10, lng: 15 };

  const chicago = { lat: 41.85, lng: -87.65 };
  const paris = { lat: 48.8566, lng: 2.3522 };
  const sydney = { lat: -33.8688, lng: 151.2093 };
  const tokyo = { lat: 35.6895, lng: 139.6917 };
  const london = { lat: 51.5074, lng: -0.1278 };
  const newYork = { lat: 40.7128, lng: -74.006 };

  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at Uluru
  map = new Map(document.getElementById("map"), {
    zoom: 1.5,
    center: position,
    mapId: "c7b2dcbe5cbae5f3",
    zoomControl: false,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    rotateControl: false,
    fullscreenControl: false,
  });

  // The marker, positioned at Uluru
  // const marker = new AdvancedMarkerElement({
  //   map: map,
  //   position: position,
  //   title: "Uluru",
  // });
  const select = document.getElementById("locations");
  select.addEventListener("change", () => {
    const newLocation = select.value;
    map.panTo(eval(newLocation));
    // map.setZoom(3);
  })
}

initMap();
