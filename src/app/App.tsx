import React, {useEffect, useState} from 'react';
import '../App.css';
import {Content} from "../features/Content/Content";

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
    const [category, setCategory] = useState([])

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
        }
        getData()
    },[])
    // console.log(marketState)
    const filteredState = marketState.filter(el => el.category === filterCategory)
  return (
    <div className="App" style={{display: "flex"}}>
        <div className={'sideBar'}>
            {category.map((el, index) => <p key={index} onClick={()=>{toggleCategory(el)}}>{el}</p>)}
        </div>
        <div>
            {
                filteredState.map((el)=>{
                    return(
                        <div key={el.id}>
                            <p>{el.title}</p>
                            <p>{el.brand}</p>
                            <p>{el.price}</p>
                        </div>
                    )
                })
            }
        </div>
      <Content />
    </div>
  );
}

export default App;
