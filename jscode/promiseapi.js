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
    setTimeout(()=>reject("promise 3 failed")

    ,1000)
})

Promise.all([promise1, promise2,promise3]).then((res)=>(console.log(res)))
.catch((error) =>(console.log(error)))

Promise.allSettled([promise1, promise2,promise3]).then((res)=>(console.log(res)))
.catch((error) =>(console.log(error)))

Promise.race([promise1, promise2, promise3]).then((res)=>{console.log(res)})
.catch((error) =>(console.log(error)))

Promise.any([promise1, promise2,promise3]).then((res)=>(console.log(res)))
.catch((error) =>(console.log(error)))
