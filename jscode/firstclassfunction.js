
// as argu
function z(params) {
    console.log(params);
}

function xyz() {
    console.log("i m passed as argument");
}

z(xyz)

//  as return

function zre() {

    return function () {
    console.log("i m passed as return function");
        
    }
}
zre()()

// as variable

var asvar=function asvarfunctiomn(params) {
    console.log("i m stored as var");
}
asvar()

