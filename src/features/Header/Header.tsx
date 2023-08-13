import React, {ChangeEvent, FC, useState} from 'react';
import styled from "styled-components";
import basketImg from '../../assets/img/basket.svg'
import loginImg from '../../assets/img/login.svg'
import {InitialStateType} from "../../common/InitialState";
import {NavLink} from "react-router-dom";

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
            <h3>My Shop</h3>
            <div className={'searchPanel'}>
                <input type="text" value={searchText} onChange={changeHandler} placeholder={'search'}/>
                <div className={'searchBlock'}>
                    {filteredProduct.map(el => <p key={el.id}>{el.title}</p>)}
                </div>
            </div>
            <div className={'btn_hed_panel'}>
                <div className={'group login_group'}>
                    <NavLink to={'/basket'}><img src={loginImg} alt="loginImg"/></NavLink>
                    Login
                </div>
                <div className={'group basket_group'}>
                    <NavLink to={'/basket'}><img src={basketImg} alt="basketImg"/><span>{basket.length}</span></NavLink>
                    Basket
                </div>
            </div>
        </StHeader>
    );
};


const StHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  background: #F7F8FA;
  height: 60px;
  box-shadow: 0 2px 4px 2px gray;
  z-index: 2;
  & a{
    position: relative;
    background: none;
    border: none;
    cursor: pointer;
    & img{
      width: 25px;
    }
    & span{
      position: absolute;
      bottom: 0;
      right: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 16px;
      height: 16px;
      background: red;
      border-radius: 50%;
      color: white;
      font-size: 12px;
    }
  }
  .searchPanel{
    display: flex;
    position: relative;
    width: 500px;
    & input{
      height: 30px;
      width: 100%;
      border-radius: 20px;
      border: none;
      box-shadow: 0 2px 5px 1px gray;
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
      z-index: 2;
    }
  }
  .btn_hed_panel{
    display: flex;
    cursor: pointer;
    gap: 5px;
    .group{
      display: flex;
      justify-content: center;
      min-width: 100px;
      align-items: center;
      border: 1px solid gray;
      border-radius: 20px;
      padding: 2px;
    }
  }
`