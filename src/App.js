import React from "react";
import MainPage from "./Components/User/MainPage";
import Register from "./Components/User/Register";
import Login from "./Components/User/Login";
import Payment from "./Components/User/Payment";
import { db } from "./firebase";
import { collection,onSnapshot} from "firebase/firestore";
import { addUsers } from "./action";


class App extends React.Component {
  constructor() {
    super();
    this.state={
        success : 1
    };
    
    this.u = collection(db,'users');
    console.log(this.u);    
  }  

  

  componentDidMount(){
    onSnapshot(this.u,(res) =>{
      const users = res.docs.map((doc) =>{
        const data = doc.data();
        data['id'] = doc.id;
        return data;
      })
      console.log(users);
      
      
    const {store} = this.props;

    store.subscribe(() =>{
      console.log(store.getState());
      console.log("UPDATED");
      this.forceUpdate();
    })
    store.dispatch(addUsers(users));

    })
  }
  
  isSuccess = (val) => {    
    this.setState({
      success : val
    });
  }
  


  renderSwitch(val) {
    switch(val) {
      case 1:
        return <Login isSuccess = {this.isSuccess} store = {this.props.store}/>;
      case 2:
        return <Payment isSuccess = {this.isSuccess}/> ;
      case 3:
        return <MainPage isSuccess = {this.isSuccess}/>
      case 4:
        return <Register isSuccess = {this.isSuccess}/>
      default:
        return 'foo';
    }
  }
  

  render () {
    return (
      <div style={{alignItems: "center",textAlign:"center"}}>   

        {this.renderSwitch(this.state.success)}
      </div>
    );
  }
}

export default App;
