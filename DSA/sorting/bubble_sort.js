function bubble_sort(arr){
  let n = arr.length;
  c = 0;
  for( let i = 0 ; i < n -1; i++) // outer loop , if elemets are 5 , we will do 4 itteration
  {
    for( let j = 0 ; j < n -1 - i ; j++) 
    /*doing -i , beacause after , in 2nd itteration , 1 last element is alredy sorted , so i = 1 , so we can stop before that last element , in 3rd iteration , i =2 ,
    means last 2 ele are sorted , so we are stoping before last 2 elements */
    {
      c++; // just for counting itteraitons
      if (arr[j] > arr[j+1]){
        arr[j], arr[j+1] = arr[j+1], arr[j];
      }
    }
  }

  console.log(c); // 28
  console.log(arr); // [ 1, 2,  2,  4, 4, 7, 11, 87]
}

const arr = [2,4,1,2,7,4,87,11]; 

bubble_sort(arr);