mapboxgl.accessToken =
  "pk.eyJ1IjoibWlub3Z2IiwiYSI6ImNsbjAza211ZjBjcHkycWxqejFtNWJ5YWQifQ.AbsUI34jL2tcCqW4ubi0hA"
const map = new mapboxgl.Map({
  container: "map", // container ID
  style: "mapbox://styles/mapbox/streets-v12", // style URL
  center: [-74.5, 40], // starting position [lng, lat]
  zoom: 9, // starting zoom
})
