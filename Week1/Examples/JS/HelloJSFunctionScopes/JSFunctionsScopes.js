console.log("====================================(Functions)")

//this is a basic names JS function.
//Note because of hoisting we can call the function before we declare it.

helloWorld();

function helloWorld(){
    console.log("HELLO WORLD!")
}

//Here's an Anonymous function it hasn't been named but it's been assigned to a variable
let anon = function(){
    console.log("I'm an anonymous function")
}

anon(); //using the anonymous function

//arrow functions are pretty much like Java Lambdas (arguments => expression)

let arrow = () => {console.log("I'm an arrow function!")}
arrow();