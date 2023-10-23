// find frquency of each numbe from array
const arr = [1,2, 1,3,2,1,3,5,5,5];

function getFreq(arr){
  let map = new Map(); 
  for( let ele of arr){
    if (map.has(ele)){
      let f = map.get(ele) + 1;
      map.set(ele, f );
    }
    else
    {
      map.set(ele,1);
    }
  }
  console.log(map); //  { 1 => 3, 2 => 2, 3 => 2, 5 => 3 }
}

getFreq(arr);