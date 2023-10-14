let name1 = {
  firstname: "sachin",
  lastname: "Tendulkar"
} 

let name2 = {
  firstname: "virat",
  lastname: "Kohli"
} 

let printName = function () {
    console.log(this.firstname + " " + this.lastname); 
}

let printMyName1 = printName.bind(name1); //sachin Tendulkar
let printMyName2 = printName.bind(name2); //virat Kohli

printMyName1(); 
printMyName2(); 

////////////



