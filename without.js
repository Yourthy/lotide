const without = function(array, remove){
    let newArray = [];
    for(const i in array){
        if(remove[i] !== array[i]){
            newArray.push(array[i]);
        }
    }
    return newArray;
}

module.exports = without;