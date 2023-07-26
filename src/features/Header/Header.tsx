import React, {ChangeEvent, FC, useState} from 'react';
import {InitialStateType} from "../../app/App";
import styled from "styled-components";
import basketImg from '../../assets/img/basket.svg'

type HeaderType={
    basket: InitialStateType[]
    marketState: InitialStateType[]
}
export const Header:FC<HeaderType> = (props) => {
    const {basket, marketState} = props
    const [searchText, setSearchText] = useState('')
    const changeHandler = (event: ChangeEvent<HTMLInputElement>) =>{
        setSearchText(event.currentTarget.value)
    }
    const filteredProduct = searchText.length > 0 ? marketState.filter(el => el.title.toLowerCase().includes(searchText.toLowerCase())) : []
    return (
        <StHeader>
            <img src="#" alt="logo"/>
            <div className={'searchPanel'}>
                <input type="text" value={searchText} onChange={changeHandler} placeholder={'search'}/>
                <div className={'searchBlock'}>
                    {filteredProduct.map(el => <p key={el.id}>{el.title}</p>)}
                </div>
            </div>
            <button><img src={basketImg} alt="basketImg"/><span>{basket.length}</span></button>
        </StHeader>
    );
};


const StHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  background: burlywood;
  & button{
    position: relative;
    background: none;
    border: none;
    cursor: pointer;
    & img{
      width: 40px;
    }
    & span{
      position: absolute;
      bottom: 0;
      right: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 20px;
      height: 20px;
      background: red;
      border-radius: 50%;
      color: white;
    }
  }
  .searchPanel{
    display: flex;
    position: relative;
    width: 500px;
    & input{
      height: 30px;
      width: 100%;
    }
    .searchBlock{
      position: absolute;
      top: 36px;
      left: 0;
      width: 500px;
      max-height: 500px;
      overflow: auto;
      background: brown;
      color: white;
    }
  }
`