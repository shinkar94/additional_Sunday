import React, {FC} from 'react';
import {InitialStateType} from "../../../common/InitialState";
import styled, {css} from "styled-components";
type PropsType = {
    filteredState: InitialStateType[]
    addBasket: (id:number) =>void
    basket: InitialStateType[]
}
export const MappedProduct:FC<PropsType> = (props) => {
    const {filteredState, addBasket, basket} = props
    return (
        <>
            {
                filteredState.map((el)=>{
                    const controledBasket = basket.find(prod => prod.id === el.id)
                    return(
                        <div key={el.id} className={'product'}>
                            <StTopProduct>
                                <p>{el.brand}</p>
                                <h3>{el.title}</h3>
                                <div className={'rating'}>
                                    <p>{el.rating}</p>
                                    <p>{el.price}</p>
                                </div>
                            </StTopProduct>
                            <img src={el.thumbnail} alt={el.title}/>
                            <p>{el.description}</p>
                            <StFooterProduct $controledBasket={!controledBasket}>
                                <button onClick={()=>{addBasket(el.id)}}
                                        disabled={controledBasket !== undefined}>
                                    {controledBasket !== undefined ? 'added' : 'send basket'}
                                </button>
                            </StFooterProduct>
                        </div>
                    )
                })
            }
        </>
    );
};


const StTopProduct = styled.div`
  display: flex;
  justify-content: space-between;
  .rating{
    display: flex;
  }
`

const StFooterProduct = styled.div<{$controledBasket: boolean}>`
  display: flex;
  justify-content: right;

  & button {
    width: 100px;
    cursor: pointer;
    background: linear-gradient(45deg, #d93b3b, #917491);
    color: white;
    height: 30px;
    border-radius: 4px;
    border: 1px solid black;

    &:hover {
      background: #fc6161;
    }

    ${({$controledBasket}) => !$controledBasket && css`
      background: rgba(145, 116, 145, 0.7);

      &:hover {
        background: rgba(165, 42, 42, 0.41);
      }
    `}
  }
`
