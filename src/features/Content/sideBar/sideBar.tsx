import React, {FC} from 'react';
import styled from "styled-components";

type SideBarType = {
    category: string[]
    toggleCategory: (newCategory: string)=>void
}
export const SideBar:FC<SideBarType> = (props) => {
    const {toggleCategory, category} = props
    return (
        <StSideBar>
            {category.map((el, index) => <p key={index} onClick={()=>{toggleCategory(el)}}>{el}</p>)}
        </StSideBar>
    );
};

const StSideBar = styled.div`
    background: cornsilk;
    & p {
      background: gray;
      margin: 2px;
      cursor: pointer;
      color: white;
      font-size: 18px;
      padding: 4px;
      border-radius: 4px;

      &:hover {
        background: brown;
      }
    }
`