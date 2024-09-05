function processIRPF() {
    if (IRPFFilter.length > 0) {
        IRPFFilter.forEach (entry_ => {
        const thresholdPercentage = entry_.percentage;
        const targetSector=entry_.area;
        let temporaryList = [];

        if (Array.isArray(csvData) && csvData.length > 0) {
            csvData.forEach(entry => {
                
                if (targetSector=='6k'){
                    if (entry["6k"] > thresholdPercentage) {
                        temporaryList.push(entry.Nombre);
                }}
                if (targetSector=='6k-12k'){
                    if (entry["6k-12k"] > thresholdPercentage) {
                        temporaryList.push(entry.Nombre);
                }}
                if (targetSector=='12k-18k'){
                    if (entry["12k-18k"] > thresholdPercentage) {
                        temporaryList.push(entry.Nombre);
                }}
                if (targetSector=='18k-21k'){
                    if (entry["18k-21k"] > thresholdPercentage) {
                        temporaryList.push(entry.Nombre);
                }}
                if (targetSector=='21k-30k'){
                    if (entry["21k-30k"] > thresholdPercentage) {
                        temporaryList.push(entry.Nombre);
                }}
                if (targetSector=='30k-60k'){
                    if (entry["30k-60k"] > thresholdPercentage) {
                        temporaryList.push(entry.Nombre);
                }}
                if (targetSector=='60k'){
                    if (entry["60k"] > thresholdPercentage) {
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