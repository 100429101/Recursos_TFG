function processSector() {
    if (sectorFilter.length > 0) {
        sectorFilter.forEach (entry_ => {
        const thresholdPercentage = entry_.percentage/100;
        const targetSector=entry_.area;
        let temporaryList = [];

        if (Array.isArray(csvData) && csvData.length > 0) {
            csvData.forEach(entry => {
                
                if (targetSector=='comercio_hosteleria'){
                    if (entry["%_UnidadesProductivas_Comercio_Hosteleria"] > thresholdPercentage) {
                        temporaryList.push(entry.Nombre);
                }}
                if (targetSector=='mineria_electricidad_agua'){
                    if (entry["%_UnidadesProductivas_Mineria_electricidad_agua"] > thresholdPercentage) {
                        temporaryList.push(entry.Nombre);
                }}
                if (targetSector=='alimentacon_textil'){
                    if (entry["%_UnidadesProductivas_alimentacion_textil"] > thresholdPercentage) {
                        temporaryList.push(entry.Nombre);
                }}
                if (targetSector=='construccion'){
                    if (entry["%_UnidadesProductivas_Construcion"] > thresholdPercentage) {
                        temporaryList.push(entry.Nombre);
                }}
                if (targetSector=='transporte'){
                    if (entry["%_UnidadesProductivas_transporte"] > thresholdPercentage) {
                        temporaryList.push(entry.Nombre);
                }}
                if (targetSector=='sanidad_educacion'){
                    if (entry["%_UnidadesProductivas_Administracion_Publica_Sanidad_Educacion"] > thresholdPercentage) {
                        temporaryList.push(entry.Nombre);
                }}
                if (targetSector=='ganaderia'){
                    if (entry["%_UnidadesProductivas_agricultura_Ganaderia"] > thresholdPercentage) {
                        temporaryList.push(entry.Nombre);
                }}
                if (targetSector=='manufacturera'){
                    if (entry["%_UnidadesProductivas_Industria_Manufacturera"] > thresholdPercentage) {
                        temporaryList.push(entry.Nombre);
                }}
                if (targetSector=='servicio_profesional'){
                    if (entry["%_UnidadesProductivas_Informacion_servicio_profesional"] > thresholdPercentage) {
                        temporaryList.push(entry.Nombre);
                }}
                if (targetSector=='financiera'){
                    if (entry["%_UnidadesProductivas_Actividades_Financieras"] > thresholdPercentage) {
                        temporaryList.push(entry.Nombre);
                }}
                if (targetSector=='metal'){
                    if (entry["%_UnidadesProductivas_Metal"] > thresholdPercentage) {
                        temporaryList.push(entry.Nombre);
                }}
                if (targetSector=='otros_servicios'){
                    if (entry["%_UnidadesProductivas_Otras_Actividades_de_Servicios"] > thresholdPercentage) {
                        temporaryList.push(entry.Nombre);
                }}
                if (targetSector=='otros'){
                    if (entry["%_UnidadesProductivas_Otras"] > thresholdPercentage) {
                        temporaryList.push(entry.Nombre);
                }}
                
            });
            if (colorThis[0]==1){
                colorThis=temporaryList
            }else{
                colorThis = colorThis.filter(elemento => temporaryList.includes(elemento));
            }

            console.log("Nombres que cumplen con la condición:", colorThis);
        } else {
            console.log("csvData está vacío o no es un array.");
        }
    });} 
    
    else {
        console.log("sectorFilter no contiene datos.");
    }
}