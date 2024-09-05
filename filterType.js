function processType() {
    if (typeFilter.length > 0) {
        typeFilter.forEach (entry_ => {
        const targetSector=entry_.area;
        let temporaryList = [];

        if (Array.isArray(csvData) && csvData.length > 0) {
            csvData.forEach(entry => {
                
                if (targetSector=='1'){
                    if (entry["Tipo Poblacion"] == 1) {
                        temporaryList.push(entry.Nombre);
                }}
                if (targetSector=='2'){
                    if (entry["Tipo Poblacion"] == 2) {
                        temporaryList.push(entry.Nombre);
                }}
                if (targetSector=='3'){
                    if (entry["Tipo Poblacion"] == 3) {
                        temporaryList.push(entry.Nombre);
                }}
                if (targetSector=='4'){
                    if (entry["Tipo Poblacion"] == 4) {
                        temporaryList.push(entry.Nombre);
                }}
                if (targetSector=='5'){
                    if (entry["Tipo Poblacion"] == 5) {
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