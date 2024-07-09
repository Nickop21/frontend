var x=1
a();
b();

console.log(x);

function a() {
    var x=3
    console.log(x);
}

function b() {
    var x=5
    console.log(x);
}

// output  : 3 5 1