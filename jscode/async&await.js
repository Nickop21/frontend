async function asyncfun(promise) {
  return promise;
}
const data = asyncfun("promise full filled");
data.then((data) => console.log(data));

const promise_creation = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise fullfilled succesfullly");
  }, 3000);
});

//  how we handle promise before

function getpromisestate() {
  promise_creation.then((res) => console.log(res));
}
// getpromisestate();

// new way using await async
// await can only useed inside an async function
// and await write in from an async function
async function getpromisestate_await() {
  try {
    const res = await promise_creation;
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}
// try and catch use to handel errors

// why this async await is special

// --handling promise in older and new ways --

function getpromisestate2() {
  promise_creation.then((res) => console.log(res));
  console.log("i print first then promise full filled log");
}
// in this log above is print first beause js engine is not wait to promise to full filled
// so it print first then promise fullfilled log
//   getpromisestate2();

// now wbhat happen in async function

async function getpromisestate_await2() {
  console.log("i print first then promise fullfilled log");
  // js engine wait to promise to fullfilled  first
  const res = await promise_creation;
  console.log(res);
  console.log(
    "i m not print first then promise fullfilled log because due to await it wait till the promise to full filled"
  );
}

// getpromisestate_await2()

// when await write more then once what happenng in async function
// program wait till the promise to fullfilled

const pc1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise  1 fullfilled succesfullly");
  }, 5000);
});

const pc2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise 2 fullfilled succesfullly");
  }, 3000);
});

async function promisec2() {
  // js engine wait to promise to fullfilled  first
  const res1 = await pc1;
  console.log(res1 + "p1");
  console.log("promise 1");
  const res2 = await pc2;
  console.log(res2 + "p2");
  console.log("promise 2");
}

//   promisec2()

//for p1 -3000 sec  and p2 -5000 sec in this p1 print after 3 sec and after 5 s it print p2
// but in p1-5000 p2 -1000 in this first it wait to full filled the p1 and after 5000 its print both p1 and p2

// beacuse js is single threaded language
// whne js engine finde await  its suspend the async function execution for that time (so main thread in not block) and wait till the p1 to be resolved and oce this resolved then only it move a ahead and after 5 sec it come back to the call stack at that point it suspend

// in oppsite eg in this by the time p1 resolve p2 already resolve but function  is suspend till the promise of p1 to resolved after p1 resolve it print and then it comes to promise 2 it see p2 already resolve then it print all the pending

// impt to notice js engine is not waiting but the function suspended and comes again after fullfill the promise

/// real world eg of async await

// how fetch works with
// fetch gives promise fetch retun the response from the server
//fetch()=>response object(response.json) this again a promise => json value

async function fetchfun() {
    try {
       await fetch("http://api.gitthub.com/users/nickop21")
        // const response = await data.json();
       .then((response) => response.json())
        .then((res) => {
          console.log("response:", res);
        }); 
    } catch (error) {
        console.log("somthing wents wrong",error);
    }

}
// way to handel erro in asyc await
// old method 
fetchfun().catch((error) => {console.log("old way to handle error",error);});
// async await is just a syntactic suger over promises behind the seen js uses normal promises

// in async await we dont have to deal with callbacks we dont have to deal with promise channing


// fetchfun();

