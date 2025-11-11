console.log("=====================(Printing and Declaring stuff)")
//this will print to the console, not the actual webpage
console.log("Hey Javascript, please be nice to me"); //you don't need a semicolon , but I like them

//Javascript is a loosely typed language, so I can change the type of value a variable holds
let a = 100;
console.log(a); //prints 100

a=true;
console.log(a); //prints true

a=null;
console.log(a); //prints null

a="Now I'm a string!";
console.log(a); //prints Now I'm a string!

var b;
console.log("hello"+b)

//JS will add "var" implicitly if it's the first time the variable appears
c="I wasn't declared. JS will do the workd for me";
console.log(typeof c);

//let's write a function that compares two vars
function test(var1, var2){
    console.log(var1+ " compared to "+var2);
    console.log("loose")
    console.log(var1 == var2); //loose equality
    console.log("strict")
    console.log(var1===var2); //strict equality
}

console.log("=====================(Function Calls)")
test(100,"100") 
test(0,false)
test(1,true)
test(2,true)
test(2,false)

//while 2 is truthy, the boolean true is evaluated as the number 1 and false as 0


//some if statements to drive the point home
console.log("=====================(if statement)")
if(2){
    console.log("2 is truthy");
}else{
    console.log("2 is falsey");
}

if(0){
    console.log("0 is truthy")
}else{
    console.log("0 is falsey")
}

//some more false tests
console.log("more falsey tests");
test('',false);
test(null, undefined);

//when you compare a boolean to a non-boolean, it turns into a number
test("string", true); //compares "string" to 1; //false
test("true",true)//compares "true"=="1"; //false