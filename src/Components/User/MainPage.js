import React from "react";
import CartBox from "../CartBox";
import NavBar from "../NavBar";
import { getAllProducts } from "../../clint";


class MainPage extends React.Component {
  constructor() {
    super();
    this.state = {
        products : [
        ],  
        loading: true
    }    
    
    console.log(this.state.products);
    // this.d = collection(db,'products');
    // ,where("price","==",323)
    // this.d1 = query(this.d,orderBy("title",'asc'));
    // this.d1 = query(this.d,orderBy("price"),where("price",">=",10000),orderBy("title"));
  }

  componentDidMount() {    

    // getDocs(d).then(res =>{
    //   const products = res.docs.map((doc) => {
    //       const data = doc.data();
    //       data['id'] = doc.id;
    //       return data;
    //   })
    //   console.log("Products",products);  
    //   this.setState({
    //     products,
    //     loading : false
    //   })
    // })
    // getAllProducts
    // .then(res => res.json()
    // .then(products => { 
    //   console.log("Hiiii",products);
    //     this.setState({
    //       products,
    //       loading : false
    //     });
    // }));
    this.setState({
      products: getAllProducts,
      loading: false
    })

    // onSnapshot(this.d1,(res) =>{
    //     const products = res.docs.map((doc) => {
    //         const data = doc.data();
    //         data['id'] = doc.id;
    //         return data;
    //     })
    //   console.log("Products",products);  
    //   this.setState({
    //     products,
    //     loading : false
    //   })
    // })
  }

  increaseQty = (product) =>{
      const {products} = this.state;
      const index = products.indexOf(product);
      products[index].qty += 1;
      this.setState({
        products : products
      });
      // const docref = doc(this.d,products[index].id);
      // updateDoc(docref,{
      //   qty : products[index].qty+1
      // }).then(()=>{
      //   console.log("Updated Successfully...");
      // }).catch((err) => {
      //   console.log("Error: ",err);
      // })
      // console.log("products: ", product);
  }

  decreaseQty = (product) => {
      const {products} = this.state;
      const index = products.indexOf(product);
      if(products[index].qty === 0){
        return
      }

      products[index].qty -= 1;
      this.setState({
        products : products
      });
      
      // const docref = doc(this.d,products[index].id);
      // updateDoc(docref,{
      //   qty : products[index].qty-1
      // }).then(()=>{
      //   console.log("Updated Successfully...");
      // }).catch((err) => {
      //   console.log("Error: ",err);
      // })
      // console.log("products: ", product);
  }

  deleteProduct = (id) => {

    const {products} = this.state;
    const items = products.filter((item) => item.id !== id);

    this.setState({
      products : items
    });

    // await deleteDoc(doc(db, "cities", "DC"));
    // deleteDoc(doc(this.d,id))
    // .then(()=>{
    //   console.log("Deleted Successfully...");
    // }).catch((err) => {
    //   console.log("Error: ",err);
    // })

    

  }

  getCount = () => {

    const {products} = this.state;

    let count = 0;

    products.forEach(element => {
      count += element.qty;
    });

    return count;
  }

  getTotal = () => {

    const {products} = this.state;
    let total = 0;
    products.forEach(element => {
      total += element.price * element.qty;
    });

    return total;
  }

  addProduct = () => {

    console.log(this.d,"Button is clicked");
    const data ={
      img : 'https://support.apple.com/content/dam/edam/applecare/images/en_US/psp/content-link-watch-workout_2x.png',
      price: 10000,
      qty : 2,
      title : 'Smart Watch'
    }
    // addDoc(this.d,data)
    // .then((docref) =>{
    //   console.log("Product has been added",docref);
    // })
    // .catch((err) => {
    //   console.log("Error: ",err);
    // })  
  }

  render () {
    const {products, loading} = this.state; 
    return (
      <div style={{backgroundColor:"#fff"}}>
        <NavBar 
          count = {this.getCount()}
          isSuccess = {this.props.isSuccess}
         />
        <button onClick={this.addProduct} style={{padding:20,fontSize:20}} >Add Product</button>
        <CartBox      
          products = {products}    
          increaseQty = {this.increaseQty}
          decreaseQty= {this.decreaseQty}
          deleteProduct = {this.deleteProduct}
        />
        {loading && <h1>Loading...</h1> }
        <div style={{paddingLeft : 10,fontSize : 25}}>
          Total : {this.getTotal()}
        </div>
        
        <div className="field" style={{paddingTop:20}}>
          <button onClick={() => this.props.isSuccess(2)}>Order</button>
        </div>
      </div>
    );
  }
}

export default MainPage;
