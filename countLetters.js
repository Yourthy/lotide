const countLetters = function(string){
    let result = {};
    for(let i of string){
        //console.log(string[i]);
        if(result[i]){
            result[i]++;
        }else{
            result[i] = 1;
        }
    }
    return result;
}

  module.exports = countLetters;
