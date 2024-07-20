const promise1=new Promise((resolve, reject) => {
    setTimeout(() =>
        resolve("resolve promise 1")

    ,6000)
})
const promise2=new Promise((resolve, reject) => {
    setTimeout(()=>
        resolve("resolve promise 2")

    ,2000)
})
const promise3=new Promise((resolve, reject) => {
    setTimeout(()=>resolve("promise 3 resolve")

    ,1000)
})

Promise.all([promise1, promise2,promise3]).then((res)=>(console.log(res)))
.catch((error) =>(console.log(error)))
// when every promise rejected at any point its simply returns error

Promise.allSettled([promise1, promise2,promise3]).then((res)=>(console.log(res)))
.catch((error) =>(console.log(error)))
// wait for all the promise to settled

Promise.race([promise1, promise2, promise3]).then((res)=>{console.log(res)})
.catch((error) =>(console.log(error))) 
// first settled promise weather fullfill or rejected

Promise.any([promise1, promise2,promise3]).then((res)=>(console.log(res)))
.catch((error) =>(console.log(error))) // first settled sucessful promise
