import React from 'react'
import {useData, usePrice,useItemDect,useDelete} from '../context';

import {useHistory} from 'react-router-dom';

function CartComponent({currentUser, p}) {
    // console.log(currentUser,p)
    const data = useData();
    const totalPrice = usePrice();
    const decreaseQuantity = useItemDect();
    const deleteQuan = useDelete();

    const [purchase, setPurchase] = React.useState(false);

    const history = useHistory();
    return (
        <div style={{paddingTop: '15vh'}}>
            {data.map(i => {
                if(i.quantity === 0){
                    return null
                }
                return(
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <span>{i.title}: &nbsp;</span>
                    <span>{i.quantity}X{i.price} &nbsp;= &nbsp;</span>
                    <span>{i.quantity*i.price} &nbsp;</span>
                    <span onClick={(e) => {
                        console.log(i)
                        decreaseQuantity(i); 
                        }}>Decrease&nbsp;</span>
                    <span onClick={(e) =>{
                        deleteQuan(i)
                    }}>Delete</span>
                </div>
                )
            })}
            <div style={{textAlign: 'center'}}>
            {<p>Total: {totalPrice}</p>}
            {data.length> 0 ?
            <button onClick={() => {
                if(currentUser){
                    setPurchase(true);
                    window.location.reload();
                }else{
                    history.push('/signIn')
                }
            }}>Proceed</button>
        : null}

            {purchase ? <div>HEY YOUR PURCHASE IS SUCCESSFULL</div>: null}
            </div>
        </div>
    )
}

export default CartComponent
