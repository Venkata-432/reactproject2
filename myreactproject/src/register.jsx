import { Component } from "react";
import EmployeeService from "./employeeservice";

class RegisterComponent extends Component{

    state = {
        name:'',
        password:'',
        email:'',
        address:''
    }
    
    changeNameHandler=(event)=>{
       this.setState({name:event.target.value});
    }

    changePasswordHandler=(event)=>{
        this.setState({password:event.target.value});
    }

    changeEmailHandler=(event)=>{
        this.setState({email:event.target.value});
    }

    changeAddressHandler=(event)=>{
        this.setState({address:event.target.value});
    }

    saveRecord=(e)=>{
        let employee={name:this.state.name,password:this.state.password,email:this.state.email,address:this.state.address}
        
        console.log("employee record is --> "+JSON.stringify(employee));

        EmployeeService.createEmployeeRecord(employee).then(res=>{
            console.log("record added"+res);
        })
    }

    render(){
        return(
         <div>    
            <form>
                <h1>Register User Account</h1>
                Name: <input type="text" value={this.state.name} onChange={this.changeNameHandler}></input><br></br>
                Password: <input type="password" value={this.state.password} onChange={this.changePasswordHandler}></input><br></br>
                email: <input type="text" placeholder="Enter email address" value={this.state.email} onChange={this.changeEmailHandler}></input><br></br>
                Address: <input type="text" value={this.state.address} onChange={this.changeAddressHandler}></input><br></br>
                <input type="button" value="Register" onClick={this.saveRecord}></input>
            </form>
         </div>   
        );
    }
}

export default RegisterComponent;