
let names={
    firstname: 'John',
    lastname: 'Doe',
    getFullName: function(){
        return this.firstname +'' + this.lastname;
    }
}
// console.log( names.getFullName());
//genrally we donot have to keep function in object if we want to use again

let getFullName1= function(param1,param2,param3){
    return this.firstname +' ' + this.lastname +" " +param1 +" "+param2 +" "+param3;
}
// this is refering to the refernce we have passed
//call is like //function borrowing
let names2={
    firstname: 'Nitin',lastname: 'yadav',
}
// argument in call we have to pass seperately
console.log(getFullName1.call(names2,"arg1","arg2"));

// first is always the this refernce where this have to pointed and rest is the argument we have to pass

//apply
// only difference  in call and apply is  the way we have pass argument
//here we pass nargument as array list

console.log(getFullName1.apply(names2,["arg1","arg2","arg3"]));
// Nitin yadav arg1 arg2 undefined
// call_bind_apply.js:28 Nitin yadav arg1 arg2 dded


// bind method

let getFullNameBind=getFullName1.bind(names2,"arg1","arg2","arg3");
console.log(getFullNameBind());
//gives us a copy of function and returns a method which we can invoke later instead of invoking  where we writing this line