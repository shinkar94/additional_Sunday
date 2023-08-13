import React, {FC} from 'react';
import styled from "styled-components";
import {SideBar} from "./sideBar/sideBar";
import {Outlet} from 'react-router-dom'


type ContentProps = {
    category: string[]
}
export const Content:FC<ContentProps> = (props) => {
    const {category} = props
    return(
            <StContent>
                <SideBar category={category}/>
                <Outlet />
            </StContent>
    )
};

const StContent = styled.main`
  background: #f3d7af;
  padding: 10px;
  display: flex;
`
