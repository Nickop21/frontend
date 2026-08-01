const arr=[32,31,9,48]

const users = [
  { firstName: "nitin", lastName: "Yadav", age: "23" }, { firstName: "Vidushi", lastName: "jangidh", age: "22" },
  { firstName: "dev", lastName: "palliwal", age: "23" }, { firstName: "harsh", lastName: "vajpayee", age: "21" },
];

Array.prototype.myReduce=function (cb,initialVal) {
  let ans=initialVal

  for (let index = 0; index < this.length; index++) {
      ans=cb(ans,this[index],index)
    
  }
  return ans
  
}






let valans=users.myReduce((acc,curr,index)=>{
  if(curr.age>22) acc.push(curr);
  return acc
},[])

console.log(valans);
