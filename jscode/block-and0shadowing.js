// // {
// //     var a=1   //inside global scope
// //     let b=2    //set inside block scope
// //     const c=3  //set inside block scope
// // }
var a = 100;
{
//  var a = 10;
 let b = 20;  // block instead of normal script
 const c =30; 
//  console.log(a);  //here a is shadowing
//  console.log(b);
//  console.log(c);
}
 console.log(a); //a=10 beacuse its change the a which refering same address
// //  console.log(b); // b is not defined
// //  console.log(c);  //c is not defined

// //  Illegal shadowing:

// // let an = 200;
// // {
// //  var an =20;  //cannot reclared illegal shadowing beacuse var is function scoped not block scoped
// // }

// let aaa=99
// function sha(){
//     var aaa=9999  // this is legal  because aaa is function scoped
// }
// // We can shadow this
// var ap = 200;
// {
//  let ap =20;
// }
// //////
// let aa = 200; // this is set in script space
// {
//  let aa =20;  // t his is in block space
// }
// console.log(aa);  //200
const arr=[];

for(i=0;i<100;i++){
    let val=`p_${i}`
    arr[i]=val
}

console.log("without",arr);
arr.sort((a, b) => {
    // Extract the numbers from the strings, e.g., "p_10" -> 10
    const numA = parseInt(a.split('_')[1], 10);
    const numB = parseInt(b.split('_')[1], 10);
    
    // Compare the numbers
    return numA - numB;
  });
console.log(arr);
  

