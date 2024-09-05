function processOBalance() {
    if (balanceOFilters.length > 0) {
        balanceOFilters.forEach (entry_ => {
        const targetSector=entry_.area;
        let temporaryList = [];

        if (Array.isArray(csvData) && csvData.length > 0) {
            csvData.forEach(entry => {
                if (targetSector=='Positivo'){
                    if (entry["Balance Ocupados"] > 0) {
                        temporaryList.push(entry.Nombre);
                }}
                if (targetSector=='Negativo'){
                    if (entry["Balance Ocupados"] <= 0) {
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
        console.log("balanceFilters no contiene datos.");
    }
}