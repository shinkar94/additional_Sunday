import React, {FC} from 'react';
import {InitialStateType} from "../../../common/InitialState";
import {MappedProduct} from "./mappedProduct";
import {useParams} from "react-router-dom";
import {S} from './rightContentStyle'

type PropsType = {
    marketState: InitialStateType[]
    addBasket: (id:number) =>void
    basket: InitialStateType[]
}
export const RightContent:FC<PropsType> = (props) => {
    const {addBasket,marketState,basket} = props
    const params = useParams()
    const filteredState = marketState.filter(el => el.category === params.title)
    return (
        <S.RightContent>
            <MappedProduct filteredState={filteredState} basket={basket} addBasket={addBasket}/>
        </S.RightContent>
    );
};


