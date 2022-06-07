import React from "react";
import s from "./HW12.module.css";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeC} from "./bll/themeReducer";

const themes = ['grey', 'dark', 'red', 'some', 'yellow'];

function HW12() {
    const theme = useSelector<AppStoreType, string>(state => state.theme.theme); // useSelector

    // useDispatch, onChangeCallback
    const dispatch = useDispatch()

    const onChangeTheme = (value: string) => {
        dispatch(changeThemeC(value))
    }

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}
            <SuperRadio
                name={'radioTheme'}
                options={themes}
                value={theme}
                onChangeOption={onChangeTheme}
                className={s[theme + '-text']}
            />

            <hr/>
        </div>
    );
}

export default HW12;