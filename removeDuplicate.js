 let result =[]

 function removeDuplicates(arr){
     while(arr.length > 0){
        let poppedElement = arr.pop()
        if(!result.includes(poppedElement)){
            result.push(poppedElement)
        }
     }

     return result

 }
 

 console.log(removeDuplicates([1,2,2,4,5,6,73,4,5,44,4,4,4,3,5,0]))