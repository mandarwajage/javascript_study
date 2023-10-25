
const arr = ["23543", "32453" , "1111" , "40" , "55"];

function groupBySum(arr)
{
  let map = new Map();

  for (let n of arr)
  {
    let key = 0;
    for( let i of n.split("")){
      i = parseInt(i);
      key = key + i;
    }
    key = key.toString();

    if(map.has(key))
    {
      let temp = map.get(key)
      temp.push(n);
      map.set(key,temp)
      
    }
    else{
      let temp = [];
      temp.push(n);
      map.set(key,temp)
    }
  }

  console.log(map);

}
groupBySum(arr);

/*
{
  '17' => [ '23543', '32453' ],
  '4' => [ '1111', '40' ],
  '10' => [ '55' ]
}
*/