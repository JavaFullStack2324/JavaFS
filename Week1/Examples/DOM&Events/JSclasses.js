    function getPokemon(){
        //I need to grab the pokemon name the user wants to search for
        let pokename = document.querySelector("#pokemon").value;
        
        //let pokename="charizard";
        //Interacting with your backend api
        //By default, fetch will use GET as its type of request
        //You can change the request method by adding a second parameter in your fetch
        //This second parameter needs an object and it needs a method property
        //JSON = JS Object
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokename}`,{method:"GET"})
        /*
        Then, catch, finally is very similar to try, catch, finally in Java error handling
        They also have similar functionalities
        Get the result from this endpoint and convert it to a JS object
        */
       .then(result=>{
        if(result.status == 404){
            throw new Error("Pokemon not found")
        }else if(result.status==500){
            throw new Error("Please wait a moment. Server is in maintenance")
        }else{
            return result.json();
        }
       }).then(jsObject=>{
        console.log(jsObject)

        document.querySelector("#result").innerHTML="";

        let paragraphId= document.createElement("p");
        paragraphId.innerHTML = `Id: ${jsObject.id}\nName:${jsObject.name}`

        let image = document.createElement("img");
        image.src = jsObject.sprites.front_default;

        document.querySelector("#result").append(paragraphId);
        document.querySelector("#result").append(image);

        
       })
       //catch specifically for fetch will only catch if it grabs a 4XX or 5XX status code
       .catch(error=> {
        //Change your website dynamically to tell the user something went wrong
        document.querySelector("#result").innerHTML="";

       })
       //Catch method is for when your fetch fails
       //This will execute no matter the result of your fetch
       .finally(()=>{

       })
    }

    /*
    async /await is an extension of Promises
    await - it will wait until the promises resolve or gives an result
    async - this function will give a promise
    async can be used without await. However, await needs an async keyword to work
    */


async function anotherWay(){
    let response = await fetch("https://pokeapi.co/api/v2/pokemon/bulbasaur");

    //Behavior to handle problems
    if (response.status == 404){
        console.log("I found a 404!")
    }

    let jsObject = await response.json();

    document.querySelector("#result").innerHTML = "";

    let paragraphId = document.createElement("p");
    paragraphId.innerHTML = `Id: ${jsObject.id}\nName: ${jsObject.name}`

    document.querySelector("#result").append(paragraphId);
}
    
    
    
    
    
    //This is another way to add JS into your HTML using script tag
    //Usually put on the very bottom inside your HTML element
    //Anythig in the script tag will execute the moment the HTML is loaded by the browser
    console.log("Hello World");

    //Attaching onclick event to div, p and span and changing default behavior to capturing instead
    let div = document.querySelector("#divCapture")
    div.addEventListener("click",()=>{alert("div was clicked")})
    div.childNodes[1].addEventListener("click",()=> {alert("p was clicked")})
    div.childNodes[1].childNodes[1].addEventListener("click",()=>{alert("span was clicked")} )

    //First param, what event should it listen to
    //second param, give me a function that should be executed if this event happened
    //third param, do you want a capturing behavior

    function clickEventListener(){
        console.log("Button has been clicked!");

        //DOM Manipulation
        //Idea: We want to change the paragraph content

        //Selecting the element to change it
        let paragEle= document.getElementById("changeme");

        //changing content to William Terry
        paragEle.innerHTML = "William Terry";
    }

    function addYourNameListener () {

        let unorderedList = document.querySelector("#addmore");

        //We have to create the object version of what we want to add
        let list = document.createElement("li");

        list.innerHTML = "William Terry"

        //Append is used to add list items
        unorderedList.append(list)


    }

    function displayTheChild(){
        //DOM traversing

        let orderList = document.querySelector("#ol")

        console.log(orderList.childNodes);
        console.log(orderList.parentNode);

        
        console.log(orderList.childNodes)
        console.log("all child nodes listed above")
        //Selecting Item 3 using DOM traversal
        console.log(orderList.childNodes[5].innerHTML)

        //Another way of selecting Item 3 but using a more programmatical approcach
        orderList.childNodes.forEach(element =>{
            if(element.innerHTML == "Item 3"){
                console.log("Item has been found!");
                console.log(element.innerHTML)
            }
        })
    }