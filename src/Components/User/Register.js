import { addDoc, collection } from 'firebase/firestore';
import React from 'react'
import { db } from '../../firebase';


class Register extends React.Component {
  constructor() {
    super();
    this.state={
        success : 1
    };
    this.u = collection(db,'users');
  }  

  onSub = () =>{
    console.log("hiii");
    const name =  document.getElementById('username').value;
    const mail = document.getElementById('email').value;
    const pw = document.getElementById('password').value;
    const cpw = document.getElementById('password2').value;
    if(pw === cpw && pw.length > 3){
      const data ={
        Name :name,
        Email : mail,
        Password : pw        
      }
      addDoc(this.u,data)
      .then((docref) =>{
        console.log("User has been Registered",docref);
      })
      .catch((err) => {
        console.log("Error: ",err);
      })  
      this.props.isSuccess(1)
    }else{
      console.log("Password mismatched")
    }
  }   

  render(){   
    return (  
      <div className="container">
          <div id="form">
              <h1>Registration</h1>
              <div className="input-control">
                  <label htmlFor="username">Username</label>
                  <input id="username" name="username" type="text"/>
                  <div className="error"></div>
              </div>
              <div className="input-control">
                  <label htmlFor="email">Email</label>
                  <input id="email" name="email" type="text"/>
                  <div className="error"></div>
              </div>
              <div className="input-control">
                  <label htmlFor="password">Password</label>
                  <input id="password"name="password" type="password"/>
                  <div className="error"></div>
              </div>
              <div className="input-control">
                  <label htmlFor="password2">Password again</label>
                  <input id="password2"name="password2" type="password"/>
                  <div className="error"></div>
              </div>
              <button onClick={this.onSub}>Sign Up</button>
          </div>
      </div>
    )
  }
}

export default Register

/*<div>
      <form className="login-form">
        <span className="login-signup-header">Register</span>
        <div className="field">
          <input type="text" id='name' placeholder="Name" required />
        </div>
        <div className="field">
          <input type="email" id='mail' placeholder="Email" required />
        </div>
        <div className="field">
          <input type="password" id='pw' placeholder="Password" required />
        </div>
        <div className="field">
          <input type="password" id='re_pw' placeholder="Re-Password" required />
        </div>
        <div className="field" style={{paddingTop:20}}>
          <button>Submit</button>
        </div>
      </form>
    </div>
*/