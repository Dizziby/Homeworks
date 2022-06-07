import React from 'react'
import 'rc-slider/assets/index.css';
import styles from "./SuperDoubleRange.module.css"
import Slider from "rc-slider";

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: number | number[]) => void
    value: [number, number]
    min?: number
    max?: number
    step?: number
    disabled?: boolean

    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        min, max, step, disabled, ...restProps
    }
) => {
    // сделать самому, можно подключать библиотеки

    const onChangeHandler = (value: number[] | number) => {
        onChangeRange && onChangeRange(value)
    }

    return (
        <>
            <Slider
                className={styles.doubleRange}
                range={true}
                value={value}
                min={min}
                max={max}
                step={step}
                disabled={disabled}
                onChange={onChangeHandler}
                defaultValue={value}
                allowCross={false}
                railStyle={{height: "10px"}}
                trackStyle={{backgroundColor: '#ad7676', height: "10px"}}
                handleStyle={{backgroundColor: '#635892', border: "none", opacity: "1", height: "20px", width: "20px"}}
            />
        </>
    )
}

export default SuperDoubleRange
