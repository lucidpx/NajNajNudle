/**
 * Leaflet map + custom pin image (data-* on #google-map).
 * data-pin: PNG/SVG (npr. /branding/map-marker-pin.svg) + data-pin-width / data-pin-height.
 */
(function () {
  var root = document.getElementById('google-map');
  if (!root || typeof L === 'undefined') return;

  var container = root.querySelector('.google-map-frame');
  if (!container || container.getAttribute('data-map-ready')) return;

  var lat = parseFloat(root.getAttribute('data-lat') || '43.9794877');
  var lng = parseFloat(root.getAttribute('data-lng') || '21.2574442');
  var zoom = parseInt(root.getAttribute('data-zoom') || '17', 10);
  var pinUrl = root.getAttribute('data-pin') || '/branding/map-marker-pin.svg?v=1';
  var pinW = parseInt(root.getAttribute('data-pin-width') || '64', 10);
  var pinH = parseInt(root.getAttribute('data-pin-height') || '64', 10);

  var map = L.map(container, {
    scrollWheelZoom: false,
    attributionControl: true
  }).setView([lat, lng], zoom);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    maxZoom: 19
  }).addTo(map);

  var icon = L.icon({
    iconUrl: pinUrl,
    iconSize: [pinW, pinH],
    iconAnchor: [Math.round(pinW / 2), pinH],
    popupAnchor: [0, -pinH]
  });

  L.marker([lat, lng], { icon: icon, title: root.getAttribute('data-marker-title') || '' }).addTo(map);

  function invalidate() {
    map.invalidateSize();
  }

  window.addEventListener('resize', invalidate);
  setTimeout(invalidate, 50);
  setTimeout(invalidate, 300);
  setTimeout(invalidate, 1000);

  container.setAttribute('data-map-ready', '1');
})();
