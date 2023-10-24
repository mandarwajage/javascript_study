//Group the anagram here

const arr = ["triangle" , "angletri" , "abc", "bca", "bbb" , "elgnairt"]

function anagramPair(arr){  //  {"aegilnrt" => [triangle]}
  let map = new Map();

  for( let ele of arr){
    let key;
   
    key = ele.split("").sort().join("");
    if(map.has(key))
    {
      let temp = map.get(key);
      temp.push(ele);
      map.set(key,temp);
    }
    else{
      let temp = [];
      temp.push(ele)
      map.set(key,temp);
    }
  }
  console.log(map);
}

anagramPair(arr);

/*
{
  'aegilnrt' => [ 'triangle', 'angletri', 'elgnairt' ],
  'abc' => [ 'abc', 'bca' ],
  'bbb' => [ 'bbb' ]
}
*/ 