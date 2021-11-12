/* ejercicio 1 i. */

// nvar geo =  navigator.geolocation;
// document.write(geo);

/* ejercicio 1.ii 1.iii 1.iv*/
var map;
var pos_a;
var distancia = 0;

function success(pos) {
  crd = pos.coords;
  var platform = new H.service.Platform({
    'apikey': 'zMEjYCmK9Eq8NBNl4oH3AVO9WRGlVrbLU5_ZIBMmPWk'
  });
  
  // Obtain the default map types from the platform object
  var maptypes = platform.createDefaultLayers();
  
  // Instantiate (and display) a map object:
  if (map == undefined){
    map = new H.Map(
    document.getElementById('mapContainer'),
    maptypes.vector.normal.map,
    {
      zoom: 14,
      center: { lng: crd.longitude, lat: crd.latitude }
    });
  }
  else {
    map.setCenter({lng: crd.longitude, lat: crd.latitude});
  }
  if (pos_a == undefined){
    pos_a = crd;
  }
  else{
    distancia += 2*(6,378.10)*Math.asin(Math.sqrt(Math.sin((crd.latitude-pos_a.latitude)/2)+Math.cos(pos_a.latitude)*Math.cos(crd.latitude)*((Math.sin((crd.longitude-pos_a.longitude)/2))))**2);
    console.log(`Ha recorrido ${distancia} metros`);
    pos_a = crd;
  }
  
}
  
  function error(err) {
    if (err.code == err.TIMEOUT) 
        alert("We have run out of time");
    if (err.code == err.PERMISSION_DENIED)     
        alert("The user didn\'t allow access to geolocation");
    if (err.code == err.POSITION_UNAVAILABLE)                 
        alert("The device could not retrieve the current position");
}

var options = {
enableHighAccuracy: true,
timeout: 5000,
maximumAge: 0
};
  
navigator.geolocation.watchPosition(success, error, options);

// ejercicio 1.v
// la formula es : distancia = 2*(6,378.10)*Math.asin(Math.sqrt(Math.sin((crd.latitude-pos_a.latitude)/2)+Math.cos(pos_a.latitude)*Math.cos(crd.latitude)*((Math.sin((crd.longitude-pos_a.longitude)/2))))**2);

// ejercicio 2