
  let map = L.map('firstmapid').setView([37.750, -122.404], 12.3);

  L.tileLayer('https://api.mapbox.com/styles/v1/brittanic/cjp0h4ylu08xk2rn8zx3umzcf/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYnJpdHRhbmljIiwiYSI6ImNqcDBndGZqbjM0cXgza25oNmc3ZHZ6aGUifQ.1CJTalWHTXzIf8LYJ6J2Zw', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18
  }).addTo(map);

  let marker1 = L.marker([37.761, -122.421]).addTo(map);
  let marker2 = L.marker([37.780, -122.405]).addTo(map);
  let marker3 = L.marker([37.785, -122.427]).addTo(map);
  let marker4 = L.marker([37.763, -122.449]).addTo(map);

  marker1.bindPopup("<b>Valencia Street</b>").openPopup();
  marker2.bindPopup("<b>Clementia Street</b>");
  marker3.bindPopup("<b>Geary Blvd</b>");
  marker4.bindPopup("<b>Alma Street</b>");
