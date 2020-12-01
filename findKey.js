const findKey = function(object, callback){
    let result = '';
    for(const i in object){
        if(callback(object[i])){
            return result = i;
        }
    }
}




  module.exports = findKey;