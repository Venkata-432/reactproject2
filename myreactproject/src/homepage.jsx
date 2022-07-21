import { Component } from "react";

class HomeComponent extends Component{

    login=()=>{
        this.props.history.push(`/login`);
    }

   

    register=()=>{
        this.props.history.push(`/register`);
    }

    render(){
        return(
            <div>
                <button className="btn btn-primary" onClick={()=>this.register()}>Register</button>
                <button className="btn btn-primary" onClick={()=>this.login()}>Login</button>
            </div>
        )
    }
}

export default HomeComponent;