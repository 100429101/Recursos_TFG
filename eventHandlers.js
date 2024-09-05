
map.on('singleclick', function(evt) {
    // Convertir las coordenadas del mapa a píxeles en la pantalla
    var pixel = map.getPixelFromCoordinate(evt.coordinate);

    // Buscar características en el pixel donde se hizo clic
    map.forEachFeatureAtPixel(evt.pixel, function(feature) {
        var name = feature.get('DS_NOMBRE');  // Asume que 'name' es el campo correcto
        if (name) {
            document.getElementById('locationName').textContent = name;
            var infoBox = document.getElementById('infoBox');
            infoBox.style.display = 'block';
            infoBox.style.left = pixel[0] + 'px';  // Ajustar la posición X basada en el clic
            infoBox.style.top = pixel[1] + 'px';   // Ajustar la posición Y basada en el clic
        }
    });
});

map.on('singleclick', function(evt) {
    // Convertir las coordenadas del mapa a píxeles en la pantalla
    var pixel = map.getPixelFromCoordinate(evt.coordinate);
    
    // Buscar características en el pixel donde se hizo clic
    map.forEachFeatureAtPixel(evt.pixel, function(feature) {
        var name = feature.get('DS_NOMBRE');  // Asume que 'name' es el campo correcto
        if (name) {
            console.log("=====");
            csvData.forEach(entry => {
                ///console.log("====="+entry["Nombre"]+"-"+name);
                if (entry["Nombre"]==name){
                    console.log("AAAAAA");
                    //document.getElementById('locationName').textContent = name;
                    document.getElementById('locationName').textContent = entry["Nombre"];
                    document.getElementById('locationDensity').textContent = entry["Densidad poblacion"];
                    document.getElementById('locationType').textContent = entry["Tipo Poblacion"];
                    document.getElementById('locationSector').textContent = entry["Sector Predominante"];
                    var infoBox = document.getElementById('infoBox');
                    infoBox.style.display = 'block';
                    infoBox.style.left = pixel[0] + 'px';  // Ajustar la posición X basada en el clic
                    infoBox.style.top = pixel[1] + 'px';   // Ajustar la posición Y basada en el clic
                }
            });}
    });
});