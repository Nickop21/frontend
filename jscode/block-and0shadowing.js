// {
//     var a=1   //inside global scope
//     let b=2    //set inside block scope
//     const c=3  //set inside block scope
// }
var a = 100;
{
 var a = 10;
 let b = 20;
 const c =30; 
//  console.log(a);  //here a is shadowing
//  console.log(b);
//  console.log(c);
}
//  console.log(a); //a=10 beacuse its change the a which refering same address
//  console.log(b); // b is not defined
//  console.log(c);  //c is not defined

//  Illegal shadowing:

// let an = 200;
// {
//  var an =20;  //cannot reclared illegal shadowing
// }

let aaa=99
function sha(){
    var aaa=9999  // this is legal 
}
// We can shadow this
var ap = 200;
{
 let ap =20;
}
//////
let aa = 200; // this is set in script space
{
 let aa =20;  // t his is in block space
}
console.log(aa);  //200

