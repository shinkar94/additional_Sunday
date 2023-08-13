import React, {FC} from 'react';
import {NavLink} from "react-router-dom";
import {S} from './SideBarStyle'
import {useWindowSize} from "../../../helpers/useWindowSize";

type SideBarType = {
    category: string[]
}
export const SideBar:FC<SideBarType> = (props) => {
    const { category} = props
    const size = useWindowSize()
    return (
        <S.SideBar size={size}>
            {category.map((el, index) => <NavLink key={index} to={`/product/${el}`}>{el}</NavLink>)}
        </S.SideBar>
    );
};