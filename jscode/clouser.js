function yx(){
    var i=1;
    setTimeout(() => {
        console.log(i);
    }, 1000);

    console.log("set time out");
}
yx()

// in above eg due to asy nature js not wait for any so 
// settime out working in back and log os set time print the after 1 sec i print

// this function forms a closure okay so this function remembers the reference to i
// okay this reference to i and it is like forms a closure so wherever this function goes it takes the reference of i along with it okay that's what closure is right and what does the set timeout do is it takes this callback function and stores it into some place okay and attaches a timer to it let me tell you that it takes this callback function and it attaches a timer of 3000 milliseconds to it and it stores it somewhere and the javascript proceeds right it does not wait for anything it just goes to next line
// once that timer expires once that 3000 millisecond is done right that timer expires it takes that function okay puts it again to the call stack and runs it that's how set timeout work okay 

function x(){
    
        for (var i=1 ; i <= 5; i++) {
            setTimeout(() => {
                console.log(i);
            }, i*1000);
            
        }
         
        console.log("set time out");
    }
    x()

    // output 6 5 time due to clouser
    // it does not wait for anything it will run the loop again and again okay it will just quickly uh push that like store that function set timeout will store that function all these five functions and javascript will move on right it does not wait for those timer to expire right so it will print namaste javascript and when the timer expires it is too late it is too late and the value of i because the loop was constantly running right it was one two three four five six

    // this callback function runs by that time the value of i this where i is six okay in the memory location it is six so that is why it prints six every time because all of these callback functions all of these copy of these functions all of these five functions are referring this i is referring to the same spot in memory


    // in case of let it prints 1 2 3 4 5 6 why beacuse let var is blocked scoped
    // for each set time out functions forms a clouser with a new variable copy of i in each iteration is new


    // now how u can acivie this with var here is the eg


    function xx(){
        for (var i=1 ; i <= 5; i++) {
            function close(ind) {
                setTimeout(() => {
                    console.log(ind);
                }, ind*1000);
                     
            }
            close(i) // when we can this a new copy of i formed and function remembered it
           
        } 
        console.log("set time out");
    }
    xx()