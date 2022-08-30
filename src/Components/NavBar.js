import React from "react";

const NavBar = (props) =>{
    const {
        count,
        isSuccess
      } = props;
    return (
        <div style={styles.nav}>
            
        
        <button className="login-signup-header" style={{padding:20}} onClick = {() => isSuccess(1)}>Log Out</button>
            <div style={styles.cartIconContainer}>
                <img style={styles.cartIcon} src = "https://cdn-icons-png.flaticon.com/128/4290/4290854.png" alt="cart" />
                <span style={styles.cartCount}>{count}</span>
            </div>
        </div>
    );
}
 
export default NavBar;

const styles = {
    cartIcon:{
        height : 42,
        width : 40
    },
    nav: {
        height : 70,
        background : '#4267b2',
        display : 'flex',
        justifyContent : 'flex-end',
        alignItem : 'center'

    },
    cartIconContainer : {
        position : 'relative',
        padding : '20px'
    },
    cartCount : {
        background : 'yellow',
        borderRadius : '50%',
        padding : '4px 8px',
        position : 'absolute',
        right : 10,
        top : 9
    }
}