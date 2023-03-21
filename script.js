//HTML ELEMENTS

let ipList = document.querySelector("#ip");  
let point = document.querySelector("#location") 
let timezoneList = document.querySelector("#tine-zone");
let ispList = document.querySelector("#isp"); 
let btnSearch = document.querySelector("#arrow");   
let ipInput = document.querySelector("#inputsearch"); 
let form = document.querySelector("#form-search");



//Map 

var map = L.map('map').setView([-34.608585, -58.373255

], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
 

const locationImage = L.icon({
  iconUrl: 'images/icon-location.svg',
  iconSize: [35, 35],
  iconAnchor: [15, 15]
}); 

const marker = L.marker([0, 0], {icon: locationImage}).addTo(map);

form.onsubmit = (e) => {
  e.preventDefault();
  
  fetch(`https://ipapi.co/${ipInput.value}/json/`)
      .then(res => res.json())
      .then(data => renderResults(data))
  
  e.target.reset();
} 


fetch('https://ipapi.co/json/')
    .then(res => res.json())
    .then(data => renderResults(data))

  
 


// Funcion mostrar resultados en pantalla

function renderResults(data) {
  ipList.innerHTML = data.ip;
  point.innerHTML = data.country_name;
  timezoneList.innerHTML = data.city;
  ispList.innerHTML = data.org; 


  map.setView([data.latitude, data.longitude] , 16);
  marker.setLatLng([data.latitude , data.longitude]);
  marker.bindPopup(`<b>${data.ip}</b>`).openPopup();
}








