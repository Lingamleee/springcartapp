import React from 'react';

const CartItem = (props) => {
  const {price,title,qty,img,id} = props.product;
  const {
    product,
    increaseQty,
    decreaseQty,
    deleteProduct
  } = props;

  return (
    <div className ="cart-item">
        <div className ="left-block">
          <img src={img} style={styles.image}/>
        </div>
        <div className = "right-block" style={{textAlign:"left"}}>
          <div style={{fontSize : 25}}>{title}</div><br/>
          <div style={{color: '#777'}}>Rs: {price}</div>
          <div style={{color : '#777'}}>Qty: {qty}</div>
          <br/>
          <div>
            <img 
              src='https://cdn-icons-png.flaticon.com/128/1665/1665731.png' 
              alt='Increase' 
              className = "action-icon"
              onClick={() => increaseQty(product)}
            />
            <img 
              src='https://cdn-icons-png.flaticon.com/128/1665/1665765.png' 
              alt='Decrease' 
              className = "action-icon"
              onClick={() => decreaseQty(product)}

            />
            <img 
              src='https://cdn-icons-png.flaticon.com/128/1215/1215092.png' 
              alt='Delete' 
              className = "action-icon"
              onClick={() => deleteProduct(id)}
              
            />            
          </div>
        </div>
    </div>
  );
}

export default CartItem;

const styles = {
  image :{
    height: 110,
    width: 110,
    borderRadius: 4
  }
}

