import React from 'react'
import HW8 from "../../h8/HW8";
import HW7 from "../../h7/HW7";
import HW9 from "../../h9/HW9";
import HW10 from "../../h10/HW10";
import HW11 from "../../h11/HW11";
import HW12 from "../../h12/HW12";
import {useSelector} from "react-redux";
import {AppStoreType} from "../../h10/bll/store";
import s from "../../h12/HW12.module.css";

function Junior() {

    const theme = useSelector<AppStoreType, string>(state => state.theme.theme);

    return (
        <div className={s[theme]}>
            Junior
            <HW7/>
            <HW8/>
            <HW9/>
            <HW10/>
            <HW11/>
            <HW12/>
        </div>
    );
}

export default Junior
