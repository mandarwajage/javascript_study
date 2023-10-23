// Find pair of element in array with sum is equal to given sum 
const arr = [2,5,6,9,13,1,2,7] ; //13 //10
let sum = 15 ;
function findSumPair(arr)
{
  let set = new Set //[]; // 13 ,10, 9 ,
  for(let ele of arr){
    if (set.has(ele))
    {
      console.log( sum-ele, ele)
    }
    else{
      set.add(sum-ele);
    }
  }
}

findSumPair(arr);