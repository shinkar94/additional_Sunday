import React, {useState} from 'react';
import {RightContent} from "./rightContent/RightContent";
import {InitialState} from "../../common/InitialState";

export const Content = () => {
    const [phone, setPhone] = useState(InitialState)
    return (
        <div>
            <RightContent phone={phone}/>
        </div>
    );
};
