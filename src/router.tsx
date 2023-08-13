import {RouterProvider,createBrowserRouter} from 'react-router-dom'
import {Basket} from "./features/basket/Basket";
import {RightContent} from "./features/Content/RContent/rightContent";
import {InitialStateType} from "./common/InitialState";
import {FC} from "react";
import {Layout} from "./features/layout/layout";


type Props = {
    basket: InitialStateType[]
    marketState: InitialStateType[]
    setBasket: (basket: InitialStateType[])=>void
    addBasket: (id: number)=>void
    category: string[]
}
export const Router:FC<Props> = (props) =>{
    const {category,setBasket,addBasket,marketState,basket} = props
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Layout basket={basket} marketState={marketState} category={category}/>,
            errorElement: <h1>error</h1>,
            children: [
                {
                    path: 'product/:title',
                    element: <RightContent addBasket={addBasket} basket={basket} marketState={marketState}/>
                },
                {
                    path: 'basket/',
                    element: <Basket basket={basket} setBasket={setBasket}/>
                }
            ]
        }
    ])

    return <RouterProvider router={router} />
}