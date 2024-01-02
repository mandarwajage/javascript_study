/*
Longest Subarray with Equal Number of 0s and 1s
Write a function that takes an array of 0s and
 1s as input and finds the length of the longest subarray 
 that contains an equal number of 0s and 1s.
*/ 


function findLongestSubarray(arr) {
  // TODO: Implement your code here
  
    let size = 0;
    const hash = {};
    let sum = 0;

    for( let i = 0 ; i < arr.length ; i++){
        let n = arr[i];

        if (n === 0){
            sum--;
        }else{
            sum++;
        }

        if (sum === 0) {
            size = i + 1;
        }

        if (sum in hash){
            size = Math.max(size, i - hash[sum] );
        }else{
            hash[sum] = i;
        }
     
        
    }
       return size;
}

