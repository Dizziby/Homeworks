import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
    onKeyPressAddUser: (e: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onKeyPressAddUser} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : s.correct // need to fix with (?:)
    console.log(name)
    return (
        <div>
            <SuperInputText
                value={name}
                onChange={setNameCallback}
                onKeyPress={onKeyPressAddUser}
                error={error}
                className={inputClass}
            />
            <SuperButton onClick={addUser}
                         disabled={!!error}>
                ADD
            </SuperButton>
            <span> {totalUsers}</span>
        </div>
    )
}

export default Greeting
