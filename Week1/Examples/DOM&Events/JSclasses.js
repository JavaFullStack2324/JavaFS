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