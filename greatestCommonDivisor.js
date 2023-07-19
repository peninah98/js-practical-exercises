 function ghd(x,y){
    for(i=0; i<=x && i<=y; i++){
        if(x%i == 0 && y % i == 0){
            var g = i

        }
    }
    return "GCD of "+ x +" and "+ y +" : "+g
 }

 console.log(ghd(54,36))