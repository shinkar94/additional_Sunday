import React, {FC} from 'react';
import styled from "styled-components";
import {SideBar} from "./sideBar/sideBar";
import {RightContent} from "./RContent/rightContent";
import {InitialStateType} from "../../common/InitialState";


type ContentProps = {
    category: string[]
    toggleCategory: (newCategory: string)=>void
    filteredState: InitialStateType[]
    addBasket: (id:number) =>void
}
export const Content:FC<ContentProps> = (props) => {
    const {category,toggleCategory, filteredState,addBasket} = props
    return(
            <StContent>
                <SideBar category={category} toggleCategory={toggleCategory}/>
                <RightContent  filteredState={filteredState} addBasket={addBasket}/>
            </StContent>
    )
};

const StContent = styled.main`
    background: antiquewhite;
    padding: 10px;
    display: flex;
`
