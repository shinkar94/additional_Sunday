import {FC, useEffect, useState} from 'react';
import styled, {css} from "styled-components";
import {InitialStateType} from "../../common/InitialState";
import {useNavigate} from 'react-router-dom'

type PropsType = {
    basket: InitialStateType[]
    setBasket: (basket: InitialStateType[])=>void
}
export const Basket:FC<PropsType> = (props) => {
    const {basket, setBasket} = props
    const [resultBasket, setResultBasket] = useState<InitialStateType[]>([])
    useEffect(()=>{
        setResultBasket(basket)
    }, [basket])
    const addCountProduct = (prodID: number) =>{
        const newResultBasket = resultBasket.map(el => el.id === prodID ? {...el, count: el.count + 1} : el)
        setResultBasket(newResultBasket)
    }
    const removeCountProduct = (prodID: number) =>{
        const newResultBasket = resultBasket.map(el => el.id === prodID ? {...el, count: el.count - 1} : el)
        setResultBasket(newResultBasket)
    }
    const removeBasket = (prodID: number) =>{
        const newBasket = basket.filter((el)=> el.id !== prodID)
        setBasket(newBasket)
        localStorage.setItem('basket', JSON.stringify(newBasket))
    }
    const navigate = useNavigate()
    const closeBasketHandler = () =>{
       navigate(-1)
    }
    return (
        <StBasket >
            <button onClick={closeBasketHandler}>close</button>
            <h1>Basket</h1>
            {resultBasket.map(prod => {
                return(
                    <div key={prod.id}>
                        <span>{prod.title}</span>
                        <div>
                            <button onClick={()=>{removeCountProduct(prod.id)}} disabled={prod.count === 1}>-</button>
                            {prod.count}
                            <button onClick={()=>{addCountProduct(prod.id)}}>+</button>
                        </div>
                        <button onClick={()=>{removeBasket(prod.id)}}>X</button>
                    </div>
                )
            })}
            <p>sumPrice: {resultBasket.reduce((acc, el)=> acc + (el.price * el.count), 0)}</p>
        </StBasket>
    );
};

const StBasket = styled.div`
  background: gray;
`