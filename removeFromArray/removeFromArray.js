const removeFromArray = function(populateArray, ...removeFromArray) {
    for (let i = 0; i < removeFromArray.length; i++) {     
        
        for (let j = 0; j < populateArray.length; j++) {
            if (removeFromArray[i] === populateArray[j]) {
                populateArray.splice(j, 1);
                //console.log("Yo! This is when this happens")
            }
             //console.log(removeFromArray[j]);
        }
    }    
    return populateArray;
}

module.exports = removeFromArray



 //if (populateArray[i] == removeFromArray[i]) {
          //  populateArray.splice(i, 1)
        //}
    /*

    const testArray = function(populateArray, ...removeFromArray) {
   for (let i = 0; i < populateArray.length; i++) {     
        
        for (let j = 0; j < removeFromArray.length; j++) {
            if (populateArray[i] == removeFromArray[j]) {
                populateArray.splice(i, 1);
                //console.log("Yo! This is when this happens")
            }
             //console.log(removeFromArray[j]);
        }
    }    
    return populateArray;
}

console.log(populateArray);
    console.log(removeFromArray);
    console.log(populateArray[i]);
    */