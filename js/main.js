
var mymap = L.map('mapid').setView([36.99, 109.04], 13);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoicG9sdWdhdG8iLCJhIjoiY2p4dGtvY2tlMHZibTNkcDhkMHJ6aHBkeSJ9.QSwJvQjvHBFCs55qyAd_4A', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoicG9sdWdhdG8iLCJhIjoiY2p4dGtvY2tlMHZibTNkcDhkMHJ6aHBkeSJ9.QSwJvQjvHBFCs55qyAd_4A'
}).addTo(mymap);

var marker = L.marker([36.99, 109.04]).addTo(mymap);

marker.bindPopup("<b>This is an interesting place.</b><br>You should visit it.").openPopup();
circle.bindPopup("The 4 Corners National Monument.");

var popup = L.popup()
    .setLatLng([36.99, 109.04])
    .setContent("The 4 Corners National Monument.")
    .openOn(mymap);
