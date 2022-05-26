import React, {useEffect, useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import styles from "./Clock.module.css"

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>(new Date())
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        // stop
        clearTimeout(timerId)
    }

    const start = () => {
        stop()
        setDate(new Date())
        const id: number = window.setInterval(() => {
            // setDate
            setDate(new Date())
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        // show
        setShow(true)

    }
    const onMouseLeave = () => {
        // close
        setShow(false)
    }

    const stringTime = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}` // fix with date
    const stringDate = `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}` // fix with date

    return (
        <div>
            <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                className={styles.time}
            >
                {stringTime}
            </div>
            <div className={styles.date}>
                {show && `${stringDate}`}
            </div>
            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    )
}

export default Clock
