import React, {FC} from 'react';
import {InitialStateType} from "../../../common/InitialState";
type PropsType = {
    filteredState: InitialStateType[]
    addBasket: (id:number) =>void
}
export const MappedProduct:FC<PropsType> = (props) => {
    const {filteredState, addBasket} = props
    return (
        <>
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
        </>
    );
};
