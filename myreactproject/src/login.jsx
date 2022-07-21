import { Component } from "react";

class LoginComponent extends Component{
    
    render(){
        return(
                <form>
                    <h1>Please sign in</h1>
                    <label >Email address: </label>
                    <input type="email" placeholder="name@example.com"></input><br />
                    <label >Password: </label>
                    <input type="password" placeholder="Password"></input><br />
                    <button type="submit">Submit</button>  
                </form>
        )
    }
}

export default LoginComponent;