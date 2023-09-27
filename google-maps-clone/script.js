const MAPBOX_ACCESS_TOKEN =
  "pk.eyJ1IjoibWlub3Z2IiwiYSI6ImNsbjAza211ZjBjcHkycWxqejFtNWJ5YWQifQ.AbsUI34jL2tcCqW4ubi0hA"

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true,
})

function setupMap(centerPosition) {
  const map = new mapboxgl.Map({
    container: "map", // container ID
    accessToken: MAPBOX_ACCESS_TOKEN,
    style: "mapbox://styles/mapbox/streets-v12", // style URL
    center: centerPosition, // starting position [lng, lat]
    zoom: 12, // starting zoom
  })

  const navigationControls = new mapboxgl.NavigationControl()
  map.addControl(navigationControls)

  const directionControls = new MapboxDirections({
    accessToken: MAPBOX_ACCESS_TOKEN,
  })
  map.addControl(directionControls, "top-left")
}

function successLocation(position) {
  setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation() {
  setupMap([11.39454, 47.26266])
}
