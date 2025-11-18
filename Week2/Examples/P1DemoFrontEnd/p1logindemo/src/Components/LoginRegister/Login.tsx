import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom"
import { store } from "../../GlobalData/store";

export const Login:React.FC = () => {

    //we can use the useNavigate hook to navigate between components programatically
    //(no more manual URL changes)
    const navigate = useNavigate()

    //Using the useRef and useEffect hooks to focus our username input box on component load
    const usernameRef = useRef<HTMLInputElement>(null);

    useEffect(()=> {
        //if the current value of the ref is truthy...
        if(usernameRef.current){
            usernameRef.current.focus(); //focus it so the user can type right away
        }
    },[]); //remember [] means this happens on component load


    //Defining a state object to store the user's login credentials
    const[loginCreds, setLoginCreds] = useState({
        username:"",
        password:""
    }) //could have defined an interface for this, but we didn't

    //Function to store user inputs
    const storeValues = (event: React.ChangeEvent<HTMLInputElement>) => {
        //going to store the name and value of the inputs for ease of use below
        const name = event.target.name //name is an attribute we set on the input boxes
        const value = event.target.value //value is the actual value in the input at the time

        //"Take whatever input was changed, and set the matching state filed to the value 
        // of that input"
        //[name] can be EITHER username or password. This ugly code lends to flexibility.

        //This syntax is less necessary if we just have 2 fields, but wayyy more useful if there
        //are many more, say 50
        setLoginCreds((loginCreds)=>({...loginCreds,[name]:value}))

        
    }
    //Function to make the actual login request
    //navigate to /users if a manager logged in, and /games if a user logged in
    const login = async () => {
        //TODO: make sure the username/password are present before proceeding

        try{
            const response = await axios.post("http://localhost:8080/auth/login",loginCreds,
                {withCredentials:true}
            )
            //withCredentials lets use interact with sessions on the backend
            //every request that depends on the user being logged in being an admin, etc needs this

            //if the catch doesn't run, login was successful save the data to our global store, then switch components
            store.loggedInUser = response.data //this is our logged in user data from the backend
        
            
        
        }

    }

    return (
        <div>

        </div>
    )
}