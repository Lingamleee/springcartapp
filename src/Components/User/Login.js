import React, { Component } from 'react';

class Login extends Component {

  isValid = () =>{
    const {users} = this.props.store.getState(); 
    const {list}= users;


    const mail = document.getElementById('mail').value;
    const pw = document.getElementById('pw').value;

    {list.map((user) => {
      if (mail === user.Email && pw === user.Password) {
        this.props.isSuccess(3);
      }
      else{
        document.getElementById("de").innerHTML = "Invalid User Details";
        console.log("Invalid User Details");
      }
    })}
  }
  
  render() {
    return (
      <div>
      <form className="login-form">
        <span className="login-signup-header">Log In</span>
        <div className="field">
          <input type="email" id='mail' placeholder="Email" required />
        </div>
        <div className="field">
          <input type="password" id='pw' placeholder="Password" required />
        </div>
        <div className="field" style={{paddingTop:20}}>
          <button onClick={this.isValid}>Log In</button>
        </div><br/>
        <p id='de' style={{color : "red" , paddingTop:20}}/>
        <p style={{cursor:"pointer",color:"tomato"}} onClick={() =>{this.props.isSuccess(4)}}>Don't Have an Account Click here...</p>
      </form>
    </div>
    );
  }
}

export default Login;
