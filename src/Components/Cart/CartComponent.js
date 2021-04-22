import React from 'react'
import {useData, usePrice,useItemDect,useDelete} from '../context';
import DeleteIcon from '@material-ui/icons/Delete';
import {useHistory} from 'react-router-dom';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
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
                    <table>
                    <tr>
                        <td>
                        <span>{i.title}:</span>
                        </td>
                        <td>
                            <span>{i.quantity}X{i.price}</span>
                        </td>
                        <td>
                    <span>{i.quantity*i.price} </span>
                    </td>
                    <td>
                    <span 
                    style={{cursor: 'pointer'}}
                    onClick={(e) => {
                        console.log(i)
                        decreaseQuantity(i); 
                        }}><ArrowDropDownIcon /> </span>
                        </td>
                        <td>
                    <span 
                     style={{cursor: 'pointer'}}
                     onClick={(e) =>{
                        deleteQuan(i)
                    }}>
                        <DeleteIcon />
                    </span>
                    </td>
                    </tr>
                    </table>
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
