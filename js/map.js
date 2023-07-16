const apiKey = 'pk.eyJ1IjoicHJha2hhcjIwMzk0IiwiYSI6ImNsazU3MHFrbDBtcDYzZHIweWlqNWxtb3kifQ.U35C4p1kfDjBlzW64tWb1Q';

const mymap = L.map('map',  {
  scrollWheelZoom: false,
  zoomControl: false,

} ).setView([28.545751, 77.272683], 17);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {

  id: 'mapbox/streets-v11',

  tileSize: 512,
  zoomOffset: -1,
  accessToken: apiKey
}).addTo(mymap);



var arrowhead1 = L.icon({
  iconUrl: './img/Map/arrowhead.png',
  iconSize: [30,30], // size of the icon
  iconAnchor: [-10, 20], // point of the icon which will correspond to marker's location
  popupAnchor: [10, -46], // point from which the popup should open relative to the iconAnchor
  
});

const arrowheadmarker = L.marker([28.547084921862425, 77.27199558780714], { icon: arrowhead1 }).addTo(mymap);
// routing ends

var location1 = L.icon({
  iconUrl: './img/Map/location_1.png',
  iconSize: [25.6,40], // size of the icon
   // point of the icon which will correspond to marker's location
  popupAnchor: [10, -46] // point from which the popup should open relative to the iconAnchor
  
});

const locationmarker = L.marker([28.546034, 77.272888], { icon: location1 }).addTo(mymap);
// routing ends

// RnD Block
var RnDBlock = L.icon({
  iconUrl: './img/Map/RnD.png',
  iconSize: [120,90], // size of the icon
  iconAnchor: [50, 25], // point of the icon which will correspond to marker's location
  popupAnchor: [-30, -15] // point from which the popup should open relative to the iconAnchor
});

const RnDBlockMarker = L.marker([28.544016182854115, 77.27164268068114], { icon: RnDBlock }).addTo(mymap);

// Add popup message
let RnDBlock1 = `
<h3>R&D Block</h3>
<div style="text-align:center">
    <img width="150" height="150" style="object-fit: cover; object-position: center;" src="img/Map/RnD.jpg"/>
</div>
`
RnDBlockMarker.bindPopup(RnDBlock1);

RnDBlockMarker.on('mouseover', function (e) {
  this.openPopup();
});
RnDBlockMarker.on('mouseout', function (e) {
  this.closePopup();
});
RnDBlockMarker.on('click', function (e) {
  this.openPopup();
  //disable mouseout behavior here?
});
