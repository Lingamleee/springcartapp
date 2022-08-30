import React from 'react';
import { Item } from 'semantic-ui-react';
import CartItem from './CartItem';


const CartBox = (props) => {
    const {products} = props;
    return (
        <Item.Group divided >
            {products.map((product) => {
                return  <Item>
                            <CartItem       
                                product = {product}
                                key = {product.id}
                                increaseQty = {props.increaseQty}
                                decreaseQty= {props.decreaseQty}
                                deleteProduct = {props.deleteProduct}
                            />
                        </Item>
            })}
        </Item.Group>
    );
}
export default CartBox;