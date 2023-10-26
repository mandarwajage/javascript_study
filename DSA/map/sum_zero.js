
const arr = [5,-1,-8,4,2,2,9,3,6,4]
//prefix = [ 5,  4, -4,  0,  2, 4, 13, 16, 22, 26]

function findSubArray(arr)
{
  const preArr = [];
  let number = 0;
  for( let i of arr)
  {
    number = number + i ;
    preArr.push(number);
  }
  //console.log(preArr); //  [ 5,  4, -4,  0,  2, 4, 13, 16, 22, 26]
  let map = new Map(); // (5-0 ,4-1 ,-4-2 , 0-3 , 2-4 )
  let index = 0 ;
  let start = null;
  let end = null;
  for(let pre of preArr )
  {
   if (map.has(pre)) // pre = 4
   {
    start = 1 + map.get(pre);
    end = index ;
   }
   else{
      map.set(pre , index);
   }
   index++;
  }

  for(let i = start ; i<= end ; i++)
  {
    console.log(arr[i]) 
  }
}

findSubArray(arr); //-8 4 2 2
