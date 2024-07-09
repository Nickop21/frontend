getname()  //made new execution context in global execution 
console.log(getname); //not invoking getting ref so print all functions things kyuki poora function store hota he intially 

console.log("variable hoisting",x); //undefined accesing before initlizing in memory execution initial its is undefined

var x=7

// console.log(n);
// console.log(v);

let n=9 // output :Cannot access 'n' before initialization
const v=9 //throw syntax error

// aarow function
console.log("arrow hositing",getsomthing); //because getsomthing treated as a variable

console.log("var host",hos);

var getsomthing=()=>{

    console.log("arrow function");
}

var hos=function varfun() {
    console.log("var func");
}

function getname() {
  console.log("execution context");  
}

console.log("Hositing ends");

