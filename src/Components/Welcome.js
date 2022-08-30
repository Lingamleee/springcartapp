import React, { Component } from 'react';
import Login from './User/Login';
import MainPage from './User/MainPage';
import Register from './User/Register';


export class Welcome extends Component {

  constructor() {
    super();
    this.state={
        live : false
    }    
  }  

  isValid = () => {
    
    this.setState({
      live : false
    });
    console.log("LogIn Successfully...");
  }
  isValid1 = () => {
    
    this.setState({
      live : true
    });
    console.log("Logout Successfully...")
  }

  render() {
    return (           
      <div>
        {this.state.live && 
        <Login 
          isValid = {this.isValid}
        /> || 
        <MainPage          
          isValid1 = {this.isValid1}
          isValid2 = {this.props.isValid2}
        />
        }
      </div>
    )
  }
}

export default Welcome