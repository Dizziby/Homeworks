import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react'
import styles from "./SuperRadio.module.css"
import s from "../../../h4/common/c3-SuperCheckbox/SuperCheckbox.module.css";

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: string[]
    onChangeOption?: (option: string) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type,
        name,
        options,
        value,
        onChange,
        onChangeOption,
        className,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e)
        onChangeOption && onChangeOption(e.currentTarget.value)
    }

    const finalRadioClassName = `${styles.radio} ${className ? className : ''}`

    const mappedOptions: any[] = options ? options.map((o, i) => (
        <label key={name + '-' + i} className={finalRadioClassName}>
            <input
                type={'radio'}
                name={name}
                checked={value === o}
                value={o}
                onChange={onChangeCallback}
                // name, checked, value, onChange
            />
            {o}
        </label>
    )) : []

    return (
        <div>
            {mappedOptions}
        </div>
    )
}

export default SuperRadio
