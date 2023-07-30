import React, {useEffect, useState} from 'react';
import '../App.css';
import {Basket} from "../features/basket/Basket";
import {Header} from "../features/Header/Header";
import styled from "styled-components";
import {Content} from "../features/Content/Content";
import {InitialStateType} from "../common/InitialState";

function App() {
    const [marketState, setMarketState] = useState<InitialStateType[]>([])
    const [filterCategory, setFilterCategory] = useState('smartphones')
    const [category, setCategory] = useState<string[]>([])
    const [basket, setBasket] = useState<InitialStateType[]>([])
    const [statusBasket, setStatusBasket] = useState(false)
    const toggleCategory = (newCategory: string)=>{
        setFilterCategory(newCategory)
    }
    useEffect(()=>{
        const getData = async () =>{
            const response = await fetch('https://dummyjson.com/products?limit=100')
            const data = await response.json()
            const resultProduct = data.products.map((el:InitialStateType) => ({...el, count: 1}))
            setMarketState(resultProduct)
            const category = data.products.reduce((acc:string[], product:InitialStateType)=>{
                if(!acc.includes(product.category)){
                    acc.push(product.category)
                }
                return acc
            },[])
            setCategory(category)
            const getBasket = localStorage.getItem('basket')
            if(getBasket !== null){
                const myBasket = JSON.parse(getBasket)
                setBasket(myBasket)
            }else{
                localStorage.setItem('basket', JSON.stringify([]))
            }

        }
        getData()
    },[])
    const addBasket = (id:number) =>{
        const product = marketState.find(prod => prod.id === id)
        if(product !== undefined){
            const idError = basket.find(prod => prod.id === id)
            if(idError === undefined){
                const newBasket = [...basket, product]
                setBasket(newBasket)
                localStorage.setItem('basket', JSON.stringify(newBasket))
            }else{
                alert("Error")
            }
        }
    }
    const filteredState = marketState.filter(el => el.category === filterCategory)
  return (
    <StAppWrapper>
        <Header basket={basket}
                marketState={marketState}
                setStatusBasket={setStatusBasket}
        />
        <Content category={category}
                 toggleCategory={toggleCategory}
                 filteredState={filteredState}
                 addBasket={addBasket}/>

        <Basket basket={basket}
                setBasket={setBasket}
                statusBasket={statusBasket}
                setStatusBasket={setStatusBasket}
        />
    </StAppWrapper>
  );
}

export default App;

const StAppWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
