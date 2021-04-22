import React,{useState, useContext} from 'react';

const ItemContext = React.createContext();
const DataContext = React.createContext();

const IncreseContext = React.createContext();
const decreaseContext = React.createContext();
const PriceContext = React.createContext();
const DeletContext = React.createContext();

export function useItem() {
    return useContext(ItemContext)
}

export function useDelete(){
    return useContext(DeletContext);
}

export function useItemIncr() {
    return useContext(IncreseContext)
}

export function useItemDect() {
    return useContext(decreaseContext)
}

export function useData(){
    return useContext(DataContext);
}

export function usePrice(){
    return useContext(PriceContext)
}

export function ItemProvider({children}) {
    const [item, setItem] = useState(0);
    const [price, setPrice] = useState(0);
    const [name, setName] = useState([]);

    
    const IncreaseQunt = (d) => {
        setPrice(Number(price)+Number(d.price));
        const existingID = name.find(cartItem => cartItem.id === d.id);
        setItem(item+1);
        if(existingID){
            let newArr = [...name];
            newArr.map(cartItem => {
                    if(cartItem.id === d.id){
                        cartItem.quantity+=1;
                    }
                    return null;
                }
            );
            return;
        }
        return setName(i => i.concat(d))
    }
    const decreaseQunt = (d) => {
        setPrice(Number(price)-Number(d.price));
        const existingID = name.find(cartItem => cartItem.id === d.id);
        setItem(item-1);
        if(existingID){
            console.log('yeah')
            let newArr = [...name];
            newArr.map(cartItem => {
                    if(cartItem.id === d.id){
                        cartItem.quantity-=1;
                    }
                    return null;

                }
            );
            return;
        }
    }

    const deleteCon= (d) => {
        if(name.length === 1){
            setPrice(0);
            setItem(0);
            return setName([]);
        }
        let newName = name.filter(i => i.id !== d.id);
        name.filter(i => {
            if(i.id === d.id){
                setPrice(price-(Number(d.price)*Number(d.quantity)));
                setItem(item-d.quantity)
            }
            return null;    
        })
        return setName(newName)
    }

    return (
        <ItemContext.Provider value={item}>
            <DataContext.Provider value={name} >
                <IncreseContext.Provider value={IncreaseQunt}>
                    <decreaseContext.Provider value={decreaseQunt}>
                        <PriceContext.Provider value={price}>
                            <DeletContext.Provider value={deleteCon}>
                                {children}
                            </DeletContext.Provider>
                        </PriceContext.Provider>
                    </decreaseContext.Provider>
                </IncreseContext.Provider>
            </DataContext.Provider>
        </ItemContext.Provider>
    )
}