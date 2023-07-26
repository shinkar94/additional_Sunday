import React, {useEffect, useState} from 'react';
import '../App.css';
import {Basket} from "../features/basket/Basket";
import {Header} from "../features/Header/Header";
import styled from "styled-components";

export type InitialStateType = {
    id: number
    title: string
    description: string
    price: number
    discountPercentage: number
    rating: number,
    stock: number
    brand: string,
    category: string,
    thumbnail: string,
    images: string[]
}
function App() {
    const [marketState, setMarketState] = useState<InitialStateType[]>([])
    const [filterCategory, setFilterCategory] = useState('smartphones')
    const [category, setCategory] = useState<string[]>([])
    const [basket, setBasket] = useState<InitialStateType[]>([])

    const toggleCategory = (newCategory: string)=>{
        setFilterCategory(newCategory)
    }
    useEffect(()=>{
        const getData = async () =>{
            const response = await fetch('https://dummyjson.com/products?limit=100')
            const data = await response.json()
            setMarketState(data.products)
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
        // setBasket(el)
    }
    // console.log(marketState)
    const filteredState = marketState.filter(el => el.category === filterCategory)
  return (
    <StAppWrapper>
        <Header basket={basket} marketState={marketState}/>
        <div className={'content'}>
            <div className={'sideBar'}>
                {category.map((el, index) => <p key={index} onClick={()=>{toggleCategory(el)}}>{el}</p>)}
            </div>
            <div className={'rightContent'}>
                {
                    filteredState.map((el)=>{
                        return(
                            <div key={el.id} className={'product'} onClick={()=>{addBasket(el.id)}}>
                                <h3>{el.title}</h3>
                                <p>{el.brand}</p>
                                <p>{el.price}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>

        <Basket basket={basket} setBasket={setBasket}/>
    </StAppWrapper>
  );
}

export default App;

const StAppWrapper = styled.div`
  display: flex;
  flex-direction: column;

  .content {
    background: antiquewhite;
    padding: 10px;
    display: flex;

    .sideBar {
      background: cornsilk;

      & p {
        background: gray;
        margin: 2px;
        cursor: pointer;
        color: white;
        font-size: 18px;
        padding: 4px;
        border-radius: 4px;

        &:hover {
          background: brown;
        }
      }
    }

    .rightContent {
      display: flex;
      flex-direction: column;
      gap: 10px;

      .product {
        background: coral;
        padding: 4px;
        border-radius: 4px;

        & p {
          margin: 2px;
        }

        & h3 {
          margin: 2px;
          background: #444444;
          color: white;
        }
      }
    }
  }
`
