
let counter = 1;

function main_fun()
{
  console.log("hello "+ counter);
  counter++;
}

let timer;

function debounce(){
  clearTimeout(timer);
  timer = setTimeout(main_fun,3000);
}
//---------------------------------------------------------------------------

flag = true;

function throtlle(){
  if(flag)
  {
    main_fun();
    flag = false
    setTimeout(()=>{flag = true},5000);
  }
}