import React, {FC} from 'react';
import styled from "styled-components";
import {NavLink} from "react-router-dom";

type SideBarType = {
    category: string[]
}
export const SideBar:FC<SideBarType> = (props) => {
    const { category} = props
    return (
        <StSideBar>
            {category.map((el, index) => <NavLink key={index} to={`/product/${el}`}>{el}</NavLink>)}
        </StSideBar>
    );
};

const StSideBar = styled.div`
    display: flex;
    flex-direction: column;
    background: cornsilk;
    & a {
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