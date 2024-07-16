//map

// Array.map((num,i,arr)=>{})
let custmaparray=[2,4,2,5,3,4,3]
Array.prototype.mymap=function (cb){
    let temp=[]
    for(let i=0;i<this.length;i++){
        temp.push(cb(this[i],i,this))
    }
    return temp;
}

const multiple=custmaparray.mymap((num,i,arr)=>{
    return num*2
})
console.log("map",multiple);

//

let filterarray=[12,5,81,2,9,5,22,34,68,21]

Array.prototype.myFilter=function (cb) {
    let temp=[]
for (let index = 0; index < this.length; index++) {
    if(cb(this[index],index,this)) temp.push(cb(this[index]))
    // in if we invole the function and check where it satified the comditon or not
}
    return temp;
}

const filter=filterarray.myFilter((num,i,arr)=>{
    if (num>60) return num
})

console.log("filter",filter);

// reduce

// arr.reduce((acc,curr,i,arr)=>{},initialval)

let sumarray=[1,2,3,4,5]

Array.prototype.myreduce=function (cb,initialVal=0) {
    let acc=initialVal
for (let index = 0; index < this.length; index++) {
    acc= cb(acc,this[index],index,this)
}
    return acc;
}

let reducearr=sumarray.myreduce((acc,curr,i,arr)=>{
        return acc+curr
},0)

console.log(reducearr);



//call
let callobj={
    firstname: 'Nitin',lastname: 'yadav'
}

let getFullName1= function(param1){
   let result= this.firstname +' ' + this.lastname +" " +param1;

   console.log(result);

}

// getFullName1.call(callobj,'param1');

Function.prototype.mycall=function (context={},...args){
    if (typeof this!=='function') {
        throw new Error(this ,"Not callable")
    }

   context.fn=this  // added function to context
   context.fn(...args)
   delete context.fn;

}
getFullName1.mycall(callobj,"my call");


//apply

Function.prototype.myapply=function (context={},args=[]){
    if (typeof this!=='function') {
        throw new Error(this ,"Not callable")
    }
    if (!Array.isArray(args)) {
        throw new Error("Arguments must be an array")
    }
    context.fn=this  // added function to context
    context.fn(...args)
    delete context.fn;
}

getFullName1.myapply(callobj,["my apply"]); //In JavaScript, this refers to the function on which mycall is called.

//bind

Function.prototype.mybind=function (context={},...args) {
    if (typeof this!=='function') {
        throw new Error(this ,"Not callable")
    }

    context.fn=this

    return function(...innerArgs){
        return context.fn(...args,...innerArgs)
    }
}

let mybindcall=getFullName1.mybind(callobj,"my bind")
mybindcall()