import {FC} from 'react';
import {InitialStateType} from "../../app/App";

type PropsType = {
    basket: InitialStateType[]
    setBasket: (basket: InitialStateType[])=>void
}
export const Basket:FC<PropsType> = (props) => {
    const {basket, setBasket} = props

    return (
        <div>
            <h1>Basket</h1>
            {basket.map(el => {
                const removeBasket = () =>{
                    const newBasket = basket.filter((prod)=> prod.id !== el.id)
                    setBasket(newBasket)
                    localStorage.setItem('basket', JSON.stringify(newBasket))
                }
                return(
                    <div key={el.id}>
                        <span>{el.title}</span>
                        <button onClick={removeBasket}>X</button>
                    </div>
                )
            })}
        </div>
    );
};