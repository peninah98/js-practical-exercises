var holder = []
var count= 0

function countingZeros(n){
    for(let i=1; i<=n;i++){
        holder.push(i)
        
    }
    for(let i=1; i<= holder.length; i++){
        if(i.toString().includes('0') || i.toString().includes('00')){
            count++

        }
    }
    return count
    
}

console.log(countingZeros(100))