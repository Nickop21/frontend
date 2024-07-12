// settimeout trust issue

console.log("start");
setTimeout(() => {
    console.log("callback");
}, 5000);

console.log("end");

let start = new Date().getTime();
let end = start

while (end < start+10000) {
    end = new Date().getTime();
}

console.log("while expire after 10 seconds");