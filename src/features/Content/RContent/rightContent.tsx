import React, {FC, useState} from 'react';
import {InitialStateType} from "../../../common/InitialState";
import styled from "styled-components";
import {MappedProduct} from "./mappedProduct";
type PropsType = {
    filteredState: InitialStateType[]
    addBasket: (id:number) =>void
}
export const RightContent:FC<PropsType> = (props) => {
    const {addBasket,filteredState} = props
    return (
        <StRightContent>
            <MappedProduct filteredState={filteredState} addBasket={addBasket}/>
        </StRightContent>
    );
};

const StRightContent = styled.div`
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
`
