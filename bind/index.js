let name1 = {
  firstname: "sachin",
  lastname: "Tendulkar"
} 

let name2 = {
  firstname: "virat",
  lastname: "Kohli"
} 

let printName = function (hometown, state) {
    console.log(this.firstname + " " + this.lastname + " " + hometown+ " " + state); 
}

let printMyName1 = printName.bind(name1,"mumbai"); //sachin Tendulkar
let printMyName2 = printName.bind(name2, "delhi"); //virat Kohli

printMyName1("maharashtra"); 
printMyName2("Delhi_state"); 

////////////  Polyfill for bind function

Function.prototype.Mybind = function(...args) { 
 // this --> printName()
  let obj = this;
  params = args.slice(1); // extracting 1st element ; object
  return function(...args2) //printMyName3("New_State")
  {
    obj.apply(args[0], [...params, ...args2]);
  }
}

let printMyName3 = printName.Mybind(name1 , "pune"); //sachin Tendulkar
printMyName3("New_State");

