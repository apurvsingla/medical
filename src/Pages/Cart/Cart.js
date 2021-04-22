import React from 'react';
import CartComponent from '../../Components/Cart/CartComponent';

const Cart = ({currentUser, p}) => {
    return(
        <>
           <CartComponent p={p} currentUser={currentUser}/>
        </>
    )
}

export default Cart;