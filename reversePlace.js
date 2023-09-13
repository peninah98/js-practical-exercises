var newArra = []
function reverseInPlace(arr){
var result = arr.split(' ')

for( let i=0; i<result.length; i++){
    let x = result[i].split('').reverse().join('')
    newArra.push(x)
}
    return newArra.join(' ')
}
console.log(reverseInPlace("I am a good boy"))