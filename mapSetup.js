// mapSetup.js
var vectorLayer = new ol.layer.Vector({
    source: new ol.source.Vector({
        url: 'IDEM_CM_UNID_ADMIN.geojson',
        format: new ol.format.GeoJSON()
    }),
    style: new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: '#black',
            width: 2
        }),
        fill: new ol.style.Fill({
            color: 'rgba(255, 255, 255, 0.4)'
        })
    })
});

var map = new ol.Map({
    target: 'map',
    layers: [vectorLayer],
    view: new ol.View({
        center: ol.proj.fromLonLat([-3.70379, 40.41678]),
        zoom: 9
    }),
    interactions: [], // Explicitly setting to an empty array
    controls: [] // Remove all default controls
});

vectorLayer.getSource().on('change', function(evt) {
    if (evt.target.getState() === 'ready') {
        map.getView().fit(evt.target.getExtent(), { size: map.getSize() });
    }
});
