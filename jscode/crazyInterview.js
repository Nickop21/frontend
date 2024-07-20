function outerparent(params) {
    var b=9
    
    function outer(c) {
        function inner() {
            console.log(a,b,c);
        }
        let a=10
    
        return inner
    }
    return outer;
}

let a=100 // if not define in lexical env or in local then this a will be used (in global env) if not find in this olso then refernce error a is not defined
outerparent()("nitin")()

//data hiding and encapsulating

function datahiding(){
    let counter=0
    function increament() {
        console.log(++counter);
    }
    return increament

}
let counter1=datahiding()
let counter2=datahiding()
counter1() //give acces to counter
counter1()

counter2() //give acces to counter with new independent copy of (fresh counter)
// console.log(counter); // not defined  (not acceable)


// best way 

    function Datahiding2(){
        let counter=0
        this.increament1=function() {
            console.log(++counter);
        }
        this.dcreament1=function() {
            console.log(--counter);
        }
       
    }
 let data=new Datahiding2()
    data.increament1()

    //disadvantage of clouser 
    // overconsumption of memory usage close variable are not garbage collected till the program expires

    function garbage(){
        let g=0  ,z=0 // z is samrtly garbage collected
        return function b(){
            console.log(g++);
        }
    }

    let usegar=garbage() // here  usegar is copy of b function and b make clouser with garbage and g  memory cannot be free 