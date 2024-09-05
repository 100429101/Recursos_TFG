function processEPercentil() {
    if (percentilEFilters.length > 0) {
        percentilEFilters.forEach (entry_ => {
        const targetSector=entry_.area;
        let temporaryList = [];

        if (Array.isArray(csvData) && csvData.length > 0) {
            csvData.forEach(entry => {
                if (targetSector=='Superior'){
                    if (entry["%50_Empadronados"] == 1) {
                        temporaryList.push(entry.Nombre);
                }}
                if (targetSector=='Inferior'){
                    if (entry["%50_Empadronados"] == 2) {
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
        console.log("percentilEFilters no contiene datos.");
    }
}