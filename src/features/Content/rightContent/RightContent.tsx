import React, {useState} from 'react';
import {InitialStateType} from "../../../common/InitialState";
type PropsType = {
    phone: InitialStateType[]
}
export const RightContent = (props: PropsType) => {
    const [test, setTest] = useState(['www', 'eee', 'tttt'])
    const mapPhone = props.phone.map((el)=>{
        return(
            <div key={el.id}>
                {el.title}
                {el.description}
                {el.price}
                {el.discountPercentage}
                {el.rating}
                {el.stock}
                {el.brand}
                {el.category}
                {el.thumbnail}
                <img src={el.images[0]} alt=""/>
            </div>
        )
    })
    return (
        <div>
            {mapPhone}
        </div>
    );
};
