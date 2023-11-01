let counter = 1;
function main()
{
  console.log("hello" + counter);
  counter++;
}

let timer;
function debounce() {
  clearTimeout(timer)
  timer =  setTimeout(main ,3000);
}