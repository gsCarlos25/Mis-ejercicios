
var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
  
  function success(pos) {
    crd = pos.coords;
    var platform = new H.service.Platform({
      'apikey': 'zMEjYCmK9Eq8NBNl4oH3AVO9WRGlVrbLU5_ZIBMmPWk'
    });
    
    // Obtain the default map types from the platform object
    var maptypes = platform.createDefaultLayers();
    
    // Instantiate (and display) a map object:
    var map = new H.Map(
      document.getElementById('mapContainer'),
      maptypes.vector.normal.map,
      {
        zoom: 19,
        center: { lng: crd.longitude, lat: crd.latitude }
      });
   
  }
  
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  
  navigator.geolocation.getCurrentPosition(success, error, options);
  
console.log("hola");
/* var platform = new H.service.Platform({
  'apikey': '{zMEjYCmK9Eq8NBNl4oH3AVO9WRGlVrbLU5_ZIBMmPWk}'
});

// Obtain the default map types from the platform object:
var defaultLayers = platform.createDefaultLayers();

// Instantiate (and display) a map object:
var map = new H.Map(
    document.getElementById('mapContainer'),
    defaultLayers.vector.normal.map,
    {
      zoom: 10,
      center: { lat: 52.5, lng: 13.4 }
    }); */
// Initialize the platform object:
