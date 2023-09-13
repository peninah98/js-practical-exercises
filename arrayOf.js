console.log(Array.of(7))
console.log(Array(7))


function intoArray(str){
    let result = Array.of(str)
  
    return result.length
    
}

console.log(intoArray("krala aman amana jjjj ksksk jjj"))

// function getArgumentsArray() {
//   return Array.of(...arguments);
// }

// const argsArray = getArgumentsArray(1, 2, 3);





function restParameter(...params){
    console.log(params)
}
restParameter(1,2,3,4,4,5,6,6,7,'Krala','Penine')