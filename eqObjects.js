const eqArrays = require('./eqArrays');


const eqObjects = function(object1, object2) {
    // console.log(Object.keys(object1).length, Object.keys(object2).length);
    if(Object.keys(object1).length !== Object.keys(object2).length){
        return false;
    }else{
        for(const i in object1){
            if(Array.isArray(object1[i])){
                if(!eqArrays(object1[i], object2[i])){
                    return false;
                }
            }else if(object1[i] !== object2[i]){
                return false;
            }
        }
    }
    return true;
};


module.exports = eqObjects;