//"use strict";
console.log("=================(A class called Baby)");
//defining a class with a class declaration (using class keyword)
//also adding a constructor
class Baby {
    constructor(name, stinky) {
        this.name = name;
        this.stinky = stinky;
    }

    cry() {
        alert(this.name + " goes *WAHHHHHHHHH* from a class declaration")
    }
}

console.log(Baby); //print the contents of the Baby Class to the console

let baby1 = new Baby("will", false); //create a new Baby object using the constructor

baby1.cry(); //make will cry

console.log("======(A variable called baby assigned to an object");
//defining a class with a class expression (assigning an object to a variable)
//notice how baby and Baby can coexist! JavaScript treats them as two different things
let baby = {
    name: "baby",
    stinky: "true",
    cry() {
        alert(this.name + "goes *WAAAAAAAAHHHH* from a class expression")
    }
}

console.log(baby); //prints the contents of the baby variable to the console

console.log("================================(a class called RoboBaby that inherits from Baby)");
//subclass extending Baby
class RoboBaby extends Baby {
    constructor(name, stinky, isRobotic) {
        super(name, stinky); //call Baby's constructor
        this.isRobotic = isRobotic;
    }

    cry() {
        //call the parent class's cry() first
        super.cry();

        //Then add the RoboBaby's own behavior
        alert(this.name + " adds *BEEP BOOP WAAH from the RoboBaby class");
    }
}

//Create and use a RoboBaby
let roboBaby = new RoboBaby("BabyBot", false, true);
roboBaby.cry();

console.log("=====use strict example===")

function sloppyFunction(){
    //"use strict";
    x = 10; //oops! no var,let, or const
    console.log(x)
}

//public is reserved key word so in strict mode will be SyntaxError
let public =5 ;

sloppyFunction();