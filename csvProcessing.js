// csvProcessing.js
// Variable global para almacenar los nombres de las ciudades con Tipo Poblacion 3
let citiesWithTypePopulation3 = [];



function loadAndProcessCSV() {
    const fileInput = document.getElementById('csvFile');
    if (fileInput.files.length === 0) {
        alert('Por favor, selecciona un archivo CSV primero.');
        return;
    }
    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        const text = e.target.result;
        citiesWithTypePopulation3 = parseCSVAndFindCities(text, 3);
        if (citiesWithTypePopulation3.length > 0) {
            alert('Localidades con Tipo Poblacion 3: ' + citiesWithTypePopulation3.join(', '));
            updateMapStyles();
        } else {
            alert('No hay localidades con Tipo Poblacion 3 en los datos cargados.');
        }
    };

    reader.onerror = function() {
        alert('Hubo un error leyendo el archivo!');
    };

    reader.readAsText(file);
}

function parseCSVAndFindCities(text, typePopulation) {
    const lines = text.split('\n');
    let headers = lines[0].split(',').map(header => header.trim());
    let nameIndex = headers.indexOf('Nombre');
    let typeIndex = headers.indexOf('Tipo Poblacion');

    const cities = [];
    for (let i = 1; i < lines.length; i++) {
        const parts = lines[i].split(',');
        if (parts.length > typeIndex) {
            const name = parts[nameIndex].trim();
            const type = parseInt(parts[typeIndex].trim(), 10);
            if (type === typePopulation) {
                cities.push(name);
            }
        }
    }
    return cities;
}

function updateMapStyles() {
    // Actualizar estilos del mapa según las ciudades obtenidas
    vectorLayer.setStyle(function(feature) {
        var name = feature.get('DS_NOMBRE').replace(/"/g, ''); // Elimina comillas si las hay
        if (citiesWithTypePopulation3.includes(name)) {
            return new ol.style.Style({
                stroke: new ol.style.Stroke({
                    color: '#0040FF',
                    width: 2
                }),
                fill: new ol.style.Fill({
                    color: 'rgba(255, 165, 0, 0.8)' // Naranja para Tipo Poblacion = 3
                })
            });
        } else {
            return new ol.style.Style({
                stroke: new ol.style.Stroke({
                    color: '#0040FF',
                    width: 2
                }),
                fill: new ol.style.Fill({
                    color: 'rgba(255, 255, 255, 0.4)'
                })
            });
        }
    });
}

//---------------
