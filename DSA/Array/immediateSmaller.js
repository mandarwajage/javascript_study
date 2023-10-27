let arr = [4 ,5, 3, 1, 2];
let n = 5;
let x = 3;

console.log(immediateSmaller(arr,n,x));

 function immediateSmaller(arr,n,x){
    let smallele = arr[0];
      let diff = x - arr[0] ;
    for(let i = 0 ; i < n ;i++){
        if(arr[i] < x){
            
            let diffrence = x - arr[i];
            
            if(diff > diffrence ){
                diff = diffrence;
                smallele = arr[i];
            }
        }
    }
    
    return smallele ;
  }