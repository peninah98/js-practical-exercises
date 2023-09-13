

function arrayStats(arr){
    let result = arr.reduce((accumulator,currentValue)=>{
        return accumulator + currentValue

    },0)

    console.log(result)

    let average = result/(arr.length)
    console.log(average)

    let minimun = Math.min(...arr)
    console.log(minimun)

    let maximun = Math.max(...arr)
    console.log(maximun)

    let statistics = new Object()
    statistics.Sum = result
    statistics.average = average
    statistics.min = minimun
    statistics.max = maximun
    console.log(statistics)

}

arrayStats([1, 2, 3, 4, 5]);