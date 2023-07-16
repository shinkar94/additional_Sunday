import React, {FC} from 'react';
import {InitialStateType} from "../../app/App";
import styled from "styled-components";
import basketImg from '../../assets/img/basket.svg'

type BasketType={
    basket: InitialStateType[]
}
export const Header:FC<BasketType> = (props) => {
    const {basket} = props
    return (
        <StHeader>
            <img src="#" alt="logo"/>
            <input type="text"/>
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
`