import {Header} from "../Header/Header";
import {Content} from "../Content/Content";
import {InitialStateType} from "../../common/InitialState";
import {FC} from "react";


type Props = {
    basket: InitialStateType[]
    marketState: InitialStateType[]
    category: string[]
}
export const Layout:FC<Props> = (props) =>{
    const {category,marketState,basket} = props
    return(
        <>
            <Header basket={basket} marketState={marketState}/>
            <Content category={category} />
        </>
    )
}